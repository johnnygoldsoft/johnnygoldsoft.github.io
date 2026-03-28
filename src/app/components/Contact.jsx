"use client";

import Image from "next/image";
import { assets } from "../../../assets/assets";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/common/SectionTitle";

/**
 * Contact Component - Formulaire de contact
 * Inspiré par shadcn/ui - Design système cohérent
 */
export default function Contact() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("En cours ...");

    const object = {
      ...formData,
      access_key: "4546d7f8-1d19-4129-9bbb-5206edf0b7d3",
    };
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setResult("Formulaire envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Erreur : Impossible d'envoyer le formulaire.");
      }
    } catch (error) {
      setResult("Erreur réseau. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="w-full px-4 py-16 sm:px-8 scroll-mt-20 bg-gray-50 dark:bg-gray-900"
      id="contact"
    >
      <div className="mx-auto max-w-2xl">
        {/* Section Title */}
        <SectionTitle
          subtitle="Pour tout besoin"
          title="Entrer en contact"
          description="Je suis toujours à la recherche de nouveaux défis et d'opportunités passionnantes. N'hésitez pas à me contacter pour discuter de projets, collaborations ou simplement pour dire bonjour !"
        />

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={onSubmit}
          className="mt-12 space-y-6 rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950"
        >
          {/* Name & Email Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50">
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-blue-900"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-blue-900"
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Votre message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-blue-900"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? "Envoi..." : "Envoyer le message"}
              {!isLoading && (
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              )}
            </Button>

            {/* Result Message */}
            {result && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm font-semibold ${
                  result.includes("succès")
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

/**
 * Design Philosophy (shadcn/ui inspired):
 * - Accessible form inputs with labels
 * - Consistent focus states and styling
 * - Smooth animations and transitions
 * - Error and success states
 * - Responsive layout
 * - Dark mode support
 * - Semantic HTML structure
 */
