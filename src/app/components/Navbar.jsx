"use client";

import Image from "next/image";
import { assets } from "../../../assets/assets";
import React, { useState, useEffect, useCallback } from "react";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gérer le changement de couleur au défilement
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Gérer l'ouverture et la fermeture du menu mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darktheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/20 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Accueil
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              A Propos
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              Mes Travaux
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Me Contacter
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !isDarkMode)}
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          <button
            className="block md:hidden ml-3"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>
        {/* ---- Mobile Menu -- */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 dark:bg-darkhover dark:text-white ${
            isMenuOpen ? "right-0" : "-right-64"
          }`}
        >
          <div className="absolute top-6 right-6" onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={toggleMenu} href="#top">
              Accueil
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={toggleMenu} href="#about">
              A Propos
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={toggleMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={toggleMenu} href="#work">
              Mes Travaux
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={toggleMenu} href="#contact">
              Me Contacter
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
