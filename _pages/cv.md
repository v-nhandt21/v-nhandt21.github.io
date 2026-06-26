---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.page__content h2 { border-bottom: none; }

/* ── Download buttons ── */
.cv-download { margin-bottom: 28px; display: flex; gap: 10px; flex-wrap: wrap; }
.cv-download a {
  display: inline-block;
  padding: 8px 18px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: opacity .15s;
}
.cv-download a:hover { opacity: 0.85; }
.btn-primary { background: #2b4c7e; color: #fff !important; }
.btn-outline { background: transparent; color: #2b4c7e !important; border: 1.5px solid #2b4c7e; }

/* ── Section titles ── */
.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a2e;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-bottom: 2px solid #2b4c7e !important;
  padding-bottom: 6px;
  margin: 28px 0 16px;
}

/* ── Skills ── */
.skill-group { margin-bottom: 10px; font-size: 0.88rem; display: flex; gap: 8px; align-items: flex-start; }
.skill-group-label {
  font-weight: 700;
  color: #2b4c7e;
  min-width: 110px;
  padding-top: 3px;
  flex-shrink: 0;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.skill-tag {
  background: #f0f4fa;
  border: 1px solid #d0ddf0;
  color: #333;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.78rem;
}

/* ── Entry block ── */
.cv-entry {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.cv-entry:last-child { border-bottom: none; }
.cv-entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 2px;
}
.cv-entry-company {
  font-weight: 700;
  color: #1a1a2e;
  font-size: 0.95rem;
}
.cv-entry-location {
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
}
.cv-role-line {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 6px;
  gap: 4px;
}
.cv-role {
  font-style: italic;
  font-size: 0.88rem;
  color: #2b4c7e;
  font-weight: 600;
}
.cv-date {
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
}
.cv-entry ul {
  margin: 4px 0 0 0;
  padding-left: 1.2em;
  font-size: 0.87rem;
  line-height: 1.6;
  color: #333;
}
.cv-entry ul li { margin-bottom: 3px; }
.cv-entry ul li strong { color: #1a1a2e; }
.cv-subrole { margin-top: 10px; }

/* ── Publication list ── */
.pub-list { list-style: none; padding: 0; margin: 0; }
.pub-list li {
  padding: 9px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.87rem;
  line-height: 1.6;
}
.pub-list li:last-child { border-bottom: none; }
.pub-venue {
  display: inline-block;
  background: #eef3fb;
  color: #2b4c7e;
  border-radius: 3px;
  padding: 1px 7px;
  font-size: 0.74rem;
  font-weight: 600;
  margin-right: 6px;
  vertical-align: middle;
}

/* ── Awards / list ── */
.cv-list { list-style: none; padding: 0; margin: 0; }
.cv-list li {
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.87rem;
  gap: 12px;
  flex-wrap: wrap;
}
.cv-list li:last-child { border-bottom: none; }
.cv-list .year {
  color: #2b4c7e;
  font-weight: 600;
  white-space: nowrap;
  font-size: 0.82rem;
}

/* ── PyPI badges ── */
.pypi-block { background: #f8f9fa; border-left: 3px solid #2b4c7e; padding: 10px 14px; border-radius: 0 5px 5px 0; margin: 8px 0; font-size: 0.87rem; }
.pypi-block code { background: #e8edf5; padding: 1px 5px; border-radius: 3px; font-size: 0.85em; }
</style>

<!-- Download buttons -->
<div class="cv-download">
  <a href="/latex/CV_long.pdf" class="btn-primary" target="_blank"><i class="fa fa-download"></i> Download Full CV (PDF)</a>
  <a href="/latex/CV_short.pdf" class="btn-outline" target="_blank"><i class="fa fa-file-alt"></i> Short CV (PDF)</a>
</div>

<!-- ══ TECHNICAL SKILLS ══ -->
<h2 class="section-title">Technical Skills</h2>

<div class="skill-group">
  <span class="skill-group-label">Speech & Audio</span>
  <span class="skill-tags">
    <span class="skill-tag">TTS / Flow Matching</span>
    <span class="skill-tag">Speaker Verification</span>
    <span class="skill-tag">Diarization</span>
    <span class="skill-tag">Voice Cloning</span>
    <span class="skill-tag">Anti-spoofing</span>
    <span class="skill-tag">Speech Enhancement</span>
    <span class="skill-tag">Sound Event Detection</span>
  </span>
</div>
<div class="skill-group">
  <span class="skill-group-label">ML & LLM</span>
  <span class="skill-tags">
    <span class="skill-tag">PyTorch</span>
    <span class="skill-tag">ONNX</span>
    <span class="skill-tag">Triton</span>
    <span class="skill-tag">TorchServe</span>
    <span class="skill-tag">SLM</span>
    <span class="skill-tag">Reinforcement Learning</span>
    <span class="skill-tag">Agno Agent</span>
    <span class="skill-tag">RAG</span>
    <span class="skill-tag">Speech SSL</span>
  </span>
</div>
<div class="skill-group">
  <span class="skill-group-label">Engineering</span>
  <span class="skill-tags">
    <span class="skill-tag">Docker</span>
    <span class="skill-tag">FastAPI</span>
    <span class="skill-tag">Flask</span>
    <span class="skill-tag">RabbitMQ</span>
    <span class="skill-tag">Milvus</span>
    <span class="skill-tag">Qdrant</span>
    <span class="skill-tag">Slurm</span>
    <span class="skill-tag">Datadog</span>
    <span class="skill-tag">Jenkins</span>
    <span class="skill-tag">Jfrog</span>
  </span>
</div>
<div class="skill-group">
  <span class="skill-group-label">Languages</span>
  <span class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">C++</span>
    <span class="skill-tag">Java</span>
    <span class="skill-tag">React</span>
  </span>
</div>

<!-- ══ EDUCATION ══ -->
<h2 class="section-title">Education</h2>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">VNUHCM &ndash; University of Science</span>
    <span class="cv-entry-location">Ho Chi Minh City, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Bachelor of Science, Advanced Program in Computer Science (APCS K17)</span>
    <span class="cv-date">Sep 2017 &ndash; Jun 2021</span>
  </div>
  <ul><li>GPA: 3.83 / 4.0 &nbsp;&middot;&nbsp; TOEFL ITP: 550 / 677</li></ul>
</div>

<!-- ══ EXPERIENCE ══ -->
<h2 class="section-title">Experience</h2>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Vinfast JSC</span>
    <span class="cv-entry-location">Ho Chi Minh City, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">AI Team Lead &ndash; Speech Generation</span>
    <span class="cv-date">Jun 2026 &ndash; Present</span>
  </div>
  <ul>
    <li><strong>Unified TTS Serving Gateway:</strong> Architected a production FastAPI gateway consolidating multiple TTS model tiers and normalization backends — supporting streaming, async job queue, API key auth with per-key usage tracking, and horizontal shard deployment for multilingual production serving.</li>
    <li><strong>TTS Normalization Automation Harness:</strong> Designed an end-to-end QC automation framework with LLM-based error classification, BA-configurable per-project switch-code vocabulary management, automated Java SDK and prompt rebuild, and full regression evaluation — reducing engineering intervention for vocabulary updates to zero.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">VinSmart Future &ndash; Vingroup JSC</span>
    <span class="cv-entry-location">Ho Chi Minh City, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">AI Team Lead &ndash; Speech Generation</span>
    <span class="cv-date">Feb 2026 &ndash; Jun 2026</span>
  </div>
  <ul>
    <li><strong>Research Team Leadership:</strong> Led a team of 6 on speech generation: voice design, non-verbal audio, and reinforcement learning for speech synthesis.</li>
    <li><strong>Voice Model Product Management:</strong> Coordinated between research and product; standardized QA and release processes across robot assistants, in-vehicle AI, and super-app voice mode.</li>
  </ul>
  <div class="cv-subrole">
    <div class="cv-role-line">
      <span class="cv-role">Senior AI Engineer &ndash; Core AI Research</span>
      <span class="cv-date">Jul 2025 &ndash; Feb 2026</span>
    </div>
    <ul>
      <li><strong>Vietnamese Phoneme-Based Flow Matching TTS:</strong> Developed a phoneme-adaptive fine-tuning TTS model achieving stable quality with low WER in production.</li>
      <li><strong>TensorRT & Triton Serving Optimization:</strong> Achieved 2&times; throughput improvement and increased concurrent user capacity.</li>
      <li><strong>Hybrid Text Normalization:</strong> SLM + rule-based hybrid pipeline improving accuracy 13% over the rule-based baseline.</li>
    </ul>
  </div>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Vingroup Big Data Institute &ndash; Vingroup JSC</span>
    <span class="cv-entry-location">Hanoi, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Middle AI Engineer &ndash; AI Agent & Voice Biometric</span>
    <span class="cv-date">Jan 2024 &ndash; Jul 2025</span>
  </div>
  <ul>
    <li><strong>AI Agent with Knowledge Base:</strong> Built a RAG-based agent with query processing, embedding, function calling, and automatic double-bot QC evaluation (2025).</li>
    <li><strong>Speech Data Warehouse:</strong> Managed a team building storage, querying, processing, release management, and NL querying integration (2025).</li>
    <li><strong>Streaming Diarization Optimization:</strong> Triton EEND-VC — 2&times; speed, superior quality over third-party solutions (2025).</li>
    <li><strong>Anti-spoofing Module:</strong> EER of 3.75% combining RawBoost augmentation, speech SSL, and Graph Neural Networks (2024).</li>
  </ul>
  <div class="cv-subrole">
    <div class="cv-role-line">
      <span class="cv-role">AI Engineer &ndash; Speech Synthesis & Voice Biometric</span>
      <span class="cv-date">Oct 2021 &ndash; Dec 2023</span>
    </div>
    <ul>
      <li><strong>Smart AI Voice Recording Service:</strong> Speaker Diarization + ASR + Voice Biometrics for insurance fraud detection (2023).</li>
      <li><strong>Government Voice Biometric Project:</strong> Microservice gateway with SNR Estimator, VAD, ASR, Speaker Counter via TorchServe and Milvus (2023).</li>
      <li><strong>Multispeaker Acoustic Model:</strong> 4&times; GPU reduction, 30-min fine-tuning, zero-shot cloning with 30s audio (2023).</li>
      <li><strong>Universal Multistream Vocoder:</strong> HiFi-GAN optimization — 1.5&times; faster inference without quality loss (2022).</li>
      <li><strong>AI Service User Interfaces:</strong> Demo and labeling tools using Streamlit, Material UI React, Wavesurfer.js (2022).</li>
      <li><strong>Tacotron2 Enhancement:</strong> Monotonic Alignment Attention integration to eliminate noise artifacts (2021).</li>
      <li><strong>Massive Speech Data Crawler:</strong> Large-scale automated pipeline covering selection, denoising, transcription, and quality ranking (2021).</li>
    </ul>
  </div>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">VinAI Research Institute &ndash; Vingroup JSC</span>
    <span class="cv-entry-location">Hanoi, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Engineering Resident &ndash; ERP Batch 1</span>
    <span class="cv-date">Dec 2020 &ndash; Sep 2021</span>
  </div>
  <ul>
    <li><strong>Vietnamese TTS for Electric Vehicles:</strong> Integrated Tacotron2, FastSpeech2, GlowTTS, HiFi-GAN; optimized with ONNX Runtime for edge inference.</li>
    <li><strong>SpeechMT:</strong> Real-time voice-based machine translation service (Docker + FastAPI).</li>
    <li><strong>Speech-Based QA for Car Manuals:</strong> Lightweight end-to-end voice-driven QA system.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">KMS Technology</span>
    <span class="cv-entry-location">Ho Chi Minh City, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Software Engineer &ndash; Center of Excellence</span>
    <span class="cv-date">Jun 2020 &ndash; Sep 2020</span>
  </div>
  <ul>
    <li><strong>RASA Chatbot Core Research:</strong> Intent classification combining Dense (ConveRT, BERT) and Sparse (TF-IDF, Count Vectors) features.</li>
    <li><strong>Reading Comprehension Backend:</strong> BIDAF-based services with AllenNLP, Flask, Swagger, Docker Compose, RabbitMQ.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Scooter Saigon Tour &ndash; Tourism Startup</span>
    <span class="cv-entry-location">Ho Chi Minh City, Vietnam</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">SEO Developer &ndash; Founder</span>
    <span class="cv-date">Jan 2014 &ndash; Aug 2017</span>
  </div>
  <ul>
    <li>Built WordPress site with PHP backend and VTCpay integration; managed SEO and social channels.</li>
  </ul>
</div>

<div style="font-size:0.87rem; color:#555; margin-bottom:8px;">
  <strong>Freelance AI Projects:</strong> Voice-Preserving Speech MT &middot; Singing Voice Conversion &middot; Pronunciation Assessment &middot; Speech Enhancement &middot; Sleep Stage Classification &middot; Emotional Dubbing
</div>

<!-- ══ RESEARCH AFFILIATIONS ══ -->
<h2 class="section-title">Research Affiliations</h2>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Speech and Language Lab, Nanyang Technological University</span>
    <span class="cv-entry-location">Singapore</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Research Intern (Remote)</span>
    <span class="cv-date">Sep 2022 &ndash; Mar 2023</span>
  </div>
  <ul><li>Government project with ST Engineering — classifying emergency sound events in urban areas.</li></ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Artificial Intelligence Lab, University of Science</span>
    <span class="cv-entry-location">Ho Chi Minh City</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Research Assistant</span>
    <span class="cv-date">Feb 2019 &ndash; Sep 2021</span>
  </div>
  <ul>
    <li>Built a Vietnamese speech corpus (19 GB); researched text normalization and phonology.</li>
    <li>Organized ERC2019 – Emotion Recognition Challenge.</li>
    <li>Teaching assistant at VNsigma Python beginner class (American Consulate).</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Robotics & IoT Lab, University of Science</span>
    <span class="cv-entry-location">Ho Chi Minh City</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Research Assistant</span>
    <span class="cv-date">May 2019 &ndash; Sep 2021</span>
  </div>
  <ul><li>Teacher for EV3 Mindstorm; coach for FLL, EVJ Makethon, and WRO competitions.</li></ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-header">
    <span class="cv-entry-company">Computational Linguistics Center, University of Science</span>
    <span class="cv-entry-location">Ho Chi Minh City</span>
  </div>
  <div class="cv-role-line">
    <span class="cv-role">Research Assistant</span>
    <span class="cv-date">Apr 2019 &ndash; Sep 2019</span>
  </div>
  <ul><li>Teaching assistant for English Linguistics faculty (USSH), guiding SDL Trados Studio.</li></ul>
</div>

<!-- ══ PUBLICATIONS ══ -->
<h2 class="section-title">Publications</h2>

<ul class="pub-list">
  <li><span class="pub-venue">MAPR 2025</span> Unified Acoustic Representation Learning for Vietnamese Speech Classification Tasks</li>
  <li><span class="pub-venue">MAPR 2025</span> Analyzing the Correlation and Impact of Speech Evaluation Metrics on Speaker Verification and ASR</li>
  <li><span class="pub-venue">MAPR 2025</span> Adapting WavLM for Vietnamese Speaker Diarization in Real-world Conversations</li>
  <li><span class="pub-venue">RIVF 2024</span> Enhancing Deepfake Detection: WavLM and Advanced RawBoost Augmentation</li>
  <li><span class="pub-venue">Voice Privacy 2024</span> Voice Attacker: Multi-Head Factorized Attentive Reconstructor and Gradient Reversal for Random Prosody Anonymization</li>
  <li><span class="pub-venue">DCASE 2023</span> Sound Event Detection with Soft Labels Using Self-Attention for Global Scene Feature Extraction</li>
  <li><span class="pub-venue">IJAL 2022</span> FastSpeechStyle: Fast, Emotion-Controllable, High-Quality Speech Synthesis</li>
  <li><span class="pub-venue">NeurIPS 2021</span> Vietnamese Speech-based Question Answering over Car Manuals</li>
  <li><span class="pub-venue">NAFOSTED 2020</span> Vietnamese Speech Synthesis with End-to-End Model and Text Normalization</li>
  <li><span class="pub-venue">MediaEval 2020</span> Emotion Classification Using WaveNet Features with SpecAugment and EfficientNet</li>
</ul>

<div class="pypi-block" style="margin-top:14px;">
  <strong>PyPI</strong> <code>vinorm</code> — Vietnamese Text Normalization &nbsp;&middot;&nbsp; 34,933+ downloads / 6 months
</div>
<div class="pypi-block">
  <strong>PyPI</strong> <code>viphoneme</code> — Vietnamese Grapheme-to-IPA Phonetization &nbsp;&middot;&nbsp; 4,195+ downloads / 6 months
</div>
<div style="font-size:0.87rem; margin-top:8px; color:#444;">
  <strong>Thesis:</strong> DeepSpeechVC &ndash; Voice Cloning Framework with Speech Synthesis and Voice Conversion
</div>

<!-- ══ AWARDS ══ -->
<h2 class="section-title">Awards & Recognition</h2>

<ul class="cv-list">
  <li><span>Outstanding Employee of the Year &ndash; VinBigdata</span><span class="year">2023</span></li>
  <li><span>First Place, VLSP TTS Emotional Speech Synthesis</span><span class="year">2022</span></li>
  <li><span>First Prize, Science-A-Thon, 9th Vietnamese Summer School of Science</span><span class="year">2022</span></li>
  <li><span>Outstanding Student Award in Artificial Intelligence, Ho Chi Minh City</span><span class="year">2021</span></li>
  <li><span>Excellent Thesis &ndash; Science and Technology Student Award</span><span class="year">2021</span></li>
  <li><span>Runner-Up, KMS Hackathon</span><span class="year">2020</span></li>
</ul>

<!-- ══ CERTIFICATIONS ══ -->
<h2 class="section-title">Certifications & Competitions</h2>

<ul class="cv-list">
  <li><span>ISO/IEC 19795-1:2021 (NIST/NVLAP) for Voice Biometric Testing</span><span class="year">2024</span></li>
  <li><span>IEEE Spoken Language Technology Workshop Hackathon</span><span class="year">2022</span></li>
  <li><span>7th/23 teams, IEEE Signal Processing Cup</span><span class="year">2022</span></li>
  <li><span>FPT Scholarship, Final Round, Code War Competition</span><span class="year">2019</span></li>
  <li><span>Final Round, Samsung Collegiate Programming Cup</span><span class="year">2018</span></li>
  <li><span>ACM-ICPC Vietnam National Programming Contest &ndash; Rank 33</span><span class="year">2018</span></li>
  <li><span>Self-Driving Cars Specialisation &ndash; University of Toronto (Coursera)</span><span class="year">2018</span></li>
</ul>

<!-- ══ VOLUNTEERING ══ -->
<h2 class="section-title">Volunteering</h2>

<ul class="cv-list">
  <li><span>Volunteer for medical research on dental surgery at HCMC Oromaxillofacial Hospital</span><span class="year">2021</span></li>
  <li><span>F1 contact tracing support during the Covid-19 pandemic</span><span class="year">2022</span></li>
  <li><span>Organized ERC2019 &ndash; Emotion Recognition Challenge</span><span class="year">2019</span></li>
  <li><span>Teaching assistant at VNsigma Python beginner class (American Consulate)</span><span class="year">2019</span></li>
</ul>
