import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log("contact route hit");

  const data = await resend.emails.send({
    from: "Portfolio <kun1e.onrender.com>",
    to: "kunleace001@gmail.com",
    subject: `${name} sent a message from your website!`,
    html: `<div><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p></div>`,
  });
  console.log(data);
  return NextResponse.json({ success: true });
}
