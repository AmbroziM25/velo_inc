import Background from "./Background";
import Intro from "./Intro";
import { PROFILE, LINKS } from "./config";
import { Instagram, Snapchat, TikTok, X, ArrowUpRight } from "./icons";

const ICONS = { instagram: Instagram, snapchat: Snapchat, tiktok: TikTok, x: X };

const GLOW = {
  instagram: "radial-gradient(circle, rgba(225,48,108,0.55), transparent 70%)",
  snapchat: "radial-gradient(circle, rgba(255,252,0,0.45), transparent 70%)",
  tiktok: "radial-gradient(circle, rgba(254,44,85,0.55), transparent 70%)",
  x: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)",
};

export default function Home() {
  return (
    <main className="aurora relative flex min-h-dvh w-full flex-col overflow-hidden">
      <Intro initials={PROFILE.initials} />
      <Background />

      <section className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 py-16">
        <header className="rise flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-white/30 via-white/5 to-white/30 blur-sm" />
            <div className="glass relative grid h-24 w-24 place-items-center rounded-full text-2xl font-semibold tracking-wide text-white">
              {PROFILE.initials}
            </div>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">{PROFILE.name}</h1>
          <p className="mt-1 text-sm text-white/50">{PROFILE.handle}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-pretty text-white/70">
            {PROFILE.bio}
          </p>
        </header>

        <nav className="mt-9 flex w-full flex-col gap-3">
          {LINKS.map((link, i) => {
            const Icon = ICONS[link.key];
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.12 * (i + 1) + 0.1}s` }}
                className="rise group glass relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />

                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: GLOW[link.key] }}
                  />
                  {Icon ? <Icon className="relative h-5 w-5 text-white" /> : null}
                </span>

                <span className="relative flex min-w-0 flex-col">
                  <span className="text-sm font-semibold text-white">{link.name}</span>
                  <span className="truncate text-xs text-white/50">{link.handle}</span>
                </span>

                <ArrowUpRight className="relative ml-auto h-4 w-4 text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
              </a>
            );
          })}
        </nav>

        <footer className="rise mt-10 text-center text-xs text-white/30" style={{ animationDelay: "0.8s" }}>
          {PROFILE.name} · {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}
