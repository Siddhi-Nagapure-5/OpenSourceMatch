// routes/githubRoutes.js
import express from "express";
import { fetchGitHubProjects } from "../controllers/githubController.js";

const router = express.Router();

// POST /api/github/match
router.post("/match", fetchGitHubProjects);

export default router;
