import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    url: String,
    stars: Number,
    description: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bookmark", bookmarkSchema);
