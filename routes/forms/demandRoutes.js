import express from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { submitDemand } from "../../controllers/demandController.js";

const router = express.Router();
router.post("/demand", authMiddleware, submitDemand);
export default router;
