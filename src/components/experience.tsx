"use client";

import { experience } from "@/data/content";
import { Section } from "./section";
import { FadeIn } from "./fade-in";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Journey"
      title="15+ years across product, ops, and leadership."
    >
      <div className="relative">
        {/* Timeline spine */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, rgba(37,99,235,0.6), rgba(124,58,237,0.4), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const isCurrent = i === 0;

            return (
              <FadeIn
                key={`${exp.company}-${exp.period}`}
                delay={0.08 * i}
                direction={isLeft ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* DOT */}
                  <motion.div
                    className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2"
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div
                      className={`relative flex h-3 w-3 items-center justify-center rounded-full ${
                        isCurrent ? "bg-energy" : "bg-accent"
                      }`}
                    >
                      {/* Glow ring */}
                      <span
                        className={`absolute h-7 w-7 rounded-full blur-md ${
                          isCurrent ? "bg-energy/30" : "bg-accent/20"
                        }`}
                      />

                      {/* Ping for current */}
                      {isCurrent && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-energy opacity-40" />
                      )}
                    </div>
                  </motion.div>

                  {/* CONTENT WRAPPER */}
                  <div
                    className={`ml-14 flex-1 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      className="group relative px-3 py-4"
                      whileHover={{ x: isLeft ? -6 : 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                    >
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-energy/10 via-transparent to-transparent" />

                      {/* Accent connector */}
                      <div
                        className={`absolute top-5 h-[2px] w-8 ${
                          isCurrent ? "bg-energy" : "bg-accent"
                        } ${isLeft ? "right-0" : "left-0"}`}
                      />

                      {/* PERIOD */}
                      <span
                        className={`text-[11px] font-bold tracking-[0.25em] uppercase ${
                          isCurrent ? "text-energy" : "text-accent"
                        }`}
                      >
                        {exp.period}
                      </span>

                      {/* ROLE */}
                      <h3 className="mt-2 text-base font-semibold text-foreground transition-all duration-300 group-hover:tracking-wide">
                        {exp.role}
                      </h3>

                      {/* COMPANY */}
                      <p className="text-sm font-medium text-muted opacity-80">
                        {exp.company}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-2 text-sm text-muted leading-relaxed opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                        {exp.description}
                      </p>

                      {/* subtle divider (optional polish) */}
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-40" />
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}