"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
