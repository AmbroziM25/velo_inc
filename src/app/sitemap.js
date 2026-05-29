import { SITE } from "./config";

// Required for `output: export` — render this route to a static file at build.
export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
