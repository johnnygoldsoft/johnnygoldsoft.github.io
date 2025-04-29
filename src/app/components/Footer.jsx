import Image from "next/image";
import { assets } from "../../../assets/assets";

export default function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      {/* Logo Section */}
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-6"
          />
          Johnnygoldsoft@gmail.com
        </div>
      </div>

      {/* Footer Links and Copyright */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>Tous droit réservés © 2025</p>
        <ul className="flex items-center gap-2 justify-center mt-4 sm:mt-0">
          {[
            { href: "https://github.com", label: "Github" },
            { href: "https://linkedin.com", label: "LinkedIn" },
            { href: "https://twitter.com", label: "Twitter" },
            { href: "https://instagram.com", label: "Instagram" },
          ].map((link, index) => (
            <li key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              ⬆
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
