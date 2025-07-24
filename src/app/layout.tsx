import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "@/components/components/ClarityAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mediatopea: L'IA qui Transforme vos Leads en Rendez-vous 24/7",
  description:
    "Votre agence est trop lente pour répondre ? Notre assistant IA engage chaque lead de Mubawab, WhatsApp & Instagram en moins de 60 secondes. Transformez vos leads froids en rendez-vous chauds et signez plus de mandats.",

  openGraph: {
    title: "Mediatopea: L'IA qui Transforme vos Leads en Rendez-vous 24/7",
    description:
      "Votre agence est trop lente pour répondre ? Notre assistant IA engage chaque lead de Mubawab, WhatsApp & Instagram en moins de 60 secondes. Transformez vos leads froids en rendez-vous chauds et signez plus de mandats.",
    url: "https://mediatopea.com",
    siteName: "MediaTopea",
    images: [
      {
        url: "https://mediatopea.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediatopea: L'IA qui Transforme vos Leads en Rendez-vous 24/7",
    description:
      "Votre agence est trop lente pour répondre ? Notre assistant IA engage chaque lead de Mubawab, WhatsApp & Instagram en moins de 60 secondes. Transformez vos leads froids en rendez-vous chauds et signez plus de mandats.",
    images: ["https://mediatopea.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" style={{ colorScheme: "dark" }}>
      {/* ✅ Moved Clarity Analytics into the body for safer script placement */}
      <body className={`${poppins.className} min-h-screen`}>
        <ClarityAnalytics />
        {/* Your existing layout structure is preserved */}
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-[#000000]">
          {/* Taller Triangle Glow Effect (Moved Upwards by 40px) */}
          <div className="absolute inset-x-0 top-[-80px] z-0 flex justify-center">
            {/* Larger Soft Ambient Glow */}
            <div
              className="w-0 h-0
                border-l-[450px] border-l-transparent
                border-r-[450px] border-r-transparent
                border-b-[900px] border-b-[#7D7D7D]/40
                blur-[100px]
                opacity-50"
            />
            {/* Inner Glow for More Softness */}
            <div
              className="absolute top-[80px]
                w-0 h-0
                border-l-[300px] border-l-transparent
                border-r-[300px] border-r-transparent
                border-b-[650px] border-b-[#7D7D7D]/50
                blur-[120px]
                opacity-60"
            />
          </div>
          {/* Main Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
