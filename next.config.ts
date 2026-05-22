import type { NextConfig } from "next";

const isStandaloneBuild = process.env.NEXT_OUTPUT === "standalone" || process.env.DOCKER === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStandaloneBuild
    ? {
        output: "standalone" as const,
        outputFileTracingRoot: __dirname
      }
    : {})
};

export default nextConfig;
