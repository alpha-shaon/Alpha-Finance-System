import express from "express";
import multer from "multer";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { submitExpense, getUserExpenses, acceptExpense } from "../../controllers/expenseController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/expense", authMiddleware, upload.single("voucher"), submitExpense);
router.get("/user-expenses", authMiddleware, getUserExpenses);
router.post("/accept", authMiddleware, acceptExpense);

export default router;
