import express from "express";
import { addBookmark, getBookmarks } from "../controllers/bookmarkController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addBookmark);
router.get("/all", authMiddleware, getBookmarks);

export default router;
