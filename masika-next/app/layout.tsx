import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ui/ContactModal";
import ReturnToTop from "@/components/ui/ReturnToTop";
import ScrollObserver from "@/components/ui/ScrollObserver";
import AnimationInit from "@/components/ui/AnimationInit";

const playfair = Playfair_Display({
  variable: "--font-cine",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-ui",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masika Care Ecosystem",
  description: "Redefining Menstrual Hygiene Management through IoT and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body>
        <Navbar />
        <ScrollObserver />
        <AnimationInit />
        {children}
        <Footer />
        <ContactModal />
        <ReturnToTop />
      </body>
    </html>
  );
}
