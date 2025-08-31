import DemandForm from "../models/DemandForm.js";

export const submitDemand = async (req, res) => {
  const { type, description, amount } = req.body;
  const form = await DemandForm.create({ type, description, amount, createdBy: req.user._id });
  res.status(201).json(form);
};
