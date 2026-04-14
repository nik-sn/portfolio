"use client";

import { skillGroups } from "@/data/content";
import { Section } from "./section";
import { Badge } from "./badge";
import { StaggerContainer, StaggerItem } from "./fade-in";
import { motion } from "framer-motion";

const categoryStyles: { bg: string; text: string; badge: "accent" | "highlight" | "energy" }[] = [
  { bg: "bg-accent-light", text: "text-accent", badge: "accent" },
  { bg: "bg-highlight-light", text: "text-highlight", badge: "highlight" },
  { bg: "bg-energy-light", text: "text-energy", badge: "energy" },
  { bg: "bg-accent-light", text: "text-accent", badge: "accent" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  compass: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  layers: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  zap: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  users: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

export function Skills() {
  return (
    <Section id="skills" label="Expertise" title="What I bring to every product team." tinted>
      <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
        {skillGroups.map((group, i) => {
          const style = categoryStyles[i % categoryStyles.length];
          return (
            <StaggerItem key={group.category}>
              <motion.div
                className="card-elevated border-gradient group rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg} ${style.text}`}>
                    {categoryIcons[group.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant={style.badge}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
