import axios from "axios";

// Function to search GitHub repos by topic/skills
export const fetchReposBySkills = async (skills) => {
    try {
        const query = skills.map((skill) => `topic:${skill.toLowerCase()}`).join("+");
        const res = await axios.get(`https://api.github.com/search/repositories?q=${query}+state:open&sort=stars&order=desc&per_page=20`);
        return res.data.items;
    } catch (err) {
        console.error("GitHub fetch error:", err);
        return [];
    }
};
