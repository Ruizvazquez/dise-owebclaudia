import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  ...(phase === PHASE_DEVELOPMENT_SERVER ? { distDir: ".next-dev" } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
  },
});

export default nextConfig;
