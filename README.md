# 🚢 OILTRACE AI

**OILTRACE AI** is an advanced maritime intelligence and spill attribution platform. It leverages SAR satellite imagery, oceanographic drift modeling, and AIS telemetry to detect oil spills, reconstruct reverse drift trajectories, and identify potential suspect vessels with explainable AI scoring.

---

## 🌟 Key Features

* 🔴 **AI Oil Spill Detection:** Integrates SAR imagery processing for automatic spill segmentation, confidence scoring, and look-alike filtering.
* 🔴 **Spill Origin Reconstruction (Hindcasting):** Simulates backward ocean current and wind vectors to estimate release time windows and probable origin zones.
* 🔴 **Intelligent Vessel Correlation:** Correlates reverse drift trajectories against historical AIS vessel routes to calculate candidate association scores.
* 🔴 **Vessel Behaviour Analysis:** Analyzes telemetry anomalies including route deviations, unexplained loitering, speed drops, and AIS gaps.
* 🔴 **Explainable AI ("Why This Vessel?"):** Provides transparent breakdown factors behind candidate vessel ranking scores.
* 🔴 **Evidence Graph & Replay:** Offers chronological incident replay and interactive graph view linking satellite observations to suspect vessels.

---

## 📁 Project Structure

```text
oiltrace-ai/
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── assets/
    ├── components/
    │   ├── AIAssistant.tsx
    │   ├── Header.tsx
    │   ├── Icons.tsx
    │   └── OceanMap.tsx
    ├── data/
    │   └── mockData.ts
    ├── pages/
    │   ├── AIAssistant.tsx
    │   ├── Dashboard.tsx
    │   ├── EvidenceGraph.tsx
    │   ├── IncidentDetails.tsx
    │   ├── IncidentReplay.tsx
    │   ├── InvestigationReport.tsx
    │   ├── Login.tsx
    │   ├── OceanMap.tsx
    │   ├── OriginReconstruction.tsx
    │   ├── SpillAnalysis.tsx
    │   ├── SpillTrajectory.tsx
    │   ├── VesselCorrelation.tsx
    │   ├── VesselDetails.tsx
    │   ├── VesselIntelligence.tsx
    │   └── WhatIfSimulation.tsx
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/gaganbagga21/OILTRACE_AI.git
cd OILTRACE_AI/oiltrace-ai

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


4. **Open in browser:**
Navigate to `http://localhost:5173` to view the application.

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Styling:** CSS3 (Custom Variables, Theme Tokens)
* **Icons:** Custom SVG Vector System
* **Version Control:** Git, GitHub

🌐 **Live Demo:** [oiltrace-ai.vercel.app](https://your-deployed-app-url.vercel.app)
## ✍️ Author

* **Gagan Preet Singh Bagga**
* [GitHub Profile](https://github.com/gaganbagga21)
