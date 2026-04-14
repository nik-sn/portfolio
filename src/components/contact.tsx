"use client";

import { profile } from "@/data/content";
import { Section } from "./section";
import { Button } from "./button";
import { FadeIn, SlideReveal } from "./fade-in";

export function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's build something great together." tinted>
      {/* Divider — purple to blue */}
      <SlideReveal direction="right" className="-mt-6 mb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-highlight to-accent" />
      </SlideReveal>

      <div className="card-elevated rounded-2xl p-8 md:p-12">
        <FadeIn>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m always up for a conversation about product challenges,
            leadership roles, or how to ship things that actually matter.
            Let&apos;s connect.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`} size="lg">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Me
            </Button>
            <Button href={profile.linkedin} variant="secondary" size="lg">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-muted">
            Based in <span className="text-foreground font-medium">{profile.location}</span>. Open to product leadership roles in mobile, fintech, and consumer tech.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
