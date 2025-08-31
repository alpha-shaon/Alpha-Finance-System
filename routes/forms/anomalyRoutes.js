import express from 'express';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import { getAnomalies } from '../../controllers/anomalyController.js';

const router = express.Router();
router.get('/anomalies', authMiddleware, getAnomalies);

export default router;
