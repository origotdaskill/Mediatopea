"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // --- START: Updated Gradients ---
  // Using CSS variables to pull from your theme in globals.css
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 60% at 50% 0%, hsl(var(--primary)) 0%, rgba(224, 224, 224, 0) 100%)",
    LEFT: "radial-gradient(25% 50% at 0% 50%, hsl(var(--primary)) 0%, rgba(224, 224, 224, 0) 100%)",
    BOTTOM: "radial-gradient(30% 60% at 50% 100%, hsl(var(--primary)) 0%, rgba(224, 224, 224, 0) 100%)",
    RIGHT: "radial-gradient(25% 50% at 100% 50%, hsl(var(--primary)) 0%, rgba(224, 224, 224, 0) 100%)",
  };

  const highlight = "radial-gradient(90% 200% at 50% 50%, hsl(var(--primary)) 0%, rgba(224, 224, 224, 0) 100%)";
  // --- END: Updated Gradients ---


  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        // --- START: Updated Classes ---
        "relative flex rounded-full border border-border content-center bg-secondary/50 hover:bg-secondary/20 transition-colors duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        // --- END: Updated Classes ---
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          // --- START: Updated Classes ---
          "w-auto text-primary-foreground z-10 bg-secondary px-4 py-2 rounded-[inherit]",
          // --- END: Updated Classes ---
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      {/* This div creates the button's background color, it should match the page background */}
      <div className="bg-background absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}