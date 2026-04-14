import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  tinted?: boolean;
};

export function Section({
  id,
  label,
  title,
  children,
  className = "",
  tinted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 md:py-32 md:px-8 ${tinted ? "section-tinted" : ""} ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {label && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {label}
              </span>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
