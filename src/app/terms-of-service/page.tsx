"use client";

import Header from "@/components/components/header"; 
import Footer from "@/components/components/footer";


import Link from "next/link";
import React from "react";

export default function TermsOfService() {
  const yourEmail = "hello@mediatopea.com";
  const yourCountryState = "Maroc"; // "Morocco" translated to French


  
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#000000] text-gray-300">
      <Header />
      <main className="container mx-auto px-4 z-10 pt-32 pb-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-[#ffffff] bp3:text-4xl text-7xl font-light mb-3 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D]">
            Conditions d'Utilisation
          </h1>
          <p className="font-light text-[#ffffff] text-sm mb-3 text-center text-sm text-gray-400">
            Dernière mise à jour : 17 juillet 2025
          </p>

          <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-h2:text-white prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2 prose-strong:text-gray-200 prose-a:text-[#B0B0B0] hover:prose-a:text-white">
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Bienvenue chez Mediatopea. Ces Conditions d'Utilisation (« Conditions ») régissent votre accès et votre utilisation des services, du site web et des applications (collectivement, les « Services ») fournis par Mediatopea (« nous », « notre » ou « nos »). En utilisant nos Services, vous acceptez d'être lié par ces Conditions.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">1. Services</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Mediatopea fournit des services de stratégie d'automatisation par IA, de packaging de services, de conseil en croissance et d'autres services numériques connexes pour les entreprises, tels que décrits dans nos propositions de projet ou contrats de service spécifiques (« Contrat de Service »). La portée des services, les livrables et les délais seront détaillés dans un Contrat de Service distinct pour chaque engagement client.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">2. Responsabilités du Client</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Pour assurer la bonne livraison de nos Services, vous (« le Client ») acceptez de :
            </p>
            <ul className="font-light text-[#ffffff] text-sm mb-3">
              <li className="font-light text-[#ffffff] text-sm mb-3">
                Fournir un accès en temps opportun aux informations, données et personnel nécessaires.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                Fournir des retours clairs et constructifs ainsi que des approbations en temps opportun.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                Respecter le calendrier de paiement défini dans votre Contrat de Service.
              </li>
            </ul>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Tout retard de la part du Client peut entraîner des ajustements des délais du projet et, dans certains cas, des coûts supplémentaires.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">3. Paiements et Frais</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Les frais pour nos Services seront définis dans le Contrat de Service individuel. Tous les paiements sont traités par notre processeur de paiement tiers, Paddle. Sauf indication contraire, les paiements sont dus dès réception de la facture. Les retards de paiement peuvent entraîner une suspension des travaux et/ou des frais de retard de 1,5% par mois sur le solde impayé.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">4. Propriété Intellectuelle</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              <strong>Contenu du Client :</strong> Vous conservez tous les droits de propriété sur le contenu, les données et les matériaux que vous nous fournissez (« Contenu du Client »). Vous nous accordez une licence non exclusive, mondiale et libre de droits pour utiliser, modifier et afficher le Contenu du Client uniquement dans le but de fournir les Services.
            </p>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              <strong>Livrables :</strong> Sur paiement intégral et final, nous vous accordons les pleins droits de propriété sur les produits de travail finaux et complets (« Livrables ») tels que spécifiés dans le Contrat de Service.
            </p>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              <strong>Notre Propriété Intellectuelle :</strong> Nous conservons tous les droits de propriété sur nos matériaux, outils, logiciels, savoir-faire, stratégies et documentation préexistants utilisés pour fournir les Services (« PI de Mediatopea »). Rien dans cet accord ne doit être interprété comme un transfert de propriété de la PI de Mediatopea au Client.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">5. Confidentialité</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Les deux parties conviennent de traiter toutes les informations non publiques reçues de l'autre partie comme confidentielles. Cela inclut les stratégies commerciales, les listes de clients, les données techniques et les détails des projets. Ces informations ne seront divulguées à aucun tiers sans consentement écrit préalable, sauf si la loi l'exige.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">6. Limitation de Responsabilité</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Dans la mesure maximale permise par la loi, Mediatopea не sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de toute perte de profits ou de revenus, qu'ils soient encourus directement ou indirectement. En aucun cas, notre responsabilité globale pour toutes les réclamations relatives aux Services ne dépassera le montant total que vous nous avez payé pour le Service spécifique en question au cours des trois (3) mois précédant l'acte ayant donné lieu à la responsabilité.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">7. Résiliation</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              L'une ou l'autre des parties peut résilier un Contrat de Service avec un préavis écrit de trente (30) jours. Le Client s'engage à payer pour tout le travail accompli jusqu'à la date de résiliation. Nous nous réservons le droit de suspendre ou de résilier les Services immédiatement si le Client enfreint une condition essentielle de ces Conditions ou du Contrat de Service.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">8. Droit Applicable</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Ces Conditions seront régies et interprétées conformément aux lois du <strong>{yourCountryState}</strong>.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">9. Coordonnées</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Si vous avez des questions sur ces Conditions, veuillez nous contacter à{" "}
              <a href={`mailto:${yourEmail}`}>{yourEmail}</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}