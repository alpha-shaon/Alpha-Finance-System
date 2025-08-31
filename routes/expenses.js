import express from "express";
import Expense from "../models/Expense.js";
import { authMiddleware, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create expense
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    const expense = await Expense.create({
      title,
      amount,
      category,
      createdBy: req.user._id,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all expenses (Admin only)
router.get("/", authMiddleware, adminOnly, async (req, res) => {
  try {
    const expenses = await Expense.find().populate("createdBy", "name email");
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
