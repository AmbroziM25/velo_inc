# velo_inc

A single-page **link-in-bio** site — a dark glassmorphism design with a monogram intro animation, a glassy-black "lava lamp" background, and animated brand-colored link cards. Built as a fully static site and served from GitHub Pages at **[vel0.llc](https://vel0.llc)**.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router + Turbopack), output as a static export
- **[React 19](https://react.dev)** with the React Compiler enabled
- **[Tailwind CSS v4](https://tailwindcss.com)** (`@import "tailwindcss"`, `@theme inline`)
- No backend — the build emits plain HTML/CSS/JS into `out/`

## Project structure

```
src/app/
  page.js        # Home page: header, animated link cards, footer
  Intro.js       # Client component: one-time monogram intro overlay (skippable)
  Background.js  # Lava-lamp backdrop (floating glossy blobs)
  icons.js       # Inline SVG brand icons (Instagram, Snapchat, TikTok, Steam, GitHub)
  config.js      # >>> EDIT THIS <<< profile, links, and site URL
  globals.css    # Theme tokens, glass styles, all keyframe animations
  sitemap.js     # Static sitemap (force-static for export)
  robots.js      # Static robots.txt (force-static for export)
public/
  CNAME          # Custom domain for GitHub Pages (vel0.llc)
next.config.mjs  # output: "export", images unoptimized, reactCompiler
```

## Customizing the page

Everything you'd normally change lives in **`src/app/config.js`**:

```js
export const PROFILE = {
  name: "Velo",
  initials: "VL",          // shown in the intro animation
  bio: "all my links in one place — tap in.",
  // handle: "@velo",      // optional — adds a line with a live pulse dot
};

export const LINKS = [
  { key: "instagram", name: "Instagram", href: "https://instagram.com/..." },
  // key must match an icon in icons.js and a color in page.js (GLOW / ACCENT)
];

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
```

Link card subtitles are derived automatically from each URL (e.g. `@username` for Instagram/TikTok/GitHub). To add a new platform: add an icon to `icons.js`, then add its `key` to the `ICONS`, `GLOW`, and `ACCENT` maps in `page.js`.

Motion respects `prefers-reduced-motion` — all looping animations stop and the intro is skipped for users who request reduced motion.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
NEXT_PUBLIC_SITE_URL=https://vel0.llc npm run build
```

`NEXT_PUBLIC_SITE_URL` is inlined at build time into the canonical/OG tags and the sitemap. The static site is written to `out/`.

## Deployment (GitHub Pages, no Actions)

This repo is published from a prebuilt **`gh-pages`** branch using GitHub's legacy Pages builder ("Deploy from a branch"), so it needs no GitHub Actions minutes.

Rebuild and refresh the deploy branch in one go:

```bash
NEXT_PUBLIC_SITE_URL=https://vel0.llc npm run build && touch out/.nojekyll
git worktree add --detach /tmp/ghp HEAD && cd /tmp/ghp && git checkout gh-pages \
  && git rm -rf . >/dev/null 2>&1; cp -a "$OLDPWD/out/." . && git add -A \
  && git commit -m "deploy: update site" && cd "$OLDPWD" && git worktree remove /tmp/ghp
git push origin gh-pages
```

> `.nojekyll` is required so GitHub Pages serves the `_next/` folder (Jekyll ignores underscore-prefixed paths). `public/CNAME` carries the custom domain into `out/CNAME`.

**One-time GitHub setup:** repo **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `(root)`**.

### DNS (apex domain on Namecheap)

Point the apex `@` at GitHub Pages with four A records and remove any URL-redirect/parking record:

```
@    A      185.199.108.153
@    A      185.199.109.153
@    A      185.199.110.153
@    A      185.199.111.153
www  CNAME  ambrozim25.github.io.
```

Once DNS resolves to those IPs, GitHub issues a TLS certificate — then enable **Enforce HTTPS** in Settings → Pages.

## License

Released under the [MIT License](LICENSE).
