"use client";

import { useEffect, useState } from "react";

export default function Loader({ children, isDarkMode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simule un chargement de 1.5s
    return () => clearTimeout(timer); // Nettoie le timer
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            isDarkMode ? "bg-darktheme" : "bg-white"
          } z-50`}
        >
          <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
