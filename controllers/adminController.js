import User from "../models/User.js";
import { sendNotification } from "../utils/notifier.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const setRole = async (req, res) => {
  const { id, role } = req.body;
  await User.findByIdAndUpdate(id, { role });
  res.json({ message: "Role updated" });
};

export const notifyApproval = async (req, res) => {
  const { email } = req.body;
  await sendNotification(email, "Approval Notice", "Your submission has been approved.");
  res.json({ message: "Email sent" });
};
