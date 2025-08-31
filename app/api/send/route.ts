import { ContactEmailTemplate } from "../../../components/contact/contact-email-template";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email().min(1, "Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return Response.json(
        { error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["egeayan2478@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      console.error(error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
