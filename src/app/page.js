import Background from "./Background";
import Intro from "./Intro";
import { PROFILE, LINKS } from "./config";
import { Instagram, Snapchat, TikTok, Steam, Github, ArrowUpRight } from "./icons";

const ICONS = { instagram: Instagram, snapchat: Snapchat, tiktok: TikTok, steam: Steam, github: Github };

const GLOW = {
  instagram: "radial-gradient(circle, rgba(225,48,108,0.55), transparent 70%)",
  snapchat:  "radial-gradient(circle, rgba(255,252,0,0.45), transparent 70%)",
  tiktok:   "radial-gradient(circle, rgba(254,44,85,0.55), transparent 70%)",
  steam:    "radial-gradient(circle, rgba(23,107,179,0.55), transparent 70%)",
  github:   "radial-gradient(circle, rgba(110,84,148,0.55), transparent 70%)",
};

const ACCENT = {
  instagram: "rgba(225,48,108,0.85)",
  snapchat:  "rgba(255,237,40,0.85)",
  tiktok:   "rgba(254,44,85,0.85)",
  steam:    "rgba(72,150,210,0.85)",
  github:   "rgba(168,148,220,0.85)",
};

// Derive a readable subtitle from a link's URL at build time.
function handleFromHref(key, href) {
  try {
    const url = new URL(href);
    const seg = url.pathname.split("/").filter(Boolean);
    if (key === "instagram" && seg[0]) return "@" + seg[0];
    if (key === "github" && seg[0]) return "@" + seg[0];
    if (key === "tiktok" && seg[0]) return seg[0].startsWith("@") ? seg[0] : "@" + seg[0];
    return url.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function Home() {
  return (
    <main className="aurora relative flex min-h-dvh w-full flex-col overflow-hidden">
      <Intro initials={PROFILE.initials} />
      <Background />

      <section className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 py-20">
        <header className="rise flex flex-col items-center text-center">
          <div className="float relative mb-6">
            <span
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(138,148,255,0.35),transparent_70%)] blur-xl"
            />
            <span aria-hidden="true" className="avatar-ring" />
            <div className="glass relative grid h-24 w-24 place-items-center rounded-full text-2xl font-semibold tracking-[0.08em] text-white">
              {PROFILE.initials}
            </div>
          </div>
          <h1 className="text-shimmer text-[1.7rem] font-semibold leading-tight tracking-tight">{PROFILE.name}</h1>
          <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/45">
            <span aria-hidden="true" className="pulse-dot" />
            {PROFILE.handle}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pretty text-white/65">
            {PROFILE.bio}
          </p>
        </header>

        <nav className="mt-10 flex w-full flex-col gap-3">
          {LINKS.map((link, i) => {
            const Icon = ICONS[link.key];
            const sub = handleFromHref(link.key, link.href);
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.1 * (i + 1) + 0.15}s`, "--accent": ACCENT[link.key] }}
                className="link-card rise group glass relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />

                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: GLOW[link.key] }}
                  />
                  {Icon ? <Icon className="relative h-5 w-5 text-white" /> : null}
                </span>

                <span className="relative flex min-w-0 flex-col">
                  <span className="text-sm font-semibold text-white">{link.name}</span>
                  {sub ? <span className="truncate text-xs text-white/45">{sub}</span> : null}
                </span>

                <ArrowUpRight className="relative ml-auto h-4 w-4 text-white/40 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
              </a>
            );
          })}
        </nav>

        <footer className="rise mt-12 text-center text-xs tracking-wide text-white/30" style={{ animationDelay: "0.85s" }}>
          {PROFILE.name} · {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}
