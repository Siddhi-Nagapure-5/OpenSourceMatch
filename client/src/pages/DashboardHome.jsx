// src/pages/DashboardHome.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Code2, Sparkles, BrainCog, Github } from "lucide-react";

const DashboardHome = () => {
    return (
        <div className="bg-[#0d1117] text-white py-10 px-6 md:px-20">
            {/* Hero */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
                    Your Gateway to Open Source
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Match with GitHub projects tailored to your skills. Bookmark, explore, contribute – all in one place.
                </p>
                <Link
                    to="/dashboard/skills"
                    className="mt-6 inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white font-semibold transition"
                >
                    🔍 Start Matching
                </Link>
            </div>

            {/* How it Works */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-green-400 text-center mb-10">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="glass-form p-6">
                        <BrainCog size={36} className="mx-auto text-green-400" />
                        <h3 className="font-bold text-lg mt-4">1. Select Skills</h3>
                        <p className="text-gray-400">Choose your tech stack like React, Python, ML etc.</p>
                    </div>
                    <div className="glass-form p-6">
                        <Code2 size={36} className="mx-auto text-green-400" />
                        <h3 className="font-bold text-lg mt-4">2. Find Projects</h3>
                        <p className="text-gray-400">We fetch open-source GitHub repos matching your skills.</p>
                    </div>
                    <div className="glass-form p-6">
                        <Github size={36} className="mx-auto text-green-400" />
                        <h3 className="font-bold text-lg mt-4">3. Contribute</h3>
                        <p className="text-gray-400">Save projects you love and start contributing immediately.</p>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-green-400 text-center mb-10">Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Live GitHub Data", icon: <Sparkles size={28} />, desc: "Up-to-date repos using GitHub API." },
                        { title: "Bookmarks", icon: <Code2 size={28} />, desc: "Save and revisit projects any time." },
                        { title: "Real-Time Profile", icon: <BrainCog size={28} />, desc: "Track your open-source journey live." },
                    ].map((item, idx) => (
                        <div key={idx} className="glass-form p-6 flex flex-col gap-3">
                            <div className="text-green-400">{item.icon}</div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <Link
                    to="/dashboard/skills"
                    className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white font-semibold transition"
                >
                    🚀 Start Exploring Projects
                </Link>
            </div>
        </div>
    );
};

export default DashboardHome;

