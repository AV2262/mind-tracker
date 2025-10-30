import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <motion.div
      className="max-w-3xl mx-auto glass p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_25px_#00ffff44] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <User size={80} className="mx-auto text-cyan-400 mb-4" />
      <h2 className="text-3xl font-bold text-cyan-300 mb-2">Anjali Verma</h2>
      <p className="text-cyan-200 mb-4">Mindfulness Enthusiast 🌿 | Developer 💻</p>

      <div className="grid grid-cols-2 gap-4 text-cyan-100">
        <div className="p-4 glass rounded-xl">
          <h3 className="text-xl text-cyan-400">Streak</h3>
          <p className="text-2xl font-semibold">14 Days 🔥</p>
        </div>
        <div className="p-4 glass rounded-xl">
          <h3 className="text-xl text-cyan-400">Best Mood</h3>
          <p className="text-2xl font-semibold">9/10 😄</p>
        </div>
      </div>
    </motion.div>
  );
}
