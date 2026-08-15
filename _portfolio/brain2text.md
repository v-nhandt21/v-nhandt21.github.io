---
title: "A Dual-Stream GRU-Conformer Architecture for Brain-to-Text Decoding from Utah Array Recordings"
excerpt: "Decoding intended speech from intracortical neural signals using a Dual-Stream GRU-Conformer that encodes spike count and spike band power independently, achieving 9.38% WER on Brain-to-Text Benchmark '24.<br/><img src='/images/brain2text.png'>"
collection: portfolio
date: 2026-01-01
published: false
header:
  teaser: "/images/brain2text.png"
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

---

## Technical Report: Dual-Stream GRU-Conformer (SMU Research Framing - Do Tri Nhan, March 2026)

<iframe src="/files/technical-report.pdf" width="100%" height="6000"></iframe>

### Dataset Overview

- **Source:** Dryad Repository — High-performance speech neuroprosthesis dataset
- **Baseline:** 9.1% WER (50-word vocab) / 23.8% WER (125,000-word vocab)
- **Total:** 10,880 trials — Train: 8,800 / Test: 880 / Competition Holdout: 1,200 (unlabeled)
- Neural activity from motor cortex at 20ms bin size; features: 128-ch `tx1` + 128-ch `spikePow`

| Feature | Meaning | Details |
|---|---|---|
| spikePow | Spike band power | Mean squared voltage, high-pass filtered at 250 Hz, linear regression denoised |
| tx1–tx4 | Threshold crossing | Counts of voltage crossings at -3.5, -4.5, -5.5, -6.5 × RMS threshold |

### Baseline Approach (Hybrid)

1. **Acoustic Model:** RNN (GRU) + CTC loss
2. **First Pass:** Beam Search + 5-gram Language Model
3. **Second Pass:** N-best hypotheses rescoring using LLMs (OPT 6.7B or Llama)

### Experimental Log

| ID | Model/Backbone | Approach | Result/WER |
|---|---|---|---|
| Sub 1 | Baseline Text | Leaderboard submission | 15% |
| Sub 3 | GRU + Llama Rescore | Reproduced 2024 Baseline | 9.76% |
| Sub 4 | Zipformer | Heavy backbone experiment | 17% |
| Sub 5 | Conformer (Deep) | 170M params | Overfit |
| Sub 6a-d | Conformer (Scaled) | Reduced params (33M), added layers | Slow convergence |
| Sub 7a | SwiGLU + RoPE + MixUp | Advanced Regularization | Instability |
| Sub 7b | Parameter-Limited | Params ≤ N×3000 (24M) | CER 25% (Stalled) |
| Sub 8 | Dual-Stream Cross-Attention | tx1/spikePow attention fusion | Failed |
| Sub 8a/b | Dual-Stream GRU | Pipeline parity with architecture swap | **9.38%** |
| Sub 14 | WhisperBrain | Whisper decoder as LM | Failed (>200%) |
| Sub 16 | Dual Conformer CTC | Gaussian smoothing + LayerDrop | Failed |
| Sub 17 | Enhanced Dual-Stream | Cross-stream attention + AdamW | Progressing... |

### Evaluation Strategies

1. **Standard Eval:** 5-gram LM + OPT-6.7B rescoring
2. **Whisper LM:** Whisper decoder as speech-domain language model fed silent audio
3. **Strong LLM:** Two-stage — Llama-3.1-8B perplexity scoring + Instruction Correction for phoneme confusion
4. **Triple-LM:** Ensemble of 5-gram + Whisper + Llama-70B (requires 2×40GB GPUs)

### Future Directions

| Focus Area | Proposed Hypothesis / Implementation |
|---|---|
| Feature Decoupling | Separate `tx1` and `spikePow` into parallel encoders to learn distinct temporal dynamics before fusion |
| Constrained Decoding | Apply 50-word fixed vocabulary constraint during beam search |
| Backbone Evolution | Transition from GRU to Conformer backbone while maintaining CTC pipeline stability |
| Ensemble Methods | Cross-model ensembling combining multiple LLM rescorers (Llama + OPT) |
| Augmentation Logic | Formulate theoretical justification for each augmentation choice |

