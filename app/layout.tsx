import type { Metadata } from "next";
import { Inter, Poppins, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

//--font-inter makes the font available as a CSS variable instead of applying it directly.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-francis"});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

//sets the browser tab title
export const metadata: Metadata = {
  title: "Esther | Portfolio",
  description: "Esther's personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode}>){
  return (
    <html
      lang = "en"
      className={ `${inter.variable} ${poppins.variable} ${fraunces.variable}, ${jetbrainsMono.variable}`}>
        <body className="bg-background text-foreground font-sans antialiased">
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
  );
}
