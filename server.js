import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db.js';
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/forms/expenseRoutes.js';
import demandRoutes from './routes/forms/demandRoutes.js';
import anomalyRoutes from './routes/forms/anomalyRoutes.js';
import adminRoutes from './routes/admin/adminRoutes.js';
import webauthnRoutes from './routes/auth/webauthnRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/forms', expenseRoutes);
app.use('/api/forms', demandRoutes);
app.use('/api/forms', anomalyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', webauthnRoutes);

app.get('/', (req, res) => {
  res.send('✅ AlphaUltimate Backend API running...');
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(🚀 API running on http://localhost:);
  });
});
