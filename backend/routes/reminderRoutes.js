import express from "express";
import { getReminders, addReminder, toggleReminder } from "../controllers/reminderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getReminders).post(protect, addReminder);
router.patch("/:id/toggle", protect, toggleReminder);

export default router;
