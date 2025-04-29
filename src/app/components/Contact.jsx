"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import React, { use, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours ...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4546d7f8-1d19-4129-9bbb-5206edf0b7d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Formulaire envoyer avec succès !");
      event.target.reset();
    } else {
      console.log("erreur: ", res);
      setResult("erreur : ", res);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-VideoColorSpace.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Pour tout besoin</h4>
      <h2 className="text-center text-5xl font-Ovo">Entrer en contact Get</h2>
      <p className="max-w-2xl text-center mt-5 mb-12 mx-auto font-Ovo">
        Je suis toujours à la recherche de nouveaux défis et d'opportunités
        passionnantes. N'hésitez pas à me contacter pour discuter de projets,
        collaborations ou simplement pour dire bonjour !
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-5 mt-10"
      >
        <div className="grid grid-cols-autos gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Entrer votre nom  "
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Entrer votre email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Entrer votre message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Envoyer maintenant{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
}
