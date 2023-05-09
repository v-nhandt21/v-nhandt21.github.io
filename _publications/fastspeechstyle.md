---
title: "FastSpeechStyle: Fast, Emotion Controllable and High-Quality Speech Synthesis"
collection: publications
permalink: /publication/fastspeechstyle
excerpt: 'This paper is about the number 2. The number 3 is left for future work.'
date: 2010-10-01
venue: 'Journal 1'
paperurl: 'https://v-nhandt21.github.io/FastspeechStyle/'
citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---

The Non-autoregressive text to speech models such as Fastspeech2 can fast synthesize the high quality speech. This model also allows explicit control of the pitch, energy and speed of the speech signal. But, to control the emotion while maintaining the natural human-like speech is still a problems. In this paper, we propose an expressive speech synthesis model that can synthesize high-quality speech with desired emotion. The proposed model includes two main components (1) Mel Emotion Encoder extracts emotion embedding from the Mel-spectrogram of audio, (2) the FastSpeechStyle, a non-autoregressive model, which is modified from vanilla Fastspeech2. The FastSpeechStyle replaces normal LayerNorm with Style Adaptive LayerNorm to "shift" and "scale" hidden features according to emotion embedding, the model also used an improved Conformer block instead of vanilla FFTBlock to better model the local and global dependency in the acoustic model.

[Download paper here](https://v-nhandt21.github.io/FastspeechStyle/)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2).