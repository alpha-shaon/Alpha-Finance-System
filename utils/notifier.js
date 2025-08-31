import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

export const sendNotification = async (to, subject, text) => {
  await transporter.sendMail({ from: process.env.ADMIN_EMAIL, to, subject, text });
};
