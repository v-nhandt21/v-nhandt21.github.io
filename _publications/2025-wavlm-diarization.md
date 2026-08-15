---
title: "Adapting WavLM for Vietnamese Speaker Diarization in Real-world Conversations"
collection: publications
permalink: /publication/2025-wavlm-diarization
date: 2025-01-03
venue: 'MAPR 2025'
excerpt: 'While end-to-end neural diarization (EEND) models have achieved state-of-the-art performance, their effectiveness in low-resource languages such as Vietnamese remains underexplored due to the lack of annotated conversational data. In this study, we adapt WavLM-based speaker diarization to Vietnamese by fine-tuning the DiariZen model with Vietnamese speech data. Additionally, we introduce ViYT-Diar, a high-quality benchmark of manually annotated Vietnamese dialogues. Experimental results show that our fine-tuned model achieves a DER of 11.76% on the English CALLHOME two-speaker test set and 2.38% on ViYT-Diar, significantly outperforming Pyannote 3.1 and Falcon API. Furthermore, our custom clustering pipeline maintains stable performance across chunk sizes (2.38% - 2.59% DER), whereas off-the-shelf models degrade from 9.73% to 3.75%. These results underscore the effectiveness of language-specific fine-tuning and tailored clustering for low-resource speaker diarization.'
paperurl: '/files/mapr-2025-vn-wavlm-diarization-paper.pdf'
citation: 'Tuan-Duy Thang, Van-Huy Nguyen, <b>Tri-Nhan Do</b>, Quoc-Khanh Nguyen, Trung-Kien Phan, Dang-Khoa Mac'
---

[Download Paper](/files/mapr-2025-vn-wavlm-diarization-paper.pdf) | [Download Poster](/files/mapr-2025-vn-wavlm-diarization-poster.pdf)

<p style='text-align: justify;'>While end-to-end neural diarization (EEND) models have achieved state-of-the-art performance, their effectiveness in low-resource languages such as Vietnamese remains underexplored due to the lack of annotated conversational data. In this study, we adapt WavLM-based speaker diarization to Vietnamese by fine-tuning the DiariZen model with Vietnamese speech data. Additionally, we introduce ViYT-Diar, a high-quality benchmark of manually annotated Vietnamese dialogues. Experimental results show that our fine-tuned model achieves a DER of 11.76% on the English CALLHOME two-speaker test set and 2.38% on ViYT-Diar, significantly outperforming Pyannote 3.1 and Falcon API. Furthermore, our custom clustering pipeline maintains stable performance across chunk sizes (2.38% - 2.59% DER), whereas off-the-shelf models degrade from 9.73% to 3.75%. These results underscore the effectiveness of language-specific fine-tuning and tailored clustering for low-resource speaker diarization.</p>

<iframe src="/files/mapr-2025-vn-wavlm-diarization-paper.pdf" width="100%" height="4000"></iframe>

<iframe src="/files/mapr-2025-vn-wavlm-diarization-poster.pdf" width="100%" height="4000"></iframe>
