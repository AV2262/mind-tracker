import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import API from "../api/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function Statistics() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/entries");
        setEntries(res.data);
      } catch (err) {
        console.error("Error loading statistics:", err);
      }
    };
    fetchStats();
  }, []);

  const labels = entries.map((e) => new Date(e.createdAt).toLocaleDateString());
  const moodScores = entries.map((e) => e.moodScore);

  const lineData = {
    labels,
    datasets: [
      {
        label: "Mood Over Time",
        data: moodScores,
        borderColor: "#00ffff",
        backgroundColor: "rgba(0,255,255,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto glass p-8 rounded-3xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-300 mb-6">📊 Mood Analytics</h2>
      {entries.length === 0 ? (
        <p className="text-cyan-200">No data yet. Add mood entries first!</p>
      ) : (
        <div className="bg-[#002b4f]/60 p-6 rounded-2xl shadow-[0_0_15px_#00ffff33]">
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { labels: { color: "#00ffff" } } } }} />
        </div>
      )}
    </motion.div>
  );
}
