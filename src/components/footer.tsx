import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-tinted px-6 py-10 pb-24 lg:pb-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-sm font-bold text-foreground">{profile.name}</p>
            <p className="text-xs text-muted">
              {profile.title} &middot; {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={profile.linkedin}
              className="text-sm text-muted transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
        
        {/* Credits */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted">
            Crafted with care by{" "}
            <span className="font-medium text-foreground">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://gurungboi.github.io/"
                className="text-blue-500 transition-colors hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Gurungboi portfolio (opens in a new tab)"
              >
                Gurungboi
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
