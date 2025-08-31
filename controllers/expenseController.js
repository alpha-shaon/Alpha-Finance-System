import ExpenseForm from "../models/ExpenseForm.js";
import AuditLog from "../models/AuditLog.js";

export const submitExpense = async (req, res) => {
  const { expenses } = req.body;
  const voucher = req.file?.filename;
  const form = await ExpenseForm.create({ expenses: JSON.parse(expenses), voucher, createdBy: req.user._id });
  await AuditLog.create({ action: "Submitted Expense", user: req.user._id });
  res.status(201).json(form);
};

export const getUserExpenses = async (req, res) => {
  const forms = await ExpenseForm.find({ createdBy: req.user._id });
  res.json(forms);
};

export const acceptExpense = async (req, res) => {
  const { id } = req.body;
  await ExpenseForm.findByIdAndUpdate(id, { status: "accepted" });
  await AuditLog.create({ action: "Accepted Expense", user: req.user._id });
  res.json({ message: "Accepted" });
};
