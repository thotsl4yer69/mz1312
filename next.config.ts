import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazlabz.us.kg";
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

let inferredBasePath = "";
try {
  const parsed = new URL(siteUrl);
  if (parsed.hostname.endsWith(".github.io")) {
    inferredBasePath = parsed.pathname.replace(/\/$/, "");
  }
} catch {
  inferredBasePath = "";
}

const basePath = explicitBasePath ?? inferredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