**Backlog:** Test-Time Augmentation (TTA) with white noise averaging (potential 5–10% WER reduction) · WandB integration · Phoneme-to-Phoneme mapping codecs · Constrained beam search for closed 50-vocabulary

### Discussion: Why Whisper ASR Fails?

Frozen Whisper decoder yields WER >200% (Sub 14/15). Hypotheses:
1. Latent neural feature distribution significantly differs from speech-derived Mel-spectrograms Whisper was trained on
2. 8,800 samples insufficient to re-align Whisper decoder without catastrophic forgetting or extreme overfitting

---

## Research Proposal: Biosignal-Enabled Speech Synthesis (SMU PhD)

<iframe src="/files/biosignal-research-proposal.pdf" width="100%" height="6000"></iframe>

### Research Scope

Focuses on **Biosignal-Enabled Speech Synthesis** — enabling spoken communication by predicting acoustic speech signals from biosignals, for:
- Individuals after total laryngectomy (permanent loss of vocal fold function)
- Patients with ALS or locked-in syndrome
- Individuals with neurological/neuromuscular disorders

### Comparative Taxonomy: BCI vs SSI

| Interface | Brain-Computer Interface (BCI) | Silent Speech Interfaces (SSI) |
|---|---|---|
| Signal Input | EEG, ECoG, fMRI, MEG, Utah array, Neuralink | EMA, EMG, High-Speed Nasopharyngoscopy, Lip video |
| Data Attribute | Very low amplitude (10–100 µV), low SNR | Higher amplitude (0.1–5 mV), superior SNR |
| Physiological Origin | Central nervous system | Peripheral nervous system |
| Frequency | Non-invasive: 0.5–40 Hz; Invasive: kHz | 20–500 Hz |

### Silent Speech Interfaces (SSI) with EMG

**The Ground-Truth Paradox (Gaddy et al.):** Models trained on *vocalized facial EMG* must generalize to *silent facial EMG* — a severe domain shift (WER 66% baseline).

**Transfer Strategy:** Silent EMG → Vocalized EMG → Audio mapping achieves ~3.6% WER on closed vocabulary (20% relative reduction open vocabulary).

**MONA + LISA (2024 SOTA):**

| Test Set | Previous SOTA (WER) | MONA + LISA (WER) |
|---|---|---|
| Silent Speech (Open Vocab) | 28.8% | **12.2%** |
| Vocalized EMG | 23.3% | **3.7%** |

### Brain-Computer Interface (BCI) with Invasive Utah Array

**Dataset:** Brain-to-Text Benchmark 24 — 80GB, 12,100 sentences, 256-electrode Utah array, ALS participant, area 6V motor cortex.

**Leaderboard:**

| Method | WER (%) |
|---|---|
| Baseline (Willett et al.) | 9.1% (50-word) / 23.8% (125k-word) |
| Innerspeech | 10.08 |
| Stanford LISA | 8.93 |
| Okubo Lab (CIBR) | 8.26 |
| UCLA NECL | 5.68 |
| BraIn-to-Text (BIT) | **5.10** |

### BCI with Non-Invasive EEG

**Speech Modalities:**
- **Overt/Spoken Speech:** Clear ground truth but prone to muscle artifacts
- **Auditory Perception:** Analyzing neural responses to heard speech (Brennan dataset)
- **Covert/Imagined Speech:** Most complex, lowest SNR — core focus for assistive communication

**Technical Bottlenecks:** Low SNR · Generalization deficit · Temporal alignment paradox (no physical onset in imagined speech)

**Key Datasets:** Chisco (largest open-source imagined speech) · MSEEG · VocalMind

**Architecture Evolution:**
- Traditional: Raw EEG → Feature Extraction → Neural Decoder → Mel-spectrogram → Vocoder → Waveform
- Modern (2024–2025): Diffusion-based generation (Brain2Speech Diffusion on ECoG/EEG) · Hybrid Fusion with DTW aligning imagined neural sequences with ASR-TTS pipelines
