import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to,
      subject,
      text,
    });

    console.log("📩 Email sent successfully");
  } catch (error) {
    console.error("❌ Email error:", error);
  }
};
