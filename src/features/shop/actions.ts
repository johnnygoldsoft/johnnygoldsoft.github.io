"use server";
import { Resend } from "resend";
import { contactSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) return { error: "Données invalides" };

  const { name, email, subject, message, service } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio <noreply@johnnygoldsoft.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nService: ${service || "Non spécifié"}\n\n${message}`,
    });
    return { success: true };
  } catch {
    return { error: "Erreur lors de l'envoi" };
  }
}
