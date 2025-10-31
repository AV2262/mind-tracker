import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moodScore: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    note: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // ✅ adds createdAt, updatedAt
  }
);

const Entry = mongoose.model("Entry", entrySchema);
export default Entry;
