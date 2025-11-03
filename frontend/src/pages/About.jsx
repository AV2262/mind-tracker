import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center space-y-6 glass p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_30px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-5xl font-bold text-cyan-300">About Mind Tracker</h2>
      <p className="text-cyan-200 text-lg leading-relaxed">
        Mind Tracker is your personal mental wellness companion 🌿<br />
        Designed by <span className="text-cyan-400">Anjali Verma</span>, it helps you visualize your moods,
        monitor habits, and grow mindfully in a futuristic, soothing space.
      </p>
      <p className="text-cyan-300 font-semibold">
        “The greatest discovery is that peace of mind is a choice.” 🩵
      </p>
    </motion.div>
  );
}
