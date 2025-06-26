import express from "express";
import User from "../models/User.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// 🔖 Save a new repo
router.post("/add", verifyToken, async (req, res) => {
    const { repo } = req.body;
    try {
        const user = await User.findById(req.userId);
        const alreadySaved = user.bookmarks.some((r) => r.id === repo.id);
        if (alreadySaved) return res.status(400).json({ message: "Repo already bookmarked" });

        user.bookmarks.push(repo);
        await user.save();
        res.json({ message: "Bookmarked successfully" });
    } catch (err) {
        res.status(500).json({ error: "Bookmark failed" });
    }
});

// 📥 Get all bookmarks
router.get("/all", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.json(user.bookmarks);
    } catch (err) {
        res.status(500).json({ error: "Could not fetch bookmarks" });
    }
});

// 🗑️ Remove a repo
router.delete("/remove/:repoId", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        user.bookmarks = user.bookmarks.filter((r) => r.id != req.params.repoId);
        await user.save();
        res.json({ message: "Removed successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to remove" });
    }
});

export default router;
