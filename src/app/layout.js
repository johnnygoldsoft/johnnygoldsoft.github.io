import { Outfit, Ovo } from "next/font/google";
import Loader from "./components/Loader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Jean claude SASSOU | Portfolio",
  description: " mon portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="Fr" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darktheme dark:text-white`}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
