---
title: "A Dual-Stream GRU-Conformer Architecture for Brain-to-Text Decoding from Utah Array Recordings"
excerpt: "Decoding intended speech from intracortical neural signals using a Dual-Stream GRU-Conformer that encodes spike count and spike band power independently, achieving 9.38% WER on Brain-to-Text Benchmark '24.<br/><img src='/images/brain2text.png'>"
collection: portfolio
date: 2026-01-01
---

Anonymous submission to Interspeech 2026

<iframe src="/files/brain2text.pdf" width="100%" height="6000"></iframe>

## Abstract

Decoding intended speech from intracortical neural signals is critical for restoring communication in individuals with Amyotrophic Lateral Sclerosis (ALS). Existing approaches concatenate multiunit threshold crossings and spike band power into a single stream, conflating two complementary neural modalities.

We propose a **Dual-Stream GRU-Conformer** that encodes each feature independently through parallel bidirectional GRU branches, exchanges cross-modal information via cross-stream attention, and fuses representations through a Conformer encoder. At inference, a triple-LM rescoring pipeline combining a 5-gram language model, Whisper-large-v3, and Qwen2.5-72B-Instruct reranks beam search hypotheses.

Evaluated on the Brain-to-Text Benchmark '24, our system achieves **9.38% WER**, outperforming the NPTL baseline (9.76%).

**Index Terms**: human-computer interaction, Utah Array, brain-to-text

## Proposed Method

### System Overview

The system follows the cascade paradigm: a neural encoder maps intracortical spike sequences to per-timestep phoneme logits via CTC, which are then decoded using a language model pipeline.

### Input Preprocessing

Each input trial is represented as **X** ∈ ℝ^(T×256), where T is the number of 10ms time bins and 256 is the number of electrode channels:
- First 128 channels: multiunit threshold crossings (`tx1`) — proxy for spike count
- Remaining 128 channels: spike band power (`spikePow`) — high-frequency local field potential energy

A per-day affine calibration layer is applied to compensate for inter-session non-stationarities. Both streams are temporally compressed using a sliding window (kernel K=32, stride S=4 bins), producing ~25 Hz effective frame rate.

### Dual-Stream GRU Encoder

Rather than concatenating the two feature modalities, each stream is processed independently:

- **H^tx1** = BiGRU_tx1(**X^tx1**) — 5 layers, hidden size 512 per direction
- **H^sp** = BiGRU_sp(**X^sp**) — 5 layers, hidden size 512 per direction

### Cross-Stream Attention

A bidirectional cross-stream attention module allows each modality to attend to information in the other:

- **H̃^tx1** = H^tx1 + MHA(H^tx1, H^sp, H^sp)
- **H̃^sp** = H^sp + MHA(H^sp, H^tx1, H^tx1)

### Conformer Encoder

The cross-attended streams are concatenated, projected to dimension D_c = 512, and passed through N=2 Conformer blocks (8-head MHSA, depthwise convolution kernel size 15 with GLU). Output is projected to C+1 = 41 logits for CTC.

### Triple-LM Rescoring

At inference, beam search under a Kaldi 5-gram LM produces 100-best hypotheses. Each hypothesis is rescored by linearly combining:
- CTC log-likelihood
- 5-gram LM score
- Whisper-large-v3 log-probability (speech-domain prior)
- Log-perplexity under Qwen2.5-72B-Instruct (quantized to 4-bit NF4)

## Experiments

### Dataset

Brain-to-Text Benchmark '24: 12,100 sentences of intended speech recorded from a single ALS participant via 256 Utah Array electrodes in speech-related motor cortex (area 6V). Split: 8,800 training / 880 test samples. Evaluated using WER on 1,200 held-out sentences.

### Results

| Method | WER (%) |
|---|---|
| NPTL PyTorch Baseline (5-gram + OPT-6B) | 9.76 |
| **Dual-stream GRU-Conformer (ours)** | **9.38** |

### Data Augmentation

Four-stage augmentation pipeline:
1. **Additive noise**: white noise + per-channel constant offset
2. **Temporal CutMix**: pastes contiguous temporal segments across samples
3. **Input Mixup**: linearly interpolates pairs of training samples (Beta(0.3, 0.3))
4. **SpecAugment**: masks up to 20 random time spans and 2 random channel spans (up to 40 channels each)

### Optimization

- AdamW (β1=0.9, β2=0.98, ε=10^-8, weight decay=10^-4)
- 5,000-step linear warmup to 3×10^-4, cosine decay to 1%
- Trained on 8× A100 40GB GPUs
