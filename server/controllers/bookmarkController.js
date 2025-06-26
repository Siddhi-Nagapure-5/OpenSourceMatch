import Bookmark from "../models/Bookmark.js";

export const addBookmark = async (req, res) => {
    const { name, url, stars, description } = req.body;
    const userId = req.user.id;

    try {
        if (!name || !url || !userId) {
            return res.status(400).json({ message: "Missing data" });
        }

        const exists = await Bookmark.findOne({ user: userId, name });
        if (exists) return res.status(400).json({ message: "Already bookmarked" });

        const newBookmark = new Bookmark({
            user: userId,
            name,
            url,
            stars,
            description,
        });

        await newBookmark.save();
        res.status(201).json({ message: "Bookmark saved", bookmark: newBookmark });
    } catch (err) {
        console.error("💥 Error saving bookmark:", err.message);
        res.status(500).json({ message: "Failed to save bookmark" });
    }
};

  

export const getBookmarks = async (req, res) => {
    const userId = req.user.id;
    try {
        const bookmarks = await Bookmark.find({ user: userId }).sort({ createdAt: -1 });
        res.json(bookmarks);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch bookmarks" });
    }
};
