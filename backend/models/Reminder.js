import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
    time: { type: String },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Reminder", reminderSchema);
