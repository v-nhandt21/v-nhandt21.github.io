---
title: "DeepSpeechVC: Voice Cloning Framework with Speech Synthesis and Voice Conversion - Experiment with Speech2Speech techniques to make voice conversion from a small sample of the target speakers"
collection: publications
permalink: /publication/thesis
excerpt: 'With motivation of reconstructing voices for people who are mute after an accident or a person who has died and there is a small amount of data about their voices, this thesis aims to conduct experiments and
apply new technologies, artificial neural networks to synthesize voices for Vietnamese. Different from speech synthesis models that require a onespeaker quality data set traditional voice cloning, we suggest
a new voice clone sytem, which is able to synthesize any person’s voice with only a few sample audio input of that person’s voice.'
date: 2021-01-01
venue: 'Thesis'
paperurl: ''
citation: '<b>Tri-Nhan Do</b>, Minh-Tri Nguyen under the advice of Prof. Vu Hai Quan, Msc. Xuan-Nam Cao'
---

[Download Paper](https://github.com/v-nhandt21/v-nhandt21.github.io/tree/master/files/Thesis.pdf)

Speech processing is an important research area in the field of artificial intelligence,alongside computer vision and natural language processing. Speech synthesis has been studied since the late 1950s, through the stages, the voice becomes more and more intelligent and natural like a human and can run in real-time and on devices. However, there are still many problems that need to be solved before they can be put into practice. One of them is the problem of voice cloning, which helps to synthesize a person’s voice with only an audio sample, in addition, we can extract the speaker’s features to be able to switch that person’s language. In this thesis, we proceed to build a voice cloning framework for Vietnamese. The framework will be a pipeline that includes many speech processing modules such as voice conversion, mel-generator, vocoder and speaker encoder. We experimented on SOTA models of the E2E Speech Synthesis, including mel-spectrogram generators such as Tacotron2, Fastspeech2, MelGAN, GlowTTS, and vocoders including Wave-glow, HifiGAN, then applied these models to Vietnamese. These models have been optimized to be able to run on Android devices without internet and GPU. For the voice conversion module, we have proposed a new method based on AutoVC and Deepspeech2, then conducted an evaluation to compare with international models in English, the result is much improved compared to the AutoVC model and therefore, this new method is also integrated into this framework. For each module, we choose the best method based on training time, model size, MOS score, real-time performance, GPU utils, then combine with other modules of the framework to form an end-to-end pipeline that can perform voice cloning. To evaluate the quality of cloned voice, we compared the pipeline using our method, which is voice cloning with voice conversion based on Deepspeech2, and the pipeline with voice conversion module using AutoVC. Our DeepSpeechVC framework results have a mel cepstral distortion of 11.90, better than the one using AutoVC with a result of

The new proposed voice conversion model helps to create the foundation for the study of Vietnamese voice cloning, the phoneme conversion and text standardization libraries are provided, these libraries can run on cross-platform (C++, Python, Android NDK) and have been practically applied in industrial products.

<embed src="/files/Thesis.pdf" width="1000" height="100%" type='application/pdf'>

<object data="/files/Thesis.pdf" type="application/pdf" width="1000px" height="100%">
    <embed src="/files/Thesis.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="http://yoursite.com/the.pdf">Download PDF</a>.</p>
    </embed>
</object>

<iframe src="/files/Thesis.pdf" width="100%" height="600px"></iframe>

<!-- <iframe src="https://github.com/v-nhandt21/v-nhandt21.github.io/blob/master/files/Thesis.pdf" width="100%" height="600px"></iframe> -->

<object data="/files/Thesis.pdf" type="application/pdf" width="1000px" height="100%">
    <p>
        Your browser does not support embedded PDF files.<br>
        <a href="/files/Thesis.pdf">Click here to
        download the PDF file.</a>
    </p>
</object>

<img src='/images/viphoneme.png'>