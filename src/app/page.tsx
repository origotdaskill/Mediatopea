/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion } from "framer-motion";

import Header from "@/components/components/header";
import Footer from "@/components/components/footer";
import Globe from "@/components/components/globe";
import GlobeOptimizer from "@/components/components/globe-optimizer";

import {
  Gauge,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Phone,
  SquareDashedMousePointer,
  TrendingUpIcon,
  WandSparkles,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/components/FramerButton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useState } from "react";
import LogoMarquee from "@/components/components/marquee";
import GlowingAdSenseCard from "@/components/components/Social";
import BentoGrid from "@/components/components/bento-grid";
import Grid from "@/components/components/grid";
import Grid2 from "@/components/components/grid2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);


  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative min-h-screen w-full h-full flex flex-col items-center overflow-hidden">
         <Header />

      <main className="relative pt-32 pb-16   container mx-auto px-4 z-10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
          <GlobeOptimizer>
            <Globe />
          </GlobeOptimizer>
        </div>
        
        {/* ✅ I've removed the wrapping motion.div so its children can render without a container delay */}
        <div className="text-center space-y-6 flex flex-col gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            // ✅ Reduced delay for a faster appearance
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-block"
          >
            <span className="relative px-4 py-2 rounded-xl flex flex-row gap-2 items-center bg-white/10 text-sm text-white/90 backdrop-blur-sm border border-white/10 overflow-hidden">
              <motion.div
                className="absolute top-0 w-[10px] h-full bg-black-300 opacity-60 blur-md shadow-2xl"
                initial={{ left: "-10%" }}
                animate={{ left: "110%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />

              <WandSparkles className="w-4 h-4 relative z-10" />
              <p className="relative z-10">Ne Perdez Plus Jamais un Lead</p>
            </span>
          </motion.div>

          {/* ✅ CRITICAL FIX for LCP: 
            Changed <motion.h1> to a regular <h1> and removed all animation props.
            This ensures the largest content on the page is visible immediately.
          */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-[#B0B0B0] text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] break-words">
            <motion.span
              className="font-light relative flex flex-wrap justify-center"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {"MEDIATOPEA".split("").map((char, index) => (
                <motion.span
                  translate="no"
                  key={index}
                  animate={
                    isHovered
                      ? {
                          textShadow: "0px 0px 20px rgba(125, 125, 125, 1)",
                          color: "#B0B0B0",
                        }
                      : {
                          textShadow: "0px 0px 0px rgba(125, 125, 125, 0)",
                          color: "#FFFFFF",
                        }
                  }
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // ✅ Significantly reduced the delay from 0.6s to 0.2s
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-[15px] text-white z-30 "
          >
            Notre système intelligent qualifie automatiquement vos leads de
            Mubawab, Avito et Instagram 24/7. Vos agents se concentrent sur ce
            qui compte vraiment : les signatures.
          </motion.p>
          <Link
            href="https://book.mediatopea.com/mediatopea/estimation"
            passHref
            legacyBehavior
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // ✅ Significantly reduced the delay from 0.8s to 0.3s
              transition={{ delay: 0.3 }}
              className="space-y-4 flex flex-col items-center justify-center"
            >
              <motion.button
                className="group relative flex border-[2px] border-[#7D7D7D] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(121,121,121)] to-[#414040] px-5 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]"
                onMouseMove={handleMouseMove}
                onHoverStart={() => setIsHovered2(true)}
                onHoverEnd={() => setIsHovered2(false)}
              >
                <Link href="https://book.mediatopea.com/mediatopea/estimation" passHref legacyBehavior>
                  <span className="relative z-10">Obtenez Votre Estimation Gratuite</span>
                </Link>

                {isHovered2 && (
                  <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                      background: [
                        `radial-gradient(40px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)`,
                      ],
                    }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.button>

              <p className="text-sm text-white/50 z-30 ">
                Découvrez en 15 minutes comment notre système peut doubler la
                productivité de vos agents.
              </p>
            </motion.div>
          </Link>
        </div>
      </main>

  

      <div className="w-full mt-8">
        <LogoMarquee />
      </div>
      <div className="min-h-screen w-full h-full flex flex-col z-0 items-center relative bg-gradient-to-b from-[#000000] to-[#000000]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px] bg-grid-black/[0.9] dark:bg-grid-white/[0.05] bg-[length:50px_50px]"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
            }}
          />
          {/**      <div className="flex flex-col justify-center mt-14 items-center w-full">
            <p className="text-[16px] text-gray-200">Adtask AI works with: </p>
            <GlowingAdSenseCard />
          </div> */}
        </div>

        <div className="flex mt-8 flex-col bg-transparent justify-center items-center w-full relative">
          {/* Gradient Circle Background */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#4D4D4D] to-transparent opacity-40 blur-3xl"></div>

          {/* Button */}
          <div className="flex justify-center text-center bp1:mt-32 bp4:mt-44 mt-0 z-10">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Avantages</span>
            </HoverBorderGradient>
          </div>

          {/* Text & Gradient Borders */}
          <div className="w-[70%] flex flex-col mt-8 items-center justify-center relative z-10">
            <div className="absolute inset-x-0 top-[-50px] z-0 flex justify-center">
              {/* Outer Soft Glow - Larger Ellipse */}
              <div
                className="absolute w-[400px] h-[200px] bg-[#7D7D7D]/40 opacity-80 blur-[80px]"
                style={{ borderRadius: "50%" }}
              />

              {/* Inner Glow - Smaller & Brighter Ellipse */}
              <div
                className="absolute w-[300px] h-[150px] bg-[#7D7D7D]/50 opacity-80 blur-[100px]"
                style={{ borderRadius: "50%" }}
              />
            </div>
            {/* First Line */}
            <p className="text-5xl bp3:text-xl bp4:text-3xl text-center font-light">
              Les Résultats pour Votre Agence
            </p>

            {/* Borders (Shifted Further Left & Right) */}
            <div className="relative flex items-center w-full justify-center mt-1">
              <div className="absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#B0B0B0]"></div>
              <div className="absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#B0B0B0]"></div>
            </div>

            {/* Second Line */}
            <p className="text-5xl  bp4:text-3xl bp3:text-xl text-center mt-2 bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D] bg-clip-text text-transparent font-light leading-tight">
              Une Vente Sereine et Profitable
            </p>
          </div>

          <BentoGrid />
        </div>
        <div className="flex bp6:-mt-48 -mt-24 flex-col bg-transparent bg-gradient-to-b to-[#000000] from-[#000000] justify-center items-center w-full relative">
          {/* Gradient Circle Background */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#4D4D4D] to-transparent opacity-40 blur-3xl"></div>

          {/* Button */}
          <div className="flex justify-center text-center z-10">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Services</span>
            </HoverBorderGradient>
          </div>

          {/* Text & Gradient Borders */}
          <div className="w-[70%] flex flex-col mt-8 items-center justify-center relative z-10">
            {/* First Line */}
            <p className=" text-5xl bp3:text-xl bp4:text-3xl text-center font-light">
              Intégration Facile
            </p>

            {/* Borders (Shifted Further Left & Right) */}
            <div className="relative flex items-center w-full justify-center mt-1">
              <div className="absolute -left-40 h-[1px] w-[40%] bg-gradient-to-l to-black from-[#B0B0B0]"></div>
              <div className="absolute -right-40 h-[1px] w-[40%] bg-gradient-to-r to-black from-[#B0B0B0]"></div>
            </div>

            {/* Second Line */}
            <p className="text-5xl bp3:text-xl bp4:text-3xl text-center mt-2 bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D] bg-clip-text text-transparent font-light leading-tight">
              en 3 Étapes
            </p>
          </div>

          <div className="grid grid-cols-3 bp1:grid-cols-2 bp6:grid-cols-1 mt-14 gap-0 mb-10">
            <Grid
              title={"Consultation & Évaluation"}
              text={
                "Durant un appel de bienvenue, nous connectons de manière simple et sécurisée vos plateformes (Facebook, Instagram, email de notifications Mubawab/Avito)."
              }
            >
              <MousePointerClick className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Personnalisation du Bot IA"}
              text={
                "Nous configurons ensemble le message d'accueil et les questions de qualification du chatbot WhatsApp pour qu'il représente parfaitement votre agence."
              }
            >
              <Gauge className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Lancement et Formation"}
              text={
                "Nous activons le système et formons vos équipes en 30 minutes. Vous commencez à recevoir des leads qualifiés le jour même."
              }
            >
              <TrendingUpIcon className="w-20 h-20" />
            </Grid>


          </div>

        </div>


        <div className="flex w-full pt-32 flex-col bg-gradient-to-b from-[#000000] to-[#000000] bg-transparent justify-center items-center relative">
          <div className="absolute inset-x-0 top-[-120px] z-0 flex justify-center">
            {/* Larger Soft Ambient Glow */}
            <div
              className="w-0 h-0
                border-l-[300px] border-l-transparent
                border-r-[300px] border-r-transparent
                border-b-[600px] border-b-[#7D7D7D]/40
                blur-[100px]
                opacity-50"
            />

            {/* Inner Glow for More Softness */}
            <div
              className="absolute top-[80px]
                w-0 h-0
                border-l-[300px] border-l-transparent
                border-r-[300px] border-r-transparent
                border-b-[600px] border-b-[#7D7D7D]/50
                blur-[120px]
                opacity-80"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            <motion.span
              className="text-[#B0B0B0] bp6:text-5xl  text-8xl font-light relative flex space-x-1"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {"Mediatopea".split("").map((char, index) => (
                <motion.span
                  translate="no"
                  key={index}
                  className={`inline-block ${
                    char === "M" ||
                    char === "E" ||
                    char === "D" ||
                    (char === "I" && index === 3) ||
                    char === "T" ||
                    char === "O" ||
                    char === "P" ||
                    char === "E" ||
                    char === "A"
                      ? "font-semibold"
                      : ""
                  }`}
                  animate={
                    isHovered
                      ? {
                          textShadow: "0px 0px 20px rgba(125, 125, 125, 1)", // Glow effect
                          color: "#B0B0B0", // Color change on hover
                        }
                      : {
                          textShadow: "0px 0px 0px rgba(125, 125, 125, 0)",
                          color: "#FFFFFF", // Default color when not hovered
                        }
                  }
                  whileHover={{ y: -5 }} // Moves letter slightly up when hovered
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <div className="w-[70%] flex flex-col mt-16 items-center justify-center relative z-10">
            {/* First Line */}
            <p className="text-5xl text-center bp6:text-3xl">
              Prêt à obtenir le meilleur
            </p>

            {/* Second Line */}
            <p className="text-5xl text-center bp6:text-3xl mt-2 bg-gradient-to-b from-[#B0B0B0] to-[#7D7D7D] bg-clip-text text-transparent leading-tight">
              ROI ?
            </p>
          </div>

          <div className="flex mt-14 flex-col gap-8 items-center w-full justify-center">
            <Link
              href="https://book.mediatopea.com/mediatopea/demo"
              passHref
              legacyBehavior
            >

              <motion.button
                className="group relative border-[2px] font-light border-[#7D7D7D] overflow-hidden rounded-full bg-gradient-to-b   from-[rgb(121,121,121)] to-[#414040]  h-[43px] w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]"
                onMouseMove={handleMouseMove}
                onHoverStart={() => setIsHovered3(true)}
                onHoverEnd={() => setIsHovered3(false)}
              >
                <span className="relative z-10">Demander une Démo</span>
                {isHovered3 && (
                  <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                      background: [
                        `radial-gradient(40px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)`,
                      ],
                    }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.button>
            </Link>
          </div>
          <Footer />
        </div>

        <div className="w-full flex justify-center text-gray-400 text-sm font-light mb-3 items-center">
          <p>All right reserved &copy; 2025 MediaTopea</p>
        </div>
      </div>
    </div>
  );
}
