// src/api/api.js (mock mode)
export const API = {
  get: async (path) => {
    console.log(`Mock GET -> ${path}`);
    if (path.includes("entries")) {
      return {
        data: [
          { date: "2025-10-30", moodScore: 8 },
          { date: "2025-10-29", moodScore: 6 },
          { date: "2025-10-28", moodScore: 7 },
        ],
      };
    }
    if (path.includes("reminders")) {
      return {
        data: [
          { text: "Drink water", time: "10:00 AM" },
          { text: "Go for a walk", time: "5:00 PM" },
        ],
      };
    }
    if (path.includes("stats")) {
      return { data: { average: 7.2, totalEntries: 15 } };
    }
    return { data: [] };
  },
};
export const setAuthToken = () => {};
export default API;
