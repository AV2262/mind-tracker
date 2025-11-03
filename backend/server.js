import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import entryRoutes from "./routes/entryRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js"; // ✅ imported here
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express(); // ✅ initialize app before using it

// ✅ Allow frontend access
app.use(cors({
  origin: "http://localhost:5173", // your React app
  credentials: true
}));

app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/entries", entryRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/chatbot", chatbotRoutes); // ✅ moved here after app is initialized

// ✅ Default Route
app.get("/", (req, res) => res.send("Mind Tracker API is running"));

// ✅ Error Handler
app.use(errorHandler);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
