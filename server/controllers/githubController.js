// controllers/githubController.js
import axios from "axios";

export const fetchGitHubProjects = async (req, res) => {
    const { skills } = req.body;

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
        return res.status(400).json({ message: "Skills array required." });
    }

    try {
        let allRepos = [];

        for (const skill of skills) {
            const response = await axios.get(
                `https://api.github.com/search/repositories`,
                {
                    params: {
                        q: `${skill} in:name,description stars:>50`,
                        sort: "stars",
                        order: "desc",
                        per_page: 3,
                    },
                    headers: {
                        Accept: "application/vnd.github+json",
                        // Optional: Add token if rate-limiting occurs
                        // Authorization: `Bearer YOUR_GITHUB_TOKEN`,
                    },
                }
            );

            if (response.data.items) {
                allRepos.push(...response.data.items);
            }
        }

        // Remove duplicates by repo full_name
        const uniqueRepos = Array.from(
            new Map(allRepos.map((r) => [r.full_name, r])).values()
        );

        res.json(uniqueRepos);
    } catch (err) {
        console.error("GitHub Fetch Error:", err);
        res.status(500).json({ message: "GitHub API fetch failed" });
    }
};
