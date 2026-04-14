"use client";

import { profile, highlights } from "@/data/content";
import { Section } from "./section";
import { Card } from "./card";
import { FadeIn, StaggerContainer, StaggerItem, SlideReveal } from "./fade-in";
import { AnimatedCounter } from "./animated-counter";

const icons: Record<string, React.ReactNode> = {
  download: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  ),
  trophy: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  sparkle: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
};

export function About() {
  return (
    <Section id="about" label="About" title="Product leader who ships." tinted>
      <div className="grid gap-12 md:grid-cols-5">
        {/* Left — text */}
        <div className="md:col-span-3">
          <FadeIn>
            <p className="text-xl font-medium leading-relaxed text-foreground">
              {profile.about.intro}
            </p>
          </FadeIn>

          <div className="mt-6 space-y-4">
            {profile.about.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.15 * (i + 1)}>
                <p className="text-base leading-relaxed text-muted">{p}</p>
              </FadeIn>
            ))}
          </div>

          {/* Personality tags — purple hover */}
          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Product Obsessed", "Gym Rat", "Data-Driven", "Team Builder", "Dog Lover"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted transition-colors hover:border-highlight/40 hover:text-highlight"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — metrics in GREEN (achievements/growth) */}
        <div className="md:col-span-2">
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.12}>
            {highlights.map((h) => (
              <StaggerItem key={h.label}>
                <Card className="border-gradient text-center" hover={false}>
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-energy-light text-energy">
                    {icons[h.icon]}
                  </div>
                  <AnimatedCounter
                    value={h.metric}
                    className="block text-2xl font-black text-energy"
                  />
                  <p className="mt-1 text-xs font-semibold text-foreground">{h.label}</p>
                  <p className="mt-0.5 text-[10px] text-muted">{h.detail}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Divider — blue to purple gradient */}
      <SlideReveal className="mt-16">
        <div className="h-px w-full bg-gradient-to-r from-accent via-highlight to-transparent" />
      </SlideReveal>
    </Section>
  );
}
