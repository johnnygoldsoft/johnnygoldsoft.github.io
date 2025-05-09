import Image from "next/image";
import { assets } from "../../../assets/assets";

export default function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      {/* Logo Section */}
      <div className="text-center mb-6">
        <a href="#top">
          {isDarkMode ? (
            <h2 className="flex flex-row justify-center w-36 mx-auto mb-2 w-36 mx-auto text-3xl font-semibold font-Outfit">
              JCSassou <span className="text-red-500 text-center ">.</span>
            </h2>
          ) : (
            <h2 className="flex flex-row justify-center w-36 mx-auto mb-2 w-36 mx-auto text-3xl font-semibold font-Outfit">
              JCSassou <span className="text-red-500 text-center ">.</span>
            </h2>
          )}
        </a>
        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-6"
          />
          Johnnygoldsoft@gmail.com
        </div>
      </div>

      {/* Footer Links and Copyright */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-white/20">
        <p className="text-gray-700 dark:text-white">
          Tous droits réservés © 2025
        </p>
        <ul className="flex items-center gap-4 justify-center mt-4 sm:mt-0">
          {[
            { href: "https://github.com/johnnygoldsoft", label: "Github" },
            {
              href: "https://www.linkedin.com/in/jean-claude-sassou/",
              label: "LinkedIn",
            },
            {
              href: "https://www.instagram.com/johnnygoldsoft/",
              label: "Instagram",
            },
          ].map((link, index) => (
            <li key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 transition"
                aria-label={`Go to ${link.label}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Back to top button */}
          <li>
            <a
              href="#top"
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition dark:border-white"
              aria-label="Back to top"
            >
              ⬆
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
