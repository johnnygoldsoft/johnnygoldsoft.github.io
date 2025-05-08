"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Utilisation de framer-motion pour les animations

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
        setFormData({ name: "", email: "", message: "" }); // Reset form after success
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        Pour tout besoin
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Entrer en contact
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-2xl text-center mt-5 mb-12 mx-auto font-Ovo"
      >
        Je suis toujours à la recherche de nouveaux défis et d'opportunités
        passionnantes. N'hésitez pas à me contacter pour discuter de projets,
        collaborations ou simplement pour dire bonjour !
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-tester gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Entrer votre nom"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90 focus:border-lime-500"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Entrer votre email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90 focus:border-lime-500"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Entrer votre message"
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90 focus:border-lime-500"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover"
        >
          {isLoading ? (
            <span className="loader">Envoi...</span>
          ) : (
            <>
              Envoyer maintenant
              <Image
                src={assets.right_arrow_white}
                alt="right arrow"
                className="w-4"
              />
            </>
          )}
        </motion.button>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          {result}
        </p>
      </motion.form>
    </motion.div>
  );
}
