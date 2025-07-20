"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const PieChart3D = () => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // --- START: Updated Palette ---
  // The colors have been replaced with shades from your Ethereal Dream theme.
  const slices = [
    { start: 0, end: 90, color: "#E0E0E0" }, // Light Gray
    { start: 90, end: 180, color: "#B2B2B2" }, // Medium Gray
    { start: 180, end: 270, color: "#757575" }, // Dark Gray
    { start: 270, end: 360, color: "#FFFFFF" }, // White
  ];
  // --- END: Updated Palette ---

  const radius = 15;
  const center = 16;
  const depth = expanded ? 2 : 0; // Controls depth movement

  return (
    <svg width="100" height="100" viewBox="0 0 32 32">
      {/* Base shadow */}
      <circle cx="16" cy="18" r="14" fill="rgba(0,0,0,0.2)" />

      {slices.map((slice, index) => {
        const startAngle = (slice.start * Math.PI) / 180;
        const endAngle = (slice.end * Math.PI) / 180;

        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);

        const isLargeArc = slice.end - slice.start > 180 ? 1 : 0;

        return (
          <motion.path
            key={index}
            initial={{ translateY: expanded ? -depth : 0 }}
            animate={{ translateY: expanded ? 0 : -depth }}
            transition={{ duration: 1 }}
            fill={slice.color}
            d={`M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${isLargeArc},1 ${x2},${y2} Z`}
            style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))" }}
          />
        );
      })}
    </svg>
  );
};

export default PieChart3D;