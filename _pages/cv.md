---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<a href="/files/CV_long.pdf" class="btn btn--info" target="_blank">Download Full CV (PDF)</a> &nbsp; <a href="/files/CV_short.pdf" class="btn btn--default" target="_blank">Download Short CV (PDF)</a>

---

## Technical Skills

**Speech & Audio:** TTS, Speaker Verification & Diarization, Voice Cloning & Conversion, Anti-spoofing, Speech Enhancement, Sound Event Detection

**ML & LLM:** PyTorch, ONNX, Triton, TorchServe, SLM, Reinforcement Learning, Agno Agent, RAG, Speech SSL

**Engineering:** Docker, FastAPI, Flask, RabbitMQ, Milvus, Qdrant Vector DB, Slurm, Datadog, Jenkins, Jfrog

**Languages:** Python (primary), C++, Java, React

---

## Education

**VNUHCM – University of Science** — Sep 2017 – Jun 2021
Bachelor of Science, Advanced Program in Computer Science (APCS K17), Ho Chi Minh City, Vietnam
- GPA: 3.83 / 4.0 &nbsp;|&nbsp; TOEFL ITP: 550 / 677

---

## Experience

**Vinfast JSC** &nbsp;|&nbsp; Ho Chi Minh City, Vietnam

*AI Team Lead – Speech Generation* &nbsp;|&nbsp; Jun 2026 – Present
- **Unified TTS Serving Gateway:** Architected a production FastAPI gateway consolidating multiple TTS model tiers and normalization backends — supporting streaming, async job queue, API key auth with per-key usage tracking, and horizontal shard deployment for multilingual production serving.
- **TTS Normalization Automation Harness:** Designed an end-to-end QC automation framework with LLM-based error classification, BA-configurable per-project switch-code vocabulary management, automated Java SDK and prompt rebuild, and full regression evaluation — reducing engineering intervention for vocabulary updates to zero.

---

**VinSmart Future – Vingroup JSC** &nbsp;|&nbsp; Ho Chi Minh City, Vietnam

*AI Team Lead – Speech Generation* &nbsp;|&nbsp; Feb 2026 – Jun 2026
- **Research Team Leadership:** Lead a team of 6 members on speech generation: voice design, non-verbal audio, and reinforcement learning for speech synthesis.
- **Voice Model Product Management:** Coordinate between research team and product projects; standardize QA and release processes for voice models across three product lines: robot assistants, in-vehicle AI, and super-app voice mode.

*Senior AI Engineer – Core AI Research* &nbsp;|&nbsp; Jul 2025 – Feb 2026
- **Vietnamese Phoneme-Based Flow Matching TTS:** Developed a Vietnamese phoneme-adaptive fine-tuning TTS model achieving stable quality with low WER in production.
- **TensorRT & Triton Serving Optimization:** Optimized model serving with TensorRT and Triton Inference Server, achieving 2× throughput improvement and increased concurrent user capacity.
- **Hybrid Text Normalization:** Developed a Small Language Model (SLM) combined with rule-based normalization in a hybrid pipeline, improving accuracy by 13% over the rule-based baseline.

---

**Vingroup Big Data Institute – Vingroup JSC** &nbsp;|&nbsp; Hanoi, Vietnam

*Middle AI Engineer – AI Agent & Voice Biometric* &nbsp;|&nbsp; Jan 2024 – Jul 2025
- **AI Agent with Knowledge Base:** Built a RAG-based AI agent with query processing, embedding, function calling, and automatic double-bot quality control evaluation (2025).
- **Speech Data Warehouse:** Managed a team building a speech data warehouse for storage, querying, processing, release management, and NL querying integration (2025).
- **Streaming Diarization Optimization:** Optimized and served streaming diarization with Triton EEND-VC, achieving 2× speed and superior quality over third-party solutions (2025).
- **Anti-spoofing Module:** Researched and deployed an anti-spoofing system with EER of 3.75%, combining RawBoost augmentation, speech SSL, and Graph Neural Networks (2024).

*AI Engineer – Speech Synthesis & Voice Biometric* &nbsp;|&nbsp; Oct 2021 – Dec 2023
- **Smart AI Voice Recording Service:** Designed an AI voice recording service for insurance operations using Speaker Diarization, ASR, and Voice Biometrics to detect agent fraud (2023).
- **Government Voice Biometric Project:** Implemented QC workflows and a microservice gateway contributing SNR Estimator, VAD, ASR, and Speaker Counter via TorchServe and Milvus (2023).
- **Multispeaker Acoustic Model:** Reduced GPU usage 4× via a multispeaker acoustic model supporting 30-min fine-tuning and zero-shot cloning with 30s of audio (2023).
- **Universal Multistream Vocoder:** Optimized the EV assistant cloud TTS vocoder with Universal Multistream HiFi-GAN, achieving 1.5× faster inference without quality loss (2022).
- **AI Service User Interfaces:** Developed UI tools for AI services to support demos, data labeling, model evaluation, POC, and project bidding using Streamlit, Material UI React, and Wavesurfer.js (2022).
- **Tacotron2 Enhancement:** Enhanced robustness of Tacotron2 by integrating Monotonic Alignment Attention, improving phoneme–speech alignment and eliminating noise artifacts (2021).
- **Massive Speech Data Crawler:** Designed a large-scale automated speech data crawling and processing system covering data selection, formatting, denoising, transcription, quality ranking, and characteristic analysis (2021).

---

**VinAI Research Institute – Vingroup JSC** &nbsp;|&nbsp; Hanoi, Vietnam

*Engineering Resident – ERP Batch 1* &nbsp;|&nbsp; Dec 2020 – Sep 2021
- **Vietnamese TTS for Electric Vehicles:** Integrated state-of-the-art TTS (Tacotron2, FastSpeech2, GlowTTS, HiFi-GAN), optimized with ONNX Runtime for edge inference.
- **SpeechMT:** Designed and deployed a real-time voice-based machine translation service containerized with Docker and served via FastAPI.
- **Speech-Based QA for Car Manuals:** Developed a lightweight speech-interactive system for voice-driven car manual queries, deployed end-to-end.

---

**KMS Technology** &nbsp;|&nbsp; Ho Chi Minh City, Vietnam

*Software Engineer – Center of Excellence* &nbsp;|&nbsp; Jun 2020 – Sep 2020
- **RASA Chatbot Core Research:** Improved intent classification by combining Dense (ConveRT, BERT) and Sparse (TF-IDF, Count Vectors) features; evaluated on SQuAD data.
- **Reading Comprehension Backend:** Built BIDAF-based reading comprehension services with AllenNLP, Flask, Swagger, Docker Compose, and RabbitMQ.

---

**Scooter Saigon Tour – Tourism Startup** &nbsp;|&nbsp; Ho Chi Minh City, Vietnam

*SEO Developer – Founder* &nbsp;|&nbsp; Jan 2014 – Aug 2017
- **Website Development:** Built a WordPress website with PHP backend and integrated VTCpay payment system.
- **SEO & Online Marketing:** Optimized site content, built backlink networks, and managed social media channels to improve search rankings.

---

**Freelance AI Projects (selected):**
Voice-Preserving Speech MT &nbsp;·&nbsp; Singing Voice Conversion &nbsp;·&nbsp; Pronunciation Assessment &nbsp;·&nbsp; Speech Enhancement & Noise Reduction &nbsp;·&nbsp; Sleep Stage Classification &nbsp;·&nbsp; Emotional Dubbing

---

## Research Affiliations

**Speech and Language Lab, Nanyang Technological University** &nbsp;|&nbsp; Singapore &nbsp;|&nbsp; Sep 2022 – Mar 2023

Research Intern (Remote)
- Participated in a government project with ST Engineering, developing and evaluating a model for classifying emergency sound events in urban areas.

**Artificial Intelligence Lab, University of Science** &nbsp;|&nbsp; Ho Chi Minh City &nbsp;|&nbsp; Feb 2019 – Sep 2021

Research Assistant
- Built a Vietnamese speech corpus (19 GB) and conducted research on text normalization and phonology.
- Organized ERC2019 – Emotion Recognition Challenge.
- Teaching assistant at VNsigma Python beginner class, supported by the American Consulate.

**Robotics & IoT Lab, University of Science** &nbsp;|&nbsp; Ho Chi Minh City &nbsp;|&nbsp; May 2019 – Sep 2021

Research Assistant
- Teacher for EV3 Mindstorm and coach for First Lego League (FLL), EVJ Makethon, and World Robot Olympiad (WRO) competitions.

**Computational Linguistics Center, University of Science** &nbsp;|&nbsp; Ho Chi Minh City &nbsp;|&nbsp; Apr 2019 – Sep 2019

Research Assistant
- Teaching assistant for the Faculty of English Linguistics (USSH), guiding students in SDL Trados Studio, a computer-assisted translation software.

---

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

**PyPI package** `vinorm`: Vietnamese Text Normalization (34,933+ downloads / 6 months)

**PyPI package** `viphoneme`: Vietnamese Grapheme-to-IPA Phonetization (4,195+ downloads / 6 months)

**Thesis:** DeepSpeechVC – Voice Cloning Framework with Speech Synthesis and Voice Conversion

---

## Awards & Recognition

- Outstanding Employee of the Year – VinBigdata &nbsp;|&nbsp; 2023
- First Place, VLSP TTS Emotional Speech Synthesis &nbsp;|&nbsp; 2022
- First Prize, Science-A-Thon, 9th Vietnamese Summer School of Science &nbsp;|&nbsp; 2022
- Outstanding Student Award in Artificial Intelligence, Ho Chi Minh City &nbsp;|&nbsp; 2021
- Excellent Thesis – Science and Technology Student Award &nbsp;|&nbsp; 2021
- Runner-Up, KMS Hackathon &nbsp;|&nbsp; 2020

---

## Certifications & Competitions

- Contributed to obtaining ISO/IEC 19795-1:2021 (NIST/NVLAP) for Voice Biometric Testing &nbsp;|&nbsp; 2024
- Participation, IEEE Spoken Language Technology Workshop Hackathon &nbsp;|&nbsp; 2022
- 7th/23 teams, IEEE Signal Processing Society's Signal Processing Cup &nbsp;|&nbsp; 2022
- FPT Scholarship, Final Round, Code War Competition &nbsp;|&nbsp; 2019
- Final Round, Samsung Collegiate Programming Cup &nbsp;|&nbsp; 2018
- ACM-ICPC Vietnam National Programming Contest – Rank 33 &nbsp;|&nbsp; 2018
- Self-Driving Cars Specialisation – University of Toronto (Coursera) &nbsp;|&nbsp; 2018

---

## Volunteering

- Volunteer for medical research on dental surgery at HCMC Oromaxillofacial Hospital &nbsp;|&nbsp; 2021
- F1 contact tracing support during the Covid-19 pandemic &nbsp;|&nbsp; 2022
- Organized ERC2019 – Emotion Recognition Challenge &nbsp;|&nbsp; 2019
- Teaching assistant at VNsigma Python beginner class (American Consulate) &nbsp;|&nbsp; 2019
