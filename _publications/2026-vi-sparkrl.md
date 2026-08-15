---
title: "Vi-SparkRL: Enhancing Tonal Accuracy and Naturalness in Vietnamese TTS via Multi-Objective Rewards"
collection: publications
permalink: /publication/2026-vi-sparkrl
date: 2026-01-03
venue: 'APSIPA ASC 2026'
paperurl: '/files/apsipa-2026-vi-sparkrl-paper.pdf'
citation: 'Xuan-Binh Dinh-Thi, <b>Tri-Nhan Do</b>, Tu-Anh Nguyen, Van-An Chu, Dang-Khoa Mac'
---

[Download Paper](/files/apsipa-2026-vi-sparkrl-paper.pdf)

<p style='text-align: justify;'>Recent advances in Large Language Models and neural audio codecs have significantly improved zero-shot Text-to-Speech (TTS) systems; however, maintaining tonal accuracy in languages such as Vietnamese remains a formidable challenge. Existing models often exhibit unstable prosody or phonetic biases that result in a noticeable foreign accent. In this paper, we propose Vi-SparkRL, a Reinforcement Learning enhanced framework designed to preserve Vietnamese tonal integrity in lightweight zero-shot Text-to-Speech models. Our approach introduces Group Sequence Policy Optimization, which performs sequence-level optimization to mitigate training instability and mode-collapse issues common in token-level reinforcement learning for continuous audio signals. Furthermore, we design a comprehensive multi-objective reward mechanism that integrates a specialized VietTone Reward for positional tonal matching, alongside constraints for intelligibility, speaker similarity, and acoustic quality. Evaluated on the PhoAudiobook dataset, Vi-SparkRL achieves a Word Error Rate of 2.85% and a tonal accuracy of 0.96, significantly outperforming traditional Supervised Fine-Tuning and competitive baselines. Our results demonstrate that sequence-level RL effectively aligns TTS models with the complex prosodic requirements of tonal languages while maintaining high naturalness.</p>

<iframe src="/files/apsipa-2026-vi-sparkrl-paper.pdf" width="100%" height="4000"></iframe>
