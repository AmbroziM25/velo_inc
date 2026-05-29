// Edit this file to make the page yours: change your name, handle, and links.
export const PROFILE = {
  name: "Your Name",
  handle: "@yourhandle",
  initials: "YN",
  bio: "all my links in one place — tap in.",
};

export const LINKS = [
  {
    key: "instagram",
    name: "Instagram",
    handle: "@yourhandle",
    href: "https://instagram.com/yourhandle",
  },
  {
    key: "snapchat",
    name: "Snapchat",
    handle: "@yourhandle",
    href: "https://snapchat.com/add/yourhandle",
  },
  {
    key: "tiktok",
    name: "TikTok",
    handle: "@yourhandle",
    href: "https://tiktok.com/@yourhandle",
  },
  {
    key: "x",
    name: "X",
    handle: "@yourhandle",
    href: "https://x.com/yourhandle",
  },
];

// Public origin the site is served from. Set at build time via
// NEXT_PUBLIC_SITE_URL (docker compose passes it from .env); falls back to
// localhost for plain `npm run dev`.
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
