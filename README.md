# 🏺 Relicrader - Historical Artifacts Tracker

A full-stack web application where users can discover, like, and contribute historical artifacts. From the Rosetta Stone to ancient scrolls, Relicrader is a digital archive for the past, powered by modern technology.

---

## 🌐 Live Site

🔗 [https://artifact-f6d00.web.app/](https://artifact-f6d00.web.app/)

---

## 🖼️ Project Overview

Relicrader allows history enthusiasts to:
- Explore legendary artifacts with rich historical details
- Submit and manage their own discoveries
- Like and track favorite artifacts
- Seamlessly browse through a user-friendly and responsive interface


---

## 🧩 Core Technologies Used

### 💻 Frontend
- React.js
- Tailwind CSS + DaisyUI
- Firebase Auth (Email/Password & Google)
- Framer Motion
- React Router DOM
- Axios

### ⚙️ Backend
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens)
- CORS, dotenv

### 🚀 Deployment
- Client: Netlify  
- Server: Vercel  
- Database: MongoDB Atlas

---

## ✨ Key Features

- 🔐 Authentication with Firebase (Email/Password & Google)
- 🖼️ Add/View/Edit/Delete artifacts (CRUD operations)
- 🔒 Protected routes using JWT (My Artifacts, Add Artifact, Liked Artifacts, etc.)
- ❤️ Like button with real-time count and toggling
- 🔍 Search functionality on the All Artifacts page
- 📊 Featured Artifacts sorted by most liked
- 🎞️ Home page slider with historical banners
- 🌗 Dark/Light Theme toggle
- ❌ 404 Not Found page
- 🔄 Dynamic route-based page titles
- ⏳ Spinner for loading states
- 🔔 Toast and SweetAlert for actions

---

## 📦 Dependencies

### 🔹 Client-side

- `react@18.2.0`
- `react-router-dom@6.23.1`
- `axios@1.6.7`
- `firebase@10.12.1`
- `tailwindcss@3.4.1`
- `daisyui@4.6.0`
- `framer-motion@10.18.1`
- `react-icons@5.2.1`
- `react-toastify@10.0.4`
- `swiper@11.1.5`
- `vite@5.2.10`

### 🔹 Server-side

- `express@4.18.2`
- `cors@2.8.5`
- `dotenv@16.4.5`
- `mongodb@6.5.0`
- `jsonwebtoken@9.0.2`

---

## 🧪 How to Run Locally

### 🔧 Client Setup

```bash
git clone https://github.com/LamiyaRK/relicrader-client.git
cd relicrader-client
npm install
npm run dev

📁 .env file (Do not push this to GitHub):

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_BASE_URL=https://your-server.vercel.app

⚙️ Server Setup

git clone https://github.com/your-username/relicrader-server.git
cd relicrader-server
npm install
npm run start

📁 .env file (Do not push this to GitHub):

PORT=5000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_secret_key