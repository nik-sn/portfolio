"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "energy" | "highlight";
  children: React.ReactNode;
  download?: boolean;
  size?: "default" | "lg";
};

export function Button({
  href,
  variant = "primary",
  children,
  download,
  size = "default",
}: ButtonProps) {
  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = {
    primary:
      "bg-accent text-white font-semibold shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:bg-accent-hover",
    secondary:
      "border border-border text-foreground hover:border-accent/40 hover:text-accent bg-white",
    energy:
      "bg-energy text-white font-semibold shadow-md shadow-energy/20 hover:shadow-lg hover:shadow-energy/30",
    highlight:
      "bg-highlight text-white font-semibold shadow-md shadow-highlight/20 hover:shadow-lg hover:shadow-highlight/30",
  };

  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${sizeStyles[size]} ${styles[variant]}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      {...(download ? { download: true } : {})}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}
