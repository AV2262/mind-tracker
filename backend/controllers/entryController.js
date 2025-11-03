import asyncHandler from "express-async-handler";
import Entry from "../models/entryModel.js";

// @desc    Get all mood entries for logged-in user
// @route   GET /api/entries
// @access  Private
export const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(entries);
});

// @desc    Add a new mood entry
// @route   POST /api/entries
// @access  Private
export const addEntry = asyncHandler(async (req, res) => {
  const { moodScore, note } = req.body;

  if (!moodScore) {
    res.status(400);
    throw new Error("Mood score is required");
  }

  const entry = await Entry.create({
    user: req.user.id,
    moodScore,
    note,
  });

  res.status(201).json({
    _id: entry._id,
    moodScore: entry.moodScore,
    note: entry.note,
    date: entry.createdAt,
  });
});
