"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { z } from "zod";
import { Resend } from "resend";

const quoteSchema = z.object({
  name:         z.string().min(2).max(100),
  email:        z.string().email(),
  phone:        z.string().max(30).optional(),
  service_id:   z.string().uuid().optional(),
  service_name: z.string().max(200).optional(),
  message:      z.string().min(10).max(3000),
  budget:       z.string().max(100).optional(),
});

export async function submitQuoteRequest(formData: unknown) {
  const parsed = quoteSchema.safeParse(formData);
  if (!parsed.success) return { error: "Données invalides", details: parsed.error.flatten() };

  const supabase = await createClient();
  const { error } = await supabase.from("quote_requests").insert(parsed.data);
  if (error) return { error: "Erreur lors de l'enregistrement" };

  // Email de notification
  if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Portfolio <noreply@johnnygoldsoft.dev>",
        to: process.env.CONTACT_EMAIL,
        subject: `[Devis] ${parsed.data.service_name || "Service"} — ${parsed.data.name}`,
        text: `Nouvelle demande de devis\n\nNom: ${parsed.data.name}\nEmail: ${parsed.data.email}\nTél: ${parsed.data.phone || "Non renseigné"}\nService: ${parsed.data.service_name || "Non précisé"}\nBudget: ${parsed.data.budget || "Non précisé"}\n\nMessage:\n${parsed.data.message}`,
      });
    } catch {}
  }
  return { success: true };
}
