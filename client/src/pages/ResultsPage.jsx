import React, { useEffect, useState, useContext } from "react";
import { Star, Github, Bookmark } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const dummyResults = [
    {
        name: "openai/whisper",
        description: "Automatic speech recognition model.",
        stars: 65000,
        url: "https://github.com/openai/whisper",
    },
    {
        name: "vercel/next.js",
        description: "The React Framework for Production.",
        stars: 120000,
        url: "https://github.com/vercel/next.js",
    },
    {
        name: "facebook/react",
        description: "A declarative, efficient, and flexible JavaScript library for building UI.",
        stars: 210000,
        url: "https://github.com/facebook/react",
    },
];

const ResultsPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [savedRepos, setSavedRepos] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchFromBackend = async () => {
            const selectedSkills = JSON.parse(localStorage.getItem("selectedSkills")) || [];
            if (selectedSkills.length === 0) return;

            try {
                const res = await axios.post("http://localhost:5000/api/github/match", {
                    skills: selectedSkills,
                });
                setResults(res.data);
            } catch (err) {
                console.error("Backend fetch failed", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFromBackend();
    }, []);
      
      
    const handleSave = async (repo) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/bookmarks/add",
                {
                    name: repo.full_name, // Important
                    url: repo.html_url,
                    stars: repo.stargazers_count,
                    description: repo.description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`, // MUST have Bearer
                    },
                }
            );

            console.log("✔️ Bookmark saved:", res.data);
            setSavedRepos((prev) => [...prev, repo.full_name]);
        } catch (error) {
            console.error("❌ Bookmark failed:", error.response?.data || error.message);
            alert("Bookmark failed. See console.");
        }
    };
      
      

    return (
        <div className="min-h-screen bg-[#0d1117] text-white px-6 py-10">
            <h2 className="text-3xl font-bold text-green-400 text-center mb-8">🔎 Matched GitHub Projects</h2>

            {loading ? (
                <p className="text-center text-gray-400">Fetching results based on your skills...</p>
            ) : results.length === 0 ? (
                <p className="text-center text-gray-400">No results found. Try adding more skills.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {results.map((repo, index) => (
                        <div key={index} className="glass-form p-6 border border-[#30363d] rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-400">
                                        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {repo.name}
                                        </a>
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
                                </div>
                                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                                    <Github className="text-white hover:text-green-500" />
                                </a>
                            </div>

                            <div className="flex justify-between mt-4">
                                <div className="flex items-center gap-2 text-sm text-yellow-400">
                                    <Star size={16} /> {repo.stargazers_count?.toLocaleString()} stars
                                </div>


                                {savedRepos.includes(repo.name) ? (
                                    <span className="text-green-500 text-sm flex items-center gap-1">
                                        <Bookmark size={16} /> Saved
                                    </span>
                                ) : (
                                    <button
                                        onClick={() => handleSave(repo)}
                                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm flex items-center gap-1 text-white"
                                    >
                                        <Bookmark size={16} /> Save
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResultsPage;
