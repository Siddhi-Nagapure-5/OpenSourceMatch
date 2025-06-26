import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? "login" : "register";
        const url = `http://localhost:5000/api/auth/${endpoint}`;

        try {
            const res = await axios.post(url, formData);
            if (isLogin) {
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate("/dashboard");
            } else {
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] text-white">
            <div className="flex flex-col md:flex-row items-center gap-12 px-8 md:px-20 py-12 w-full max-w-6xl">
                {/* Left Panel */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-green-400">OpenSourceMatch</h1>
                    <p className="text-gray-400 text-lg">
                        Discover open-source projects tailored to your skills.
                        Bookmark, contribute and grow your GitHub journey.
                    </p>
                    <div className="flex gap-8 mt-6 text-sm text-gray-300">
                        <div><span className="text-green-400 text-xl font-semibold">10K+</span><br />Projects</div>
                        <div><span className="text-green-400 text-xl font-semibold">500+</span><br />Contributors</div>
                        <div><span className="text-green-400 text-xl font-semibold">Live</span><br />GitHub Data</div>
                    </div>
                </div>

                {/* Auth Panel */}
                <div className="bg-[#161b22]/70 backdrop-blur-xl border border-[#30363d] rounded-xl p-8 w-full max-w-md shadow-lg">
                    <div className="flex mb-6">
                        <button
                            className={`flex-1 py-2 rounded-l-xl ${isLogin ? "bg-green-500 text-white" : "bg-transparent text-gray-300 border border-r-0 border-[#30363d]"}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`flex-1 py-2 rounded-r-xl ${!isLogin ? "bg-green-500 text-white" : "bg-transparent text-gray-300 border border-[#30363d]"}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-3 text-sm"
                                onChange={handleChange}
                                required
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-3 text-sm"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-3 text-sm"
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 transition rounded-md py-2 font-semibold"
                        >
                            {isLogin ? "Sign In" : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-400 text-center">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button className="text-green-400 underline" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Sign up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
