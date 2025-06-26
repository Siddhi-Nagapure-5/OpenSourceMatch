import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-6">
            <div className="glass-form max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-green-400 mb-4">OpenSourceMatch</h1>
                <p className="text-gray-300 text-lg mb-6">
                    Discover open-source GitHub projects that perfectly match your skills.
                    Bookmark your favorites, grow your profile, and make meaningful contributions.
                </p>
                <Link to="/register" className="btn">
                    🚀 Get Started
                </Link>
            </div>
        </div>
    );
};

export default Home;
