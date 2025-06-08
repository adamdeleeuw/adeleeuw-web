import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateInput({ name, email, subject, message }: Record<string, string>) {
  const errors: string[] = []
  if (!name || name.trim().length < 2) errors.push("Name is required.")
  if (!email || !EMAIL_REGEX.test(email)) errors.push("A valid email is required.")
  if (!subject || subject.trim().length < 2) errors.push("Subject is required.")
  if (!message || message.trim().length < 10) errors.push("Message must be at least 10 characters.")
  return errors
}

// Utility to escape HTML special characters to prevent XSS in emails
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Input validation
    const errors = validateInput({ name, email, subject, message })
    if (errors.length > 0) {
      return new Response(JSON.stringify({ error: errors.join(" ") }), { status: 400 })
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to you (the business owner)
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "adam@adamdeleeuw.com",
      subject: `New Contact Form Submission: ${escapeHtml(subject)}`,
      replyTo: escapeHtml(email),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Project Type:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${escapeHtml(message).replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Auto-reply to the client
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting Adam de Leeuw - Web Development",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0ea5e9;">Thank You for Your Message!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out about your <strong>${subject}</strong> project. I've received your message and will get back to you within 24 hours.</p>
      
      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
        <h3 style="margin-top: 0; color: #0ea5e9;">What happens next?</h3>
        <ul style="color: #374151;">
          <li>I'll review your project details carefully</li>
          <li>Prepare a detailed proposal with timeline and pricing</li>
          <li>Schedule a call to discuss your vision in detail</li>
          <li>Answer any questions you might have</li>
        </ul>
      </div>
      
      <p>In the meantime, feel free to check out my <a href="https://adamdeleeuw.dev/services" style="color: #0ea5e9;">services page</a> or view some of my recent work.</p>
      
      <p>Looking forward to working with you!</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0;"><strong>Adam de Leeuw</strong></p>
        <p style="margin: 5px 0; color: #64748b;">de Leeuw Digital</p>
        <p style="margin: 5px 0; color: #64748b;">Email: adam@deleeuwdigital.com</p>
        <p style="margin: 5px 0; color: #64748b;">Phone: +1 (604) 344-0618</p>
      </div>
    </div>
  `,
    }

    await transporter.sendMail(autoReplyOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    // Avoid logging sensitive data
    console.error("Contact form error:", error instanceof Error ? error.message : error)
    return new Response(JSON.stringify({ error: "Failed to send message. Please try again later." }), { status: 500 })
  }
}
