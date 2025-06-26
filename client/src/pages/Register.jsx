import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", data);
            navigate("/dashboard/skills");
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#0d1117] text-white p-6">
            <form onSubmit={handleSubmit} className="glass-form w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-green-400">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input name="username" onChange={handleChange} className="input" placeholder="Username" />
                <input name="email" onChange={handleChange} className="input" placeholder="Email" />
                <input type="password" name="password" onChange={handleChange} className="input" placeholder="Password" />
                <button className="btn">Register</button>
            </form>
        </div>
    );
};

export default Register;
