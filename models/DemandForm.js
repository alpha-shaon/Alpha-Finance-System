import mongoose from "mongoose";
const demandFormSchema = new mongoose.Schema({
  type: { type: String, enum: ["cash", "materials"], required: true },
  description: String,
  amount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending", "approved"], default: "pending" },
}, { timestamps: true });
export default mongoose.model("DemandForm", demandFormSchema);
