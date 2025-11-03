import React from "react";
import { motion } from "framer-motion";

export default function NeonCard({ title, value, icon, delay }) {
  return (
    <motion.div
      className="glass p-6 rounded-2xl border border-cyan-400/40 shadow-[0_0_15px_#00f0ff44] hover:shadow-[0_0_25px_#00ffffaa] transition-all"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="text-cyan-400">{icon}</div>
        <p className="text-lg text-cyan-300">{title}</p>
        <h3 className="text-2xl font-semibold text-white drop-shadow-[0_0_8px_#00ffff]">{value}</h3>
      </div>
    </motion.div>
  );
}
