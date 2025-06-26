# 🚀 OpenSourceMatch

A full-stack MERN application that helps developers discover **open-source GitHub repositories** to contribute to — based on their **skills** and **preferences**.

![OpenSourceMatch Banner](https://img.shields.io/badge/MERN-Fullstack-blueviolet?style=for-the-badge)  
![GitHub](https://img.shields.io/github/license/yourusername/opensourcematch?style=flat-square)

---

## 📸 Demo

https://user-open-source-match.vercel.app  
_(Live demo link if hosted)_  

---

## 🌟 Features

- 🔐 User Authentication (JWT)
- 🧠 Skill-based GitHub project recommendations
- 📥 Bookmark/Save your favorite repos
- 🙋 Personalized Profile with saved projects
- 🔍 GitHub API integrated backend (server-side search)
- 🌈 Modern UI with glassmorphism & animations (Framer Motion)
- 📊 Real-time dashboard + feature sections

---

## 🔧 Tech Stack

| Frontend | Backend | Database | Others |
|----------|---------|----------|--------|
| React.js (Vite) | Node.js + Express | MongoDB (Mongoose) | GitHub API, JWT, Axios, TailwindCSS |

---

## 📂 Folder Structure

```bash
.
├── client
│   ├── src
│   │   ├── pages/            # Splash, Login, Register, Dashboard
│   │   ├── components/       # Navbar, Footer, Cards, etc.
│   │   ├── context/          # AuthContext
│   │   └── App.jsx
│   └── index.html
└── server
    ├── models/               # User, Bookmark
    ├── controllers/          # authController, githubController, bookmarkController
    ├── routes/               # authRoutes, githubRoutes, bookmarkRoutes
    ├── middleware/           # authMiddleware.js
    └── server.js
🚀 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/OpenSourceMatch.git
cd OpenSourceMatch
2. Setup Backend
bash
Copy
Edit
cd server
npm install
touch .env
.env file:

env
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000
bash
Copy
Edit
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
Visit: http://localhost:5173

🔐 Environment Variables
MONGO_URI – MongoDB connection string

JWT_SECRET – JWT secret for authentication

PORT – Express server port (default: 5000)

✅ API Endpoints
🔐 Auth
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

📦 GitHub Integration
POST /api/github/match – Get recommended repos by skills

📌 Bookmarks
POST /api/bookmarks/add – Save a repo

GET /api/bookmarks/all – Get user’s saved repos

✨ Credits
Made with 💖 by Siddhi Nagapure
