import mongoose from "mongoose";
const expenseFormSchema = new mongoose.Schema({
  expenses: [{ title: String, amount: Number }],
  voucher: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending", "accepted"], default: "pending" },
}, { timestamps: true });
export default mongoose.model("ExpenseForm", expenseFormSchema);
