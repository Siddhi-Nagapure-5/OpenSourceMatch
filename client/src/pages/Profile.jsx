import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Bookmark, CalendarDays, User, Star } from "lucide-react";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);

    const joinDate = new Date(user?.user?.createdAt || Date.now()).toLocaleDateString();
    
    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/bookmarks/all", {
                    headers: { Authorization: `Bearer ${user.token}` },
                });
                setBookmarks(res.data);
            } catch (error) {
                console.error("Failed to fetch bookmarks", error);
            }
        };

        fetchBookmarks();
    }, []);
      

    return (
        <div className="min-h-screen bg-[#0d1117] text-white px-6 py-12 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-green-400 mb-8">👤 Your Developer Profile</h2>

            <div className="glass-form w-full max-w-xl p-8">
                <div className="mb-6 space-y-2">
                    <p className="flex items-center gap-3">
                        <User className="text-green-400" /> <strong>Username:</strong> {user?.user?.username}
                    </p>
                    <p className="flex items-center gap-3">
                        📧 <strong>Email:</strong> {user?.user?.email}
                    </p>
                    <p className="flex items-center gap-3">
                        <CalendarDays className="text-green-400" /> <strong>Joined:</strong> {joinDate}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center">
                        <Bookmark className="mx-auto text-green-400" size={30} />
                        <h3 className="text-lg font-bold mt-2">Total Bookmarks</h3>
                        <p className="text-2xl font-mono text-white mt-1">{loading ? "..." : bookmarks.length}</p>
                    </div>
                    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center">
                        <Star className="mx-auto text-yellow-400" size={30} />
                        <h3 className="text-lg font-bold mt-2">Most Used Skill</h3>
                        <p className="text-xl font-mono text-white mt-1">React.js</p> {/* Replace if needed */}
                    </div>
                </div>
                {bookmarks.length > 0 && (
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold mb-4 text-green-400">⭐ Your Saved Repositories</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {bookmarks.map((b, i) => (
                                <div key={i} className="glass-form p-4 rounded-md border border-[#2f2f2f]">
                                    <a href={b.url} target="_blank" rel="noreferrer" className="text-green-400 font-semibold hover:underline">
                                        {b.name}
                                    </a>
                                    <p className="text-sm text-gray-400">{b.description}</p>
                                    <p className="text-yellow-400 text-sm">{b.stars?.toLocaleString()} stars</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Profile;
