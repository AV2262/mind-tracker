import React from "react";
import { motion } from "framer-motion";
import MoodChart from "../components/MoodChart";
import NeonCard from "../components/NeonCard";
import ReminderPanel from "../components/ReminderPanel";
import { Smile, Zap, Activity, Heart } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { icon: <Smile size={32} />, label: "Avg Mood", value: "7.8 / 10" },
    { icon: <Zap size={32} />, label: "Energy", value: "High ⚡" },
    { icon: <Activity size={32} />, label: "Focus", value: "88%" },
    { icon: <Heart size={32} />, label: "Sleep Quality", value: "Good 💫" },
  ];

  return (
    <div className="space-y-10">
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-300 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome Back, <span className="text-cyan-400">Anjali</span> 🩵
      </motion.h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <NeonCard key={i} title={s.label} value={s.value} icon={s.icon} delay={i * 0.1} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-2xl shadow-lg border border-cyan-500/30">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">Mood Trends</h3>
          <MoodChart />
        </div>
        <div className="glass p-6 rounded-2xl shadow-lg border border-cyan-500/30">
          <h3 className="text-xl font-semibold mb-3 text-cyan-300">Reminders</h3>
          <ReminderPanel />
        </div>
      </div>
    </div>
  );
}
