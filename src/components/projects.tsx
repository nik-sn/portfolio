"use client";

import { projects } from "@/data/content";
import { Section } from "./section";
import { Badge } from "./badge";
import { ScaleOnScroll, FadeIn } from "./fade-in";
import { motion } from "framer-motion";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <ScaleOnScroll>
      <motion.article
        className="card-elevated group relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-md"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top accent bar — alternating blue/purple */}
        <div
          className={`h-1 w-full ${index % 2 === 0 ? "bg-gradient-to-r from-accent to-accent/30" : "bg-gradient-to-r from-highlight to-highlight/30"}`}
          aria-hidden="true"
        />

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            {/* Company in blue (product/trust) */}
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
              {project.company}
            </span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
              {project.year}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-foreground md:text-2xl">
            {project.title}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-surface p-4">
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">Challenge</p>
              <p className="text-sm text-muted">{project.problem}</p>
            </div>
            <div className="rounded-xl bg-surface p-4">
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted">What I Did</p>
              <p className="text-sm text-muted">{project.solution}</p>
            </div>
            {/* Result in GREEN (metrics, growth) */}
            <div className="rounded-xl bg-energy-light p-4">
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-energy">Result</p>
              <p className="text-sm font-semibold text-energy">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant={index % 2 === 0 ? "accent" : "highlight"}>{t}</Badge>
            ))}
          </div>
        </div>
      </motion.article>
    </ScaleOnScroll>
  );
}

export function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projects" label="Work" title="Products I've shipped.">
        <p className="text-muted">Projects coming soon.</p>
      </Section>
    );
  }

  return (
    <Section id="projects" label="Work" title="Products I've shipped and the outcomes they drove.">
      <div className="space-y-8">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={0.05 * i}>
            <ProjectCard project={project} index={i} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
