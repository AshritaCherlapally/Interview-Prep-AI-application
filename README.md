# Interview Prep - AI Job Interview Preparation Platform

Interview Prep is a job interview preparation platform powered by Vapi AI Voice Agents, built with Next.js, Firebase, TailwindCSS, and shadcn/ui. It offers users the ability to practice mock interviews, receive AI-driven feedback, and track interview progress through a modern, responsive dashboard.

---

## 📋 Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Introduction

Interview Prep allows users to practice job interviews by interacting with AI voice agents, receive instant feedback, and manage their interviews through an intuitive dashboard. The platform is fully responsive and built with scalable architecture to support real-time interaction and data management.

---

## Tech Stack
- **Next.js** — Frontend and Backend Framework
- **Firebase** — Authentication, Firestore Database
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI Components
- **Vapi AI** — Voice AI Agents
- **Google Gemini API** — AI Question and Feedback Generation
- **Zod** — Form Validation and Schema Validation

---

## Features

- **Authentication** — Email/password sign-up and sign-in using Firebase Authentication.
  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/2523bbbe-35d5-4215-ba77-d4aec6df8de6" />
  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/dfc81024-392a-456a-84f7-64b1f214a600" />

- **Create Interviews** — Generate job interview questions dynamically using Vapi AI and Google Gemini APIs.
  <img width="1439" alt="image" src="https://github.com/user-attachments/assets/45311532-1b45-4fc1-bb2e-cc8348080bb1" />

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/5cad55dc-16aa-4fef-9ce4-ff83e8f22181" />

- **AI-Driven Feedback** — Receive instant feedback based on AI voice interaction.
- **Interview Dashboard** — Manage and view past interviews, including feedback and transcripts.
- **Modern UI/UX** — Built with TailwindCSS and shadcn/ui for a responsive and clean interface.
- **Fully Responsive** — Works across desktop, tablet, and mobile devices.
- **Scalable Architecture** — Modular code structure for easier maintenance and extension.

---

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/Interview-Prep-AI-application.git
cd interviewprepaiapplication
``` 
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
- Create a .env.local file in the root directory and add the following variables:
- Fill in your actual credentials
- 
```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
### 4. Run the development server
```bash
npm run dev
```







