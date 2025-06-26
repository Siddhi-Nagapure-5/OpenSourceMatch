import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white flex flex-col justify-between">
            <div>
                <Navbar />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
