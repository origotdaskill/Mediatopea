"use client";

import Header from "@/components/components/header";
import Footer from "@/components/components/footer";


import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  const yourEmail = "hello@mediatopea.com";
  const yourWebsiteUrl = "https://www.mediatopea.com";



  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#000000] text-gray-300">
      <Header />
      <main className="container mx-auto px-4 z-10 pt-32 pb-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-[#ffffff] bp3:text-4xl text-7xl font-light mb-3 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D]">
            Politique de Confidentialité
          </h1>
          <p className="font-light text-[#ffffff] text-sm mb-3 text-center text-sm text-gray-400">
            Dernière mise à jour : 16 juillet 2025
          </p>

          <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-h2:text-white prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2 prose-strong:text-gray-200 prose-a:text-[#B0B0B0] hover:prose-a:text-white">
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Mediatopea (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web <a href={yourWebsiteUrl}>{yourWebsiteUrl}</a> et utilisez nos services (les « Services »).
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">1. Informations que nous collectons</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous pouvons collecter des informations vous concernant de diverses manières. Les informations que nous pouvons collecter incluent :
            </p>
            <ul className="font-light text-[#ffffff] text-sm mb-3">
              <li className="font-light text-[#ffffff] text-sm mb-3">
                <strong>Données Personnelles :</strong> Informations personnellement identifiables, telles que votre nom, votre adresse e-mail, votre numéro de téléphone et le nom de votre entreprise, que vous nous fournissez volontairement lorsque vous nous contactez, remplissez un formulaire ou utilisez nos Services.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                <strong>Données Dérivées :</strong> Informations que nos serveurs collectent automatiquement lorsque vous accédez à notre site web, telles que votre adresse IP, votre type de navigateur, votre système d'exploitation et les pages que vous avez consultées.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                <strong>Données Financières :</strong> Nous ne collectons ni ne stockons aucune information financière. Tous les paiements sont traités par notre processeur de paiement tiers, Paddle. Nous vous encourageons à consulter leur politique de confidentialité.
              </li>
            </ul>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">2. Comment nous utilisons vos informations</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">Nous utilisons les informations que nous collectons pour :</p>
            <ul className="font-light text-[#ffffff] text-sm mb-3">
              <li className="font-light text-[#ffffff] text-sm mb-3">Fournir, exploiter et maintenir nos Services.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">
                Communiquer avec vous, y compris pour répondre à vos demandes et vous envoyer des factures.
              </li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Améliorer notre site web et nos offres de services.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Comprendre et analyser comment vous utilisez nos Services.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Prévenir les transactions frauduleuses et garantir la sécurité.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Nous conformer aux obligations légales.</li>
            </ul>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">3. Divulgation de vos informations</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des tiers qui fournissent des services pour nous ou en notre nom, y compris le traitement des paiements (Paddle), l'analyse de données et la livraison d'e-mails. Nous ne partagerons que les informations minimales nécessaires à l'accomplissement de leur fonction désignée.
            </p>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous pouvons également divulguer vos informations si la loi l'exige ou si nous croyons de bonne foi qu'une telle action est nécessaire pour se conformer à une obligation légale.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">4. Sécurité des données</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez être conscient qu'aucune mesure de sécurité n'est parfaite ou impénétrable.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">5. Vos droits sur les données</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">Vous avez le droit de :</p>
            <ul className="font-light text-[#ffffff] text-sm mb-3">
              <li className="font-light text-[#ffffff] text-sm mb-3">Demander l'accès aux données personnelles que nous détenons à votre sujet.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Demander la correction de toute donnée personnelle inexacte.</li>
              <li className="font-light text-[#ffffff] text-sm mb-3">Demander la suppression de vos données personnelles.</li>
            </ul>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail ci-dessous.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">6. Cookies</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Nous pouvons utiliser des cookies et des technologies de suivi similaires pour suivre l'activité sur notre Service et conserver certaines informations. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé.
            </p>

            <h2 className="text-[#ffffff] bp3:text-xl text-4xl font-light flex items-center mb-3">7. Coordonnées</h2>
            <p className="font-light text-[#ffffff] text-sm mb-3">
              Si vous avez des questions ou des commentaires sur cette Politique de Confidentialité, veuillez nous contacter à :{" "}
              <a href={`mailto:${yourEmail}`}>{yourEmail}</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}