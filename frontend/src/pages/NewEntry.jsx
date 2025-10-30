import React, { useState } from "react";
import { motion } from "framer-motion";
import { SmilePlus } from "lucide-react";

export default function NewEntry() {
  const [mood, setMood] = useState(5);
  const [note, setNote] = useState("");

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

      <label className="block text-cyan-200 mb-3 text-lg">How are you feeling today?</label>
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

      <button className="mt-6 w-full py-3 rounded-xl bg-cyan-500/30 hover:bg-cyan-400/50 text-white font-semibold tracking-wide shadow-[0_0_15px_#00ffffaa] transition-all">
        Save Entry
      </button>
    </motion.div>
  );
}
