type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "energy" | "highlight";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-surface text-muted border border-border",
    accent: "bg-accent-light text-accent border border-accent/20",
    energy: "bg-energy-light text-energy border border-energy/20",
    highlight: "bg-highlight-light text-highlight border border-highlight/20",
  };

  return (
    <span className={`inline-block rounded-lg px-3 py-1 text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
