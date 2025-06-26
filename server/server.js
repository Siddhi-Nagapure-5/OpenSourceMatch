import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";
import githubRoutes from './routes/githubRoutes.js'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/github", githubRoutes); // in server.js



app.use("/api/bookmarks", bookmarkRoutes);

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Mongo Error:", err));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});