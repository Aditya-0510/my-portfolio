import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequest = {
  name?: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactRequest = await req.json();

    const { name, email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "saiaditya6558@gmail.com",
      subject,
      text: `From: ${name || "Anonymous"} (${email})\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);

    // safely extract message
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      { message: "Error sending email", error: message },
      { status: 500 }
    );
  }
}
