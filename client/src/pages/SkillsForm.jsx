import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const availableSkills = [
    "React.js", "Node.js", "Python", "Java", "C++",
    "Machine Learning", "MongoDB", "Express.js", "TypeScript", "Tailwind CSS"
];

const SkillsForm = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleToggleSkill = (skill) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save skills to localStorage or send to backend if needed
        localStorage.setItem("selectedSkills", JSON.stringify(selectedSkills));
        navigate("/dashboard/results");
    };

    return (
        <div className="min-h-screen bg-[#0d1117] text-white px-6 py-10">
            <h2 className="text-3xl font-bold text-green-400 text-center mb-8">🎯 Select Your Skills</h2>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {availableSkills.map((skill) => (
                        <button
                            type="button"
                            key={skill}
                            onClick={() => handleToggleSkill(skill)}
                            className={`px-4 py-2 rounded-lg border border-gray-600 transition ${selectedSkills.includes(skill)
                                    ? "bg-green-500 text-white"
                                    : "bg-[#161b22] text-gray-300 hover:bg-green-700 hover:text-white"
                                }`}
                        >
                            {skill}
                        </button>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={selectedSkills.length === 0}
                        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white font-semibold transition disabled:opacity-50"
                    >
                        🚀 Find Matching Projects
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SkillsForm;

