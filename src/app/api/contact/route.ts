import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Validates the message and returns a response. By default this does NOT send
 * email — no provider is configured. To deliver messages, plug one in below
 * (e.g. Resend, EmailJS, Formspree, or Nodemailer) and read credentials from
 * environment variables (see .env.example and README).
 *
 * If CONTACT_DELIVERY_ENABLED is not "true", the route responds with 503 so the
 * form shows an honest error instead of pretending the message was sent.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    !EMAIL_RE.test(email.trim()) ||
    message.trim().length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please provide a name, a valid email, and a message of at least 10 characters." },
      { status: 422 },
    );
  }

  if (process.env.CONTACT_DELIVERY_ENABLED !== "true") {
    return NextResponse.json(
      { error: "Message delivery isn't set up yet. Please email me directly instead." },
      { status: 503 },
    );
  }

  // TODO: send the email with your provider of choice, e.g.:
  //   await resend.emails.send({ from, to: process.env.CONTACT_TO_EMAIL!, subject, text })
  // Throw or return a 500 if sending fails.

  return NextResponse.json({ ok: true });
}
