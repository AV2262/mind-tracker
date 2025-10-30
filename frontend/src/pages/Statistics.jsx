import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Statistics() {
  const data = {
    labels: ["Happy", "Calm", "Sad", "Anxious", "Excited"],
    datasets: [
      {
        label: "Mood Frequency",
        data: [10, 7, 4, 3, 8],
        backgroundColor: [
          "#00ffffaa",
          "#00bfffaa",
          "#1e90ffaa",
          "#007fffaa",
          "#00ced1aa",
        ],
      },
    ],
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto glass p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_25px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-cyan-300 text-center mb-6">Mood Statistics</h2>
      <Bar data={data} options={{ plugins: { legend: { labels: { color: "#00ffff" } } } }} />
    </motion.div>
  );
}
