"use client";

import Header from "@/components/components/header";
import Footer from "@/components/components/footer";


import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function RefundPolicy() {
  const yourEmail = "hello@mediatopea.com";



  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#000000] text-gray-300">
      <Header />
      <main className="container mx-auto px-4 z-10 pt-32 pb-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-[#ffffff] bp3:text-4xl text-7xl font-light mb-3 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D]">
            Politique de Remboursement
          </h1>
          <p className="font-light text-[#ffffff] text-sm mb-3 text-center text-sm text-gray-400">
            Dernière mise à jour : 16 juillet 2025
          </p>

          <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-h2:text-white prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2 prose-strong:text-gray-200 prose-a:text-[#B0B0B0] hover:prose-a:text-white">
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Chez Mediatopea, nous nous engageons à fournir des services stratégiques et d'automatisation de haute qualité. Nous apprécions nos relations avec nos clients et visons leur satisfaction. Cette politique décrit notre position sur les remboursements pour nos services.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">1. Politique Générale</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              En raison de la nature de notre travail — qui implique l'allocation de temps, de ressources et d'expertise intellectuelle —
              <strong>
                Mediatopea n'offre pas de remboursements pour les services qui ont déjà été rendus ou qui sont en cours de réalisation.
              </strong>
            </p>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Lorsque vous engagez nos services, vous achetez notre temps et notre expertise. Une fois que ce temps a été consacré, il ne peut être récupéré.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">2. Services Basés sur des Projets & Conseil</h2>
            <ul>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                <strong>Acomptes/Paiements Initiaux :</strong> Tous les paiements initiaux ou acomptes requis pour réserver un créneau de projet sont non remboursables. Ces frais couvrent notre découverte initiale, notre stratégie, nos recherches et l'allocation de nos ressources.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                <strong>Paiements d'Étape :</strong> Pour les projets facturés par étapes, les paiements ne sont pas remboursables une fois qu'une étape a été achevée et livrée. Si un projet est annulé par le client en cours de projet, le client est responsable du paiement de tout le travail accompli jusqu'au point d'annulation.
              </li>
            </ul>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">3. Services d'Abonnement/Forfaitaires</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Pour les services forfaitaires ou d'abonnement mensuels, les frais sont facturés à l'avance pour chaque période de service (par exemple, mensuellement). Ces frais ne sont pas remboursables. Vous pouvez annuler votre abonnement à tout moment, et votre abonnement restera actif jusqu'à la fin de la période de facturation payée en cours. Aucun remboursement au pro-rata ne sera émis pour les jours restants de la période.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">4. Exceptions</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous croyons en un commerce équitable. Un remboursement ne sera envisagé que dans le cas rare où Mediatopea serait, pour une raison imprévue, incapable de fournir le service tel que décrit dans le Contrat de Service signé. Dans un tel cas, un remboursement partiel ou total pourra être émis à notre seule discrétion, en fonction de la partie du travail qui n'a pas été achevée.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">5. Insatisfaction du Service</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous visons une satisfaction client à 100%. Si vous n'êtes pas satisfait de notre service, nous vous demandons de nous contacter immédiatement à{" "}
              <a href={`mailto:${yourEmail}`}>{yourEmail}</a>. Nous travaillerons avec diligence pour comprendre le problème et trouver une solution mutuellement acceptable, ce qui peut inclure la révision du travail ou la fourniture d'un soutien supplémentaire, mais cela ne garantit pas un remboursement.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">6. Rétrofacturations (Chargebacks)</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Les clients sont encouragés à nous contacter pour résoudre tout problème avant d'initier une rétrofacturation. L'initiation d'une rétrofacturation sans communication préalable peut entraîner la résiliation immédiate de tous les services et une interdiction permanente de contracter de futurs services avec Mediatopea.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}