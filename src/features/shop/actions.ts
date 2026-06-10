"use server";
import { Resend } from "resend";
import { contactSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) return { error: "Données invalides" };

  const { name, email, subject, message, service } = parsed.data;

  try {
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nService: ${service || "Non spécifié"}\n\n${message}`,
    });
    console.log("Resend result:", result);
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { error: "Erreur lors de l'envoi" };
  }
}
