"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "accent" | "energy" | "highlight" | "none";
};

export function Card({ children, className = "", hover = true, glow = "none" }: CardProps) {
  const glowMap = { accent: "glow-accent", energy: "glow-energy", highlight: "glow-highlight", none: "" };

  return (
    <motion.div
      className={`card-elevated rounded-2xl p-6 transition-all duration-300 ${hover ? "hover:border-accent/30 hover:shadow-md" : ""} ${glowMap[glow]} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
