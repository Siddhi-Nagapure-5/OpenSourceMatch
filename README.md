# 🚀 OpenSourceMatch

A full-stack MERN application that helps developers discover **open-source GitHub repositories** to contribute to — based on their **skills** and **preferences**.

![OpenSourceMatch Banner](https://img.shields.io/badge/MERN-Fullstack-blueviolet?style=for-the-badge)  
![GitHub](https://img.shields.io/github/license/yourusername/opensourcematch?style=flat-square)

---

## 📸 Demo

![Uploading image.png…]()


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

```

#🚀 Setup Instructions
  # 1. Clone the repository
      git clone https://github.com/yourusername/OpenSourceMatch.git
      cd OpenSourceMatch
  # 2. Setup Backend
      cd server
      npm install
      touch .env
#.env file:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000
# Run
npm run dev

# 3. Setup Frontend

cd client<br>
npm install<br>
npm run dev<br>

Visit: http://localhost:5173

#🔐 Environment Variables
MONGO_URI – MongoDB connection string<br>

JWT_SECRET – JWT secret for authentication<br>

PORT – Express server port (default: 5000)<br>


#✨ Credits
Made with 💖 by Siddhi Nagapure
