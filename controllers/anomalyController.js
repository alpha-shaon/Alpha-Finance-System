import ExpenseForm from '../models/ExpenseForm.js';
import { detectAnomalies } from '../utils/anomalyDetector.js';

export const getAnomalies = async (req, res) => {
  const forms = await ExpenseForm.find({ createdBy: req.user._id });
  const allExpenses = forms.flatMap(f => f.expenses);
  const flagged = detectAnomalies(allExpenses);
  res.json(flagged);
};
