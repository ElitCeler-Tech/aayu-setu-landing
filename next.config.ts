import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A marketing site has nothing dynamic in it, so every page is built
  // once and served as a file.
  output: "export",
  images: { unoptimized: true },
  // On the public domain, until launch, only the Coming soon page is
  // built: NEXT_PUBLIC_COMING_SOON=1 (set on that Vercel project alone)
  // makes the *.soon.tsx files the only routes. The preview build keeps
  // the default and ignores them.
  ...(process.env.NEXT_PUBLIC_COMING_SOON === "1" ? { pageExtensions: ["soon.tsx"] } : {}),
};

export default nextConfig;
