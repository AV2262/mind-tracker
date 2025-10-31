import express from "express";
import { getEntries, addEntry } from "../controllers/entryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getEntries).post(protect, addEntry);

export default router;
