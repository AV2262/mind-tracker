import React, { useState } from "react";
import { motion } from "framer-motion";
import { SmilePlus } from "lucide-react";
import API from "../api/api"; // ✅ Import your API instance

export default function NewEntry() {
  const [mood, setMood] = useState(5);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      // ✅ Send entry data to backend
      const res = await API.post("/entries", {
        moodScore: Number(mood),
        note,
      });

      if (res.status === 201 || res.status === 200) {
        setMessage("✅ Entry saved successfully!");
        setMood(5);
        setNote("");
      } else {
        setMessage("⚠️ Failed to save entry. Try again.");
      }
    } catch (error) {
      console.error("Error saving entry:", error);
      setMessage("❌ Server error: Unable to save entry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto glass p-8 rounded-3xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6 text-cyan-300">
        <SmilePlus size={32} />
        <h2 className="text-3xl font-semibold">New Mood Entry</h2>
      </div>

      <label className="block text-cyan-200 mb-3 text-lg">
        How are you feeling today?
      </label>
      <input
        type="range"
        min="1"
        max="10"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-full accent-cyan-400"
      />
      <p className="text-center text-xl mt-2 text-cyan-300">Mood: {mood}/10</p>

      <textarea
        placeholder="Write your thoughts here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full mt-6 p-4 rounded-xl bg-[#001b2e]/50 border border-cyan-500/30 focus:outline-none focus:border-cyan-400 text-white resize-none h-40"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-xl ${
          loading ? "bg-cyan-800/50 cursor-not-allowed" : "bg-cyan-500/30 hover:bg-cyan-400/50"
        } text-white font-semibold tracking-wide shadow-[0_0_15px_#00ffffaa] transition-all`}
      >
        {loading ? "Saving..." : "Save Entry"}
      </button>

      {message && (
        <p className="mt-4 text-center text-cyan-200 text-lg font-medium">
          {message}
        </p>
      )}
    </motion.div>
  );
}
