import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = isGithubActions ? "/mz1312" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath,
  assetPrefix: repoBasePath || undefined,
};

export default nextConfig;
