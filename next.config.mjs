/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out for GitHub Pages (no Node server).
  output: "export",
  // Served at the apex domain root, so no basePath. next/image isn't used,
  // but mark images unoptimized so the default loader is never required.
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
