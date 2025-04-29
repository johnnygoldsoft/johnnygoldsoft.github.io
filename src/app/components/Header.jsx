import Image from "next/image";
import { assets } from "../../../assets/assets";
import React from "react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          className=" rounded-full w-32 mt-8"
        />
      </div>

      <h3 className=" flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo">
        Salut ! Je suis Jean Claude SASSOU{" "}
        <Image src={assets.hand_icon} alt=" " className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo">
        Web and Mobile Developer, IT Specialist
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Developpeur Web et Mobile, Spécialiste en Informatique, je suis
        passionné par la création de solutions numériques innovantes. Mon
        expertise couvre le développement d'applications web et mobiles, ainsi
        que la gestion des systèmes informatiques.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 "
        >
          {" "}
          Me contacter{" "}
          <Image
            src={assets.right_arrow_white}
            alt=" "
            className=" rounded-full w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          {" "}
          My resume{" "}
          <Image
            src={assets.download_icon}
            alt=" "
            className=" rounded-full w-4"
          />
        </a>
      </div>
    </div>
  );
}
