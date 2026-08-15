---
title: "Unified Acoustic Representation Learning for Vietnamese Speech Classification Tasks"
collection: publications
permalink: /publication/2025-unified-acoustic
date: 2025-01-01
venue: 'MAPR 2025'
paperurl: '/files/mapr-2025-vn-lora-llm-speech-classification-paper.pdf'
citation: 'Xuan-Truong Ha, Van-Huy Nguyen, <b>Tri-Nhan Do</b>, Trung-Kien Phan, Dang-Khoa Mac'
---

[Download Paper](/files/mapr-2025-vn-lora-llm-speech-classification-paper.pdf)

<p style='text-align: justify;'>Analyzing multiple attributes of Vietnamese speech concurrently, such as gender, dialect, and emotion, is an important yet challenging task. Traditional methods often isolate each task, potentially overlooking correlations and leading to suboptimal performance. This paper proposes a unified architecture that integrates features derived from two different representations of the same input audio signal: raw waveforms and Mel spectrograms. The architecture employs a fixed, pre-trained Wav2Vec 2.0 encoder processing the waveform and a trainable Vision Transformer (ViT) encoder processing the spectrogram. These representations are fused using Feature-wise Linear Modulation (FiLM). This single multi-task model is designed to concurrently classify gender, dialect, and emotion. We detail a practical training strategy for a multi-dataset scenario using probabilistic sampling and a masked loss function, alongside a tailored hybrid evaluation protocol (fixed test set for ViMD, 5-fold cross-validation for VNEMOS). The proposed approach achieves competitive Macro F1-scores: 98.74% (gender), 91.81% (dialect), and 95.53% (emotion, 5-fold average). This research demonstrates the effectiveness of fusing different acoustic representations within a unified multi-task model for complex Vietnamese speech analysis.</p>

<iframe src="/files/mapr-2025-vn-lora-llm-speech-classification-paper.pdf" width="100%" height="4000"></iframe>
