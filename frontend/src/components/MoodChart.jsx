import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function MoodChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mocked data for demo
    const points = Array.from({ length: 10 }, (_, i) => ({
      day: `Day ${i + 1}`,
      mood: Math.floor(Math.random() * 10),
    }));
    setData(points);
  }, []);

  return (
    <Line
      data={{
        labels: data.map((d) => d.day),
        datasets: [
          {
            label: "Mood Over Time",
            data: data.map((d) => d.mood),
            borderColor: "#00ffff",
            backgroundColor: "#00ffff33",
            tension: 0.4,
            fill: true,
          },
        ],
      }}
      options={{
        scales: { y: { min: 0, max: 10 } },
        plugins: { legend: { labels: { color: "#00ffff" } } },
      }}
    />
  );
}
