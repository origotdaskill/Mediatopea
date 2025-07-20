"use client";

import Header from "@/components/components/header"; 
import Footer from "@/components/components/footer";
import Link from "next/link";
import React from "react";


export default function PricingPage() {
  const calendarLink = "https://book.mediatopea.com/mediatopea/devis";



  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#000000] text-gray-300">
      <Header />
      <main className="container mx-auto px-4 z-10 pt-32 pb-16 max-w-6xl">
        <div className="space-y-8 text-center">
          <h1 className="text-[#ffffff] bp3:text-4xl text-7xl font-light mb-3 bg-clip-text text-transparent bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D]">
            Nos Services d'Automatisation
          </h1>
          <p className="font-light text-[#ffffff] text-lg max-w-3xl mx-auto text-gray-400">
            Des solutions sur mesure pour chaque étape de votre croissance. Nous transformons vos opérations manuelles en systèmes intelligents et autonomes.
          </p>

          {/* Packages Grid - Updated to 3 tiers */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 pt-8 text-left">
            
            {/* Tier 1: Automated Lead Qualifier */}
            <div className="border border-gray-800 bg-[#0a0a0a] rounded-lg p-6 flex flex-col transition-transform hover:scale-[1.02]">
              <h2 className="text-2xl font-normal text-white mb-3">Qualificateur de Leads Automatisé</h2>
              <p className="text-gray-400 font-light flex-grow mb-6">
                Gèrer chaque nouveau lead en autonomie, de la prise de contact initiale jusqu'à la réservation confirmée dans votre calendrier.
              </p>
              <div className="text-3xl font-light text-white mb-6">
                Sur devis
                <span className="text-base text-gray-500 ml-2">Projet unique</span>
              </div>
              <Link href={calendarLink} passHref>
                <p className="w-full text-center bg-gray-800 text-white font-medium py-3 rounded-md hover:bg-gray-700 transition-colors">
                  Discuter du Projet
                </p>
              </Link>
            </div>

            {/* Tier 2: Growth Operations Hub */}
            <div className="relative border-2 border-[#B0B0B0] bg-[#0a0a0a] rounded-lg p-6 flex flex-col transition-transform hover:scale-[1.02]">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#B0B0B0] text-black text-xs font-bold py-1 px-3 rounded-full uppercase">
                Recommandé
              </div>
              <h2 className="text-2xl font-normal text-white mb-3">Hub d'Opérations de Croissance</h2>
              <p className="text-gray-400 font-light flex-grow mb-6">
                Intégration CRM complète, tableau de bord sur mesure et boîte de réception centralisée. Nous unifions vos outils pour une vue à 360° de vos opérations.
              </p>
              <div className="text-3xl font-light text-white mb-6">
                Sur devis
                <span className="text-base text-gray-500 ml-2">Projet + Support</span>
              </div>
              <Link href={calendarLink} passHref>
                <p className="w-full text-center bg-white text-black font-medium py-3 rounded-md hover:bg-gray-200 transition-colors">
                  Réserver un Appel
                </p>
              </Link>
            </div>

            {/* Tier 3: AI Transformation Partner */}
            <div className="border border-gray-800 bg-[#0a0a0a] rounded-lg p-6 flex flex-col transition-transform hover:scale-[1.02]">
              <h2 className="text-2xl font-normal text-white mb-3">Partenaire de Transformation IA</h2>
              <p className="text-gray-400 font-light flex-grow mb-6">
                Un partenariat stratégique pour infuser l'IA dans toute votre entreprise. Nous agissons comme votre DSI externalisé pour une innovation et une efficacité continues.
              </p>
              <div className="text-3xl font-light text-white mb-6">
                Sur devis
                <span className="text-base text-gray-500 ml-2">Partenariat Mensuel</span>
              </div>
              <Link href={calendarLink} passHref>
                <p className="w-full text-center bg-gray-800 text-white font-medium py-3 rounded-md hover:bg-gray-700 transition-colors">
                  Planifier une Consultation
                </p>
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}