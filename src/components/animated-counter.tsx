"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

function parseMetric(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([#$+]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  const { prefix, number, suffix } = parseMetric(value);
  const isNumeric = number > 0;

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const duration = 1200;
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * number);
      setDisplay(`${prefix}${currentValue.toLocaleString()}${suffix}`);

      if (current >= steps) {
        clearInterval(interval);
        setDisplay(value);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, isNumeric, number, prefix, suffix, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {isInView ? display : value}
    </motion.span>
  );
}
