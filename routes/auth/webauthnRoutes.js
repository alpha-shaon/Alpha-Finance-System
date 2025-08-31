import express from 'express';
import { registerCredential, verifyCredential } from '../../controllers/webauthnController.js';

const router = express.Router();
router.post('/register-credential', registerCredential);
router.post('/verify-credential', verifyCredential);

export default router;
