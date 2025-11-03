import React from "react";
import { motion } from "framer-motion";
import { ToggleLeft } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div
      className="max-w-2xl mx-auto glass p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_20px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-4xl font-bold text-cyan-300 text-center mb-6">Settings ⚙️</h2>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-cyan-200">Enable Notifications</p>
          <ToggleLeft className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={28} />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-cyan-200">Dark Mode</p>
          <ToggleLeft className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={28} />
        </div>
      </div>
    </motion.div>
  );
}
