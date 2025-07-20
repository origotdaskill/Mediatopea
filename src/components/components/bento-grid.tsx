"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, UserCircle } from "lucide-react";
import { BorderBeam } from "../magicui/border-beam";
import RadarTargetingCard from "./radar-tragetting-card";
import BarGraph3D from "./bar-graph";
import PieChart3D from "./pie-charts";

export default function BentoGrid() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-transparent p-6">
      <div className="max-w-7xl">
        {/* Responsive Grid for Smaller Screens */}
        <div className="bp1:grid hidden grid-rows-2 gap-6 mt-28 bp6:h-[2000px] h-[1200px] bp6:mt-[280px] place-items-center">
          <div className="grid bp6:grid-cols-1 grid-cols-2 gap-6 bp6:h-[1600px] h-[800px] place-items-center">
            {/* Left Card */}
            <Card className="h-[70%] w-[350px] bg-card overflow-hidden relative group">
              <div className="relative h-full bg-card rounded-xl overflow-hidden">
                <BorderBeam duration={6} delay={3} size={700} className="from-transparent via-primary to-transparent" />
                <div className="absolute inset-0 mb-24 flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] rounded-full border border-primary/30 flex items-center justify-center">
                    <motion.div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/40 to-transparent opacity-30" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                    <motion.div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1.5, opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.div className="absolute w-[250px] h-[250px] rounded-full border border-primary/10" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 2, opacity: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.div className="absolute w-[20px] h-[20px] bg-primary rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                    {[
                      { className: "top-4 left-8", delay: 0 },
                      { className: "bottom-10 right-10", delay: 0.5 },
                      { className: "top-10 right-16", delay: 1 },
                      { className: "bottom-16 left-12", delay: 1.5 },
                    ].map((item, index) => (
                      <motion.div key={index} className={`absolute ${item.className}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: item.delay }}>
                        <UserCircle size={28} className="text-primary/90" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <h3 className="text-[16px] text-foreground">Centralisation Instantanée des Leads</h3>
                  <p className="text-muted-foreground text-sm">Fini le chaos. Mubawab, Avito, Instagram, WhatsApp, votre site web - 100% de vos leads sont unifiés dans un seul centre de commande, accessible partout, à tout moment.</p>
                </div>
              </div>
            </Card>
            {/* Right Card */}
            <RadarTargetingCard />
          </div>
          <div className="flex-row bp6:flex-col flex bp6:-mt-[350px] -mt-44 gap-6 h-[70%]">
            {/* Top Center Card */}
            <Card className="flex-1 w-[350px] h-[350px] bg-card border-0 overflow-hidden relative group">
              <CardContent className="h-full p-6 flex relative flex-col gap-4 items-center justify-center">
                <BorderBeam duration={6} delay={3} size={300} className="from-transparent via-primary to-transparent" />
                <div className="flex gap-4">
                  <div className="p-1 relative rounded-xl">
                    <div className="p-3 relative rounded-xl bg-secondary/30">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                        <Cog className="w-24 h-24 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[16px] text-foreground">Rendez Vos Agents Plus Productifs</h3>
                  <p className="text-sm text-muted-foreground">Libérez vos meilleurs agents des tâches répétitives et frustrantes. Ils n'interviennent que lorsque le lead est qualifié et chaud, prêts à organiser une visite ou à conclure l'affaire.</p>
                </div>
              </CardContent>
            </Card>
            {/* Bottom Center Card */}
            <Card className="flex-1 h-[350px] bg-card border-0 overflow-hidden relative group">
              <CardContent className="h-full w-[350px] relative p-6 flex flex-col gap-4 items-center justify-center">
                <BorderBeam duration={6} delay={3} size={300} className="from-transparent via-primary to-transparent" />
                <div className="flex gap-4">
                  <div className="p-1 relative rounded-xl">
                    <div className="p-3 relative rounded-xl bg-secondary/30">
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                        <BarGraph3D />
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-[124px] h-[124px] flex items-center justify-center relative rounded-xl bg-secondary/30">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                      <PieChart3D />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[16px] text-foreground">Reporting et ROI Amélioré</h3>
                  <p className="text-sm text-muted-foreground">Prenez des Décisions Rentables. Pour la première fois, sachez exactement quels canaux marketing vous apportent des rendez-vous concrets, pas seulement des clics. Optimisez votre budget publicitaire pour un retour sur investissement maximal.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Default Grid for Larger Screens */}
        <div className="bp1:hidden grid grid-cols-3 gap-6 h-[950px] place-items-center">
          {/* Left Card */}
          <Card className="h-[70%] w-[350px] bg-card overflow-hidden relative group">
            <div className="relative h-full bg-card rounded-xl overflow-hidden">
              <BorderBeam duration={6} delay={3} size={700} className="from-transparent via-primary to-transparent" />
              <div className="absolute inset-0 mb-24 flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] rounded-full border border-primary/30 flex items-center justify-center">
                  <motion.div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/40 to-transparent opacity-30" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                  <motion.div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1.5, opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.div className="absolute w-[250px] h-[250px] rounded-full border border-primary/10" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 2, opacity: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.div className="absolute w-[20px] h-[20px] bg-primary rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                  {[
                    { className: "top-4 left-8", delay: 0 },
                    { className: "bottom-10 right-10", delay: 0.5 },
                    { className: "top-10 right-16", delay: 1 },
                    { className: "bottom-16 left-12", delay: 1.5 },
                  ].map((item, index) => (
                    <motion.div key={index} className={`absolute ${item.className}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: item.delay }}>
                      <UserCircle size={28} className="text-primary/90" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-background/80 to-transparent">
                <h3 className="text-[16px] text-foreground">Centralisation Instantanée des Leads</h3>
                <p className="text-muted-foreground text-sm">Fini le chaos. Mubawab, Avito, Instagram, WhatsApp, votre site web - 100% de vos leads sont unifiés dans un seul centre de commande, accessible partout, à tout moment.</p>
              </div>
            </div>
          </Card>
          {/* Center Column */}
          <div className="flex flex-col gap-6 h-[70%]">
            <Card className="flex-1 bg-card border-0 overflow-hidden relative group">
              <CardContent className="h-full p-6 flex relative flex-col gap-4 items-center justify-center">
                <BorderBeam duration={6} delay={3} size={300} className="from-transparent via-primary to-transparent" />
                <div className="flex gap-4">
                  <div className="p-1 relative rounded-xl">
                    <div className="p-3 relative rounded-xl bg-secondary/30">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                        <Cog className="w-24 h-24 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[16px] text-foreground">Rendez Vos Agents Plus Productifs</h3>
                  <p className="text-sm text-muted-foreground">Libérez vos meilleurs agents des tâches répétitives et frustrantes. Ils n'interviennent que lorsque le lead est qualifié et chaud, prêts à organiser une visite ou à conclure l'affaire.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-card border-0 overflow-hidden relative group">
              <CardContent className="h-full relative p-6 flex flex-col gap-4 items-center justify-center">
                <BorderBeam duration={6} delay={3} size={300} className="from-transparent via-primary to-transparent" />
                <div className="flex gap-4">
                  <div className="p-1 relative rounded-xl">
                    <div className="p-3 relative rounded-xl bg-secondary/30">
                      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                        <BarGraph3D />
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-[124px] h-[124px] flex items-center justify-center relative rounded-xl bg-secondary/30">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="drop-shadow-[0_0_10px_hsl(var(--accent))] filter">
                      <PieChart3D />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[16px] text-foreground">Reporting et ROI Amélioré</h3>
                  <p className="text-sm text-muted-foreground">Prenez des Décisions Rentables. Pour la première fois, sachez exactement quels canaux marketing vous apportent des rendez-vous concrets, pas seulement des clics. Optimisez votre budget publicitaire pour un retour sur investissement maximal.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Card */}
          <RadarTargetingCard />
        </div>
      </div>
    </div>
  );
}