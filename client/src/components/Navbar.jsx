import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LogOut } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-[#161b22] text-white px-6 py-4 flex justify-between items-center border-b border-[#30363d]">
            <h1 className="text-xl font-bold text-green-400">OpenSourceMatch</h1>

            <ul className="flex gap-6 items-center text-sm font-medium">
                <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-300"}>
                    Home
                </NavLink>
                <NavLink to="/dashboard/skills" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-300"}>
                    Skills
                </NavLink>
                <NavLink to="/dashboard/results" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-300"}>
                    Results
                </NavLink>
                <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-300"}>
                    Profile
                </NavLink>
                <button onClick={handleLogout} className="text-gray-300 hover:text-red-400 flex items-center gap-1">
                    <LogOut size={18} /> Logout
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
