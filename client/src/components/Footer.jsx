import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#161b22] text-gray-400 border-t border-[#30363d] py-6 mt-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                    © {new Date().getFullYear()} OpenSourceMatch · Built by Siddhi Nagapure 🚀
                </p>

                <div className="flex gap-6">
                    <a href="https://github.com/siddhi/OpenSourceMatch" target="_blank" rel="noreferrer" className="hover:text-white transition">
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/siddhinagapure" target="_blank" rel="noreferrer" className="hover:text-white transition">
                        <Linkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

