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
    
    href: "https://www.instagram.com/yngstr_mrk/",
  },
  {
    key: "snapchat",
    name: "Snapchat",
   
    href: "https://snapchat.com/t/9OgJV0po",
  },
  {
    key: "tiktok",
    name: "TikTok",
    
    href: "https://www.tiktok.com/@velo8345?_r=1&_t=ZN-96mEmWSFWYI",
  },
  {
    key: "Steam",
    name: "Steam",
    
    href: "https://steamcommunity.com/profiles/76561199827686924/",
  },
];

// Public origin the site is served from. Set at build time via
// NEXT_PUBLIC_SITE_URL (docker compose passes it from .env); falls back to
// localhost for plain `npm run dev`.
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
