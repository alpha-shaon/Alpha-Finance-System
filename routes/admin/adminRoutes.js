import express from "express";
import { authMiddleware, adminOnly } from "../../middleware/authMiddleware.js";
import { getUsers, setRole, notifyApproval } from "../../controllers/adminController.js";

const router = express.Router();
router.get("/users", authMiddleware, adminOnly, getUsers);
router.post("/set-role", authMiddleware, adminOnly, setRole);
router.post("/notify", authMiddleware, adminOnly, notifyApproval);

export default router;
