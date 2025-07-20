"use client";

import Header from "@/components/components/header"; 
import Footer from "@/components/components/footer";
import Link from "next/link";
import React from "react";


export default function StartPage() {
  const yourEmail = "hello@mediatopea.com";
  


  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#000000] text-gray-300">
      <Header />
      <main className="container mx-auto px-4 z-10 pt-32 pb-16 max-w-2xl">
        <div className="space-y-8 text-center">
          <h1 className="text-[#ffffff] bp3:text-4xl text-7xl font-light mb-3 bg-clip-text text-transparent bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D]">
            Finalisez Votre Projet
          </h1>
          <p className="font-light text-[#ffffff] text-lg text-gray-400">
            Ceci est la dernière étape pour lancer votre projet d'automatisation. Cette page est activée après un appel stratégique pour confirmer la portée de votre projet et procéder au paiement.
          </p>
          
          {/* Paddle Checkout Placeholder */}
          <div className="border-2 border-dashed border-gray-700 bg-[#0a0a0a] rounded-lg p-12 mt-8">
            <h2 className="text-xl font-medium text-white">
              [ L'interface de paiement Paddle sera intégrée ici ]
            </h2>
            <p className="text-gray-500 mt-2 font-light">
              Le module de paiement sécurisé se chargera ici une fois votre projet défini.
            </p>
          </div>

          <p className="font-light text-gray-500 pt-4">
            Si vous avez des questions ou si vous êtes arrivé ici par erreur, veuillez nous contacter à{" "}
            <a href={`mailto:${yourEmail}`} className="text-gray-300 hover:text-white underline">
              {yourEmail}
            </a>.
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
}