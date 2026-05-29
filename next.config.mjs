/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a minimal, self-contained server in .next/standalone for self-hosting.
  output: "standalone",
  reactCompiler: true,
};

export default nextConfig;
