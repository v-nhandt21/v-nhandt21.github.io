---
title: "Sleep Stage Classification with Multi-Scale Multi-Period CNN"
excerpt: "Sleep stage classification refers to the process of categorizing different stages of sleep based on the patterns and characteristics of brain activity.<br/><img src='/images/Sleep/sleep.png'>"
collection: portfolio
date: 2021-01-01
---

Freelance Project

Target: ← Reproduce: 

[](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9417097)

[https://github.com/emadeldeen24/AttnSleep](https://github.com/emadeldeen24/AttnSleep)

## **Literature Review:**

Sleep stage classification refers to the process of categorizing different stages of sleep based on the patterns and characteristics of brain activity, eye movements, muscle tone, and other physiological parameters. Sleep is not a uniform state but rather consists of distinct stages that repeat cyclically throughout the night.

<img src='/images/Sleep/Untitled.png'>

Traditionally, sleep stage classification has been performed using polysomnography (PSG), which involves recording various physiological signals during sleep, including electroencephalography (EEG), electrooculography (EOG), electromyography (EMG), and other measurements. These signals provide information about brain wave patterns, eye movements, and muscle activity, which can be used to differentiate different stages of sleep.

<img src='/images/Sleep/Untitled_1.png'>

The standard sleep staging system typically includes the following stages:

1. Wakefulness: This stage represents the state of being awake and alert.
2. Rapid Eye Movement (REM) sleep: REM sleep is characterized by rapid eye movements, low muscle tone, and vivid dreaming. It is often associated with the most intense dreaming and plays a crucial role in memory consolidation and emotional processing.
3. Non-REM (NREM) sleep:
a. Stage N1: This is the transition stage between wakefulness and sleep. It is a light sleep stage where people can be easily awakened.
b. Stage N2: This stage represents the majority of the sleep cycle and is characterized by the presence of sleep spindles (bursts of brain wave activity) and K-complexes (sharp waveforms).
c. Stage N3 (also known as slow-wave sleep or deep sleep): This is the deepest sleep stage, featuring slow brain waves known as delta waves. It is associated with physical restoration, hormone regulation, and memory consolidation.

<img src='/images/Sleep/Untitled_2.png'>

Sleep stage classification algorithms utilize machine learning techniques, such as artificial neural networks, support vector machines, or hidden Markov models, to analyze the recorded signals and classify them into the different sleep stages. These algorithms are trained on large datasets of manually scored sleep recordings to learn the patterns associated with each sleep stage.

Accurate sleep stage classification is crucial for sleep research, clinical sleep medicine, and the diagnosis and treatment of sleep disorders. It helps researchers and clinicians understand sleep architecture, assess sleep quality, monitor the effects of interventions, and identify abnormalities or disruptions in sleep patterns.

Application and Motivation: [https://www.youtube.com/watch?v=0MgzXevxHRw](https://www.youtube.com/watch?v=0MgzXevxHRw)

<img src='/images/Sleep/Untitled_3.png'>

---

## ****An Attention-Based Deep Learning Approach for Sleep Stage Classification With Single-Channel EEG****

<img src='/images/Sleep/Untitled_4.png'>

The paper proposes a new deep-learning architecture called AttnSleep for automatic sleep stage classification using single-channel EEG signals. Sleep stage classification is important for measuring sleep quality.

AttnSleep consists of two main modules. The first module is the feature extraction module, which uses a multi-resolution convolutional neural network (MRCNN) and adaptive feature recalibration (AFR). The MRCNN can extract both low and high-frequency features from the EEG signals, while the AFR improves the quality of the extracted features by modeling the inter-dependencies between them.

The second module is the temporal context encoder (TCE), which utilizes a multi-head attention mechanism to capture the temporal dependencies among the extracted features. The multi-head attention incorporates causal convolutions to model the temporal relations in the input features.

To evaluate the performance of the proposed AttnSleep model, the researchers used three public datasets. The results demonstrate that AttnSleep outperforms state-of-the-art techniques in terms of various evaluation metrics, indicating its superior performance in sleep stage classification.

The researchers have made their source codes, experimental data, and supplementary materials available on GitHub at **[https://github.com/emadeldeen24/AttnSleep](https://github.com/emadeldeen24/AttnSleep)**.

## **Data Preparation and Pre-processing:**

<img src='/images/Sleep/Untitled_5.png'>

- **Sleep EDF 20:**
    - Run this bash to download:
    
    [https://gist.github.com/emadeldeen24/a22691e36759934e53984289a94cb09b](https://gist.github.com/emadeldeen24/a22691e36759934e53984289a94cb09b)
    
    - Run process:
    
    ```bash
    cd prepare_datasets
    python prepare_physionet.py --data_dir /path/to/PSG/files --output_dir edf_20_npz --select_ch "EEG Fpz-Cz"
    ```
    
- **Sleep EDF 78:**
    - Download Data: [https://physionet.org/content/sleep-edfx/1.0.0/](https://physionet.org/content/sleep-edfx/1.0.0/)
    - Process Data:
    
    ```bash
    cd prepare_datasets
    python prepare_physionet.py --data_dir /path/to/PSG/files --output_dir edf_78_npz --select_ch "EEG Fpz-Cz"
    ```
    
- **SHHS:**
    
    → (take ~4 hours for install Ruby in Ubuntu 20 + download data)
    
    - Request DATA:
    
    <img src='/images/Sleep/Untitled_6.png'>
    
    - Install Ruby ← to solve package dependency of Ruby and Ruby version manager (rvm)
    
    <img src='/images/Sleep/Untitled_7.png'>
    
    - Install Gem in Ruby:
    
    [nsrr-gem/README.md at master · nsrr/nsrr-gem](https://github.com/nsrr/nsrr-gem/blob/master/README.md#prerequisites)
    
    - [https://sleepdata.org/datasets/shhs](https://sleepdata.org/datasets/shhs)
    
    <img src='/images/Sleep/Untitled_8.png'>
    
    - Download Data:
    
    ```bash
    nsrr download shhs
    ```
    
    - Process Data

```bash
python prepare_shhs.py --data_dir /path/to/EDF/files --ann_dir /path/to/Annotation/files --output_dir shhs_npz --select_ch "EEG C4-A1"
```

Another Way: Download Preprocess DATA Directly From: [https://researchdata.ntu.edu.sg/dataverse/attnSleep](https://researchdata.ntu.edu.sg/dataverse/attnSleep) 

- [https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/EUHGHS](https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/EUHGHS)
- [https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/EUHGHS&version=1.1](https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/EUHGHS&version=1.1)
- [https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/MA1AVG](https://researchdata.ntu.edu.sg/dataset.xhtml?persistentId=doi:10.21979/N9/MA1AVG)

## **Data Visualization**

Viewer EDF: [https://bilalzonjy.github.io/EDFViewer/EDFViewer.html](https://bilalzonjy.github.io/EDFViewer/EDFViewer.html)

<img src='/images/Sleep/Untitled_9.png'>

<img src='/images/Sleep/Untitled_10.png'>

<img src='/images/Sleep/Untitled_11.png'>

Sleep Stage W

<img src='/images/Sleep/Untitled_12.png'>

Sleep Stage 1

## **Working Environment**

- Ubuntu 20.04.5 LTS
- Conda Environment
- Package requirement

```bash
Activate Conda Environment:

- Install Pytorch:

python -m pip install torch==1.8.2 torchvision==0.9.2 torchaudio==0.8.2 --extra-index-url https://download.pytorch.org/whl/lts/1.8/cu111

- Install JQ:

sudo apt-get install jq

python -m pip install mne=='0.20.7'
```

## Re**produce**

<img src='/images/Sleep/Untitled_13.png'>

Target:

<img src='/images/Sleep/Untitled_14.png'>

[https://github.com/emadeldeen24/AttnSleep](https://github.com/emadeldeen24/AttnSleep)

```bash
bash batch_train.sh 0 /path/to/npz/files
```

## Model Improvement

The second module is the temporal context encoder (TCE), which utilizes a multi-head attention mechanism to capture the temporal dependencies among the extracted features. The multi-head attention incorporates causal convolutions to model the temporal relations in the input features.

AttnSleep consists of two main modules. The first module is the feature extraction module, which uses a multi-resolution convolutional neural network (MRCNN) and adaptive feature recalibration (AFR). The MRCNN can extract both low and high-frequency features from the EEG signals, while the AFR improves the quality of the extracted features by modeling the inter-dependencies between them.

Proposed Method:

- Replace Transformer in temporal context encoder with Conformer
- Replace MRCNN with Multiscale and Multiperiod CNN

**Experiment on Sleep20 Dataset**

|  | Baseline | Batch = 128 | Acc = 84.4% , Macro F1 = 78.1% |
| --- | --- | --- | --- |
| Ex1 | Reproduce | Batch = 128 | Acc = 84% , Macro F1 = 79% |
| Ex2 | Transformer → Conformer | Batch = 128 | Acc = 83% , Macro F1 = 78% |
| Ex3 | Multiscale + Multiperiod CRNN | Batch = 128 | Acc = 84.23% , Macro F1 = 78.98% |
| Ex4 | Multiscale + Multiperiod CRNN | Batch = 32 |  |

**Ex1: Reproduce**

<img src='/images/Sleep//Untitled_15.png'>

Result for Sleep-EDF-20

**Ex2: Transformer → Conformer**

<img src='/images/Sleep/Untitled_16.png'>

**Ex3: Multiscale + Multiperiod CRNN**

<img src='/images/Sleep/Untitled_17.png'>

<img src='/images/Sleep/Untitled_18.png'>

<img src='/images/Sleep/Untitled_19.png'>

<img src='/images/Sleep/Untitled_20.png'>

<img src='/images/Sleep/Untitled_21.png'>

## Negative Analysis

<img src='/images/Sleep/Untitled_22.png'>

Prediction and Ground truth for sleep stage of an record

→ Need collaboration to publish this article