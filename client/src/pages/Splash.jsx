// src/pages/Splash.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/login"), 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-24 h-24 mb-6"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                />
            </motion.div>
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                OpenSourceMatch
            </motion.h1>
            <motion.p
                className="text-sm mt-2 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Connecting Devs with GitHub Projects 🚀
            </motion.p>
        </div>
    );
};

export default Splash;
