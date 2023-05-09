---
title: "FastSpeechStyle: Fast, Emotion Controllable and High-Quality Speech Synthesis"
collection: publications
permalink: /publication/fastspeechstyle
excerpt: 'The Non-autoregressive text to speech models such as Fastspeech2 can fast synthesize the high quality speech. This model also allows explicit control of the pitch, energy and speed of the speech signal. But, to control the emotion while maintaining the natural human-like speech is still a problems. In this paper, we propose an expressive speech synthesis model that can synthesize high-quality speech with desired emotion. The proposed model includes two main components (1) Mel Emotion Encoder extracts emotion embedding from the Mel-spectrogram of audio, (2) the FastSpeechStyle, a non-autoregressive model, which is modified from vanilla Fastspeech2. The FastSpeechStyle replaces normal LayerNorm with Style Adaptive LayerNorm to "shift" and "scale" hidden features according to emotion embedding, the model also used an improved Conformer block instead of vanilla FFTBlock to better model the local and global dependency in the acoustic model.'
date: 2022
venue: 'Journal'
paperurl: ''
citation: 'Van Thinh Nguyen, Tri-Nhan Do, Hung-Cuong Pham, Tuan Vu Ho, Ngoc-Minh-Khanh Nguyen, Dang-Khoa Mac'
---

[Download Paper](https://v-nhandt21.github.io/FastspeechStyle/)

The Non-autoregressive text to speech models such as Fastspeech2 can fast synthesize the high quality speech. This model also allows explicit control of the pitch, energy and speed of the speech signal. But, to control the emotion while maintaining the natural human-like speech is still a problems. In this paper, we propose an expressive speech synthesis model that can synthesize high-quality speech with desired emotion. The proposed model includes two main components (1) Mel Emotion Encoder extracts emotion embedding from the Mel-spectrogram of audio, (2) the FastSpeechStyle, a non-autoregressive model, which is modified from vanilla Fastspeech2. The FastSpeechStyle replaces normal LayerNorm with Style Adaptive LayerNorm to "shift" and "scale" hidden features according to emotion embedding, the model also used an improved Conformer block instead of vanilla FFTBlock to better model the local and global dependency in the acoustic model.
