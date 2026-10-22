import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A marketing site has nothing dynamic in it, so every page is built
  // once and served as a file.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
