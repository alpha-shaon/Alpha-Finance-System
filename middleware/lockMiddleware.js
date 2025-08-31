import ExpenseForm from "../models/ExpenseForm.js";
export const checkLocked = async (req, res, next) => {
  const form = await ExpenseForm.findById(req.params.id);
  if (form.status !== "pending") {
    return res.status(403).json({ message: "Form is locked" });
  }
  next();
};
