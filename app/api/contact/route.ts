import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const fallbackEmail = "sobition@gmail.com";
const fromAddress =
  process.env.CONTACT_FROM_EMAIL || "Sobifolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!resend) {
      return new Response(
        JSON.stringify({
          error: "Contact form is not configured on this deployment",
          fallbackEmail,
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await resend.emails.send({
      from: fromAddress,
      to: fallbackEmail,
      replyTo: email,
      subject: subject
        ? `[Sobifolio] ${subject}`
        : "New message from sobifolio contact form",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({
        error: "Email failed to send",
        fallbackEmail,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
