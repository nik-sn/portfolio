"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/content";
import { Button } from "./button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-8"
    >
      {/* Canvas gradient — warm off-white to soft blue tint (PM dashboard feel) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37, 99, 235, 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Blue orb — top right */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-[600px] w-[600px] rounded-full opacity-[0.12] blur-[120px]"
        style={{
          background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
          y: bgY,
        }}
        aria-hidden="true"
      />
      {/* Purple orb — mid left */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          y: bgY,
        }}
        aria-hidden="true"
      />
      {/* Green orb — bottom */}
      <motion.div
        className="pointer-events-none absolute bottom-10 right-1/4 h-[250px] w-[250px] rounded-full opacity-[0.06] blur-[80px]"
        style={{
          background: "radial-gradient(circle, #16A34A 0%, transparent 70%)",
          y: bgY,
        }}
        aria-hidden="true"
      />

      {/* Dot grid — planning surface / PM canvas */}
      <div
        className="pointer-events-none absolute inset-0 dot-grid"
        aria-hidden="true"
      />

      <motion.div className="relative mx-auto max-w-5xl" style={{ opacity: textOpacity, y: textY }}>
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-energy/20 bg-energy-light px-4 py-1.5 text-xs font-semibold text-energy">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-energy opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-energy" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-8 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-foreground">{profile.name.split(" ")[0]}</span>
          <br />
          <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Title — blue for product, green for energy, purple for personality */}
        <motion.p
          className="mt-4 text-xl font-medium text-muted md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-accent">{profile.title}</span>
          {" "}
          <span className="text-border">&bull;</span>
          {" "}
          <span className="text-energy">Builder</span>
          {" "}
          <span className="text-border">&bull;</span>
          {" "}
          <span className="text-highlight">Athlete</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button href="#projects" size="lg">
            See My Work
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button href="#contact" variant="energy" size="lg">
            Let&apos;s Talk
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
