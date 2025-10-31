import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import entryRoutes from "./routes/entryRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

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

app.get("/", (req, res) => res.send("Mind Tracker API is running"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
