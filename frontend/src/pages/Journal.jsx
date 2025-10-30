import React from "react";
import { motion } from "framer-motion";

const mockEntries = [
  { date: "2025-10-25", mood: 8, note: "Felt motivated and creative today!" },
  { date: "2025-10-26", mood: 6, note: "Bit tired, but productive." },
  { date: "2025-10-27", mood: 9, note: "Had a great day with friends!" },
];

export default function Journal() {
  return (
    <motion.div
      className="max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-cyan-300 text-center mb-6">Mood Journal</h2>
      {mockEntries.map((entry, i) => (
        <motion.div
          key={i}
          className="glass border border-cyan-500/30 p-5 rounded-2xl shadow-[0_0_15px_#00ffff33]"
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="flex justify-between text-cyan-200 mb-2">
            <span>{entry.date}</span>
            <span className="text-cyan-400 font-semibold">Mood: {entry.mood}/10</span>
          </div>
          <p className="text-white/90">{entry.note}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
