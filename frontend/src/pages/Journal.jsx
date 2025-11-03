import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookText, CalendarDays, Smile } from "lucide-react";
import API from "../api/api";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await API.get("/entries");
        setEntries(res.data);
      } catch (err) {
        console.error("Error fetching entries:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEntries();
  }, []);

  return (
    <motion.div
      className="max-w-5xl mx-auto glass p-8 rounded-3xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff44]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-8 text-cyan-300">
        <BookText size={32} />
        <h2 className="text-3xl font-semibold">My Mood Journal</h2>
      </div>

      {loading ? (
        <p className="text-cyan-200 text-center">Loading entries...</p>
      ) : entries.length === 0 ? (
        <p className="text-center text-cyan-300">No mood entries yet. Add one!</p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <motion.div
              key={entry._id}
              className="bg-[#002b4f]/60 p-5 rounded-2xl border border-cyan-500/30 shadow-[0_0_15px_#00ffff33]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Smile size={18} />
                  <span className="font-semibold">Mood: {entry.moodScore}/10</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-200 text-sm">
                  <CalendarDays size={16} />
                  <span>{new Date(entry.date || entry.createdAt).toLocaleString()}</span>
                </div>
              </div>
              <p className="text-cyan-100 italic">{entry.note || "No notes provided"}</p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
