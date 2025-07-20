import React from "react";
import { UserCircle } from "lucide-react";
import { Lightning } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { BorderBeam } from "../magicui/border-beam";

const RadarTargetingCard = () => {
  const startPositions = [
    { x: 140 * Math.cos(Math.PI / 4), y: 140 * Math.sin(Math.PI / 4) },
    { x: 140 * Math.cos((3 * Math.PI) / 4), y: 140 * Math.sin((3 * Math.PI) / 4) },
    { x: 140 * Math.cos((5 * Math.PI) / 4), y: 140 * Math.sin((5 * Math.PI) / 4) },
    { x: 140 * Math.cos((7 * Math.PI) / 4), y: 140 * Math.sin((7 * Math.PI) / 4) },
  ];

  return (
    <Card className="relative h-[70%] w-[350px] overflow-hidden rounded-xl bg-card group bp6:-mt-[450px]">
      <div className="relative h-full overflow-hidden rounded-xl bg-card">
        <BorderBeam duration={6} delay={3} size={700} className="from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
          {/* Radar Circles */}
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-primary/30">
            <div className="absolute h-[180px] w-[180px] rounded-full border border-primary/40" />
            <div className="absolute h-[80px] w-[80px] rounded-full border border-primary/50" />

            {/* Animated User Icons */}
            {startPositions.map((pos, index) => (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  x: [pos.x, 0, pos.x],
                  y: [pos.y, 0, pos.y],
                  opacity: [1, 0.5, 1],
                  scale: [1, 0.6, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  delay: index * 0.75,
                }}
              >
                <UserCircle size={28} className="text-primary/90" />
              </motion.div>
            ))}

            {/* Central Lightning Icon */}
            <motion.div
              className="absolute text-accent"
              initial={{
                scale: 0.8,
                opacity: 0.8,
                filter: "drop-shadow(0px 0px 10px hsl(var(--accent)))",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "drop-shadow(0px 0px 20px hsl(var(--accent)))",
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Lightning size={100} className="fill-accent" />
            </motion.div>
          </div>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-background/80 to-transparent p-6">
          <h3 className="text-[16px] text-foreground">
            Qualification Automatique 24/7
          </h3>
          <p className="text-sm text-muted-foreground">
            Notre IA contacte et qualifie chaque nouveau prospect via WhatsApp, en posant les bonnes questions (budget, projet, etc.).
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RadarTargetingCard;