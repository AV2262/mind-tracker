import Reminder from "../models/Reminder.js";

export const getReminders = async (req, res) => {
  const reminders = await Reminder.find({ user: req.user.id });
  res.json(reminders);
};

export const addReminder = async (req, res) => {
  const reminder = await Reminder.create({ user: req.user.id, ...req.body });
  res.status(201).json(reminder);
};

export const toggleReminder = async (req, res) => {
  const reminder = await Reminder.findById(req.params.id);
  if (reminder) {
    reminder.active = !reminder.active;
    await reminder.save();
    res.json(reminder);
  } else {
    res.status(404).json({ message: "Reminder not found" });
  }
};
