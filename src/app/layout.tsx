import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thotsl4yer69.github.io/mz1312";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jack Mazzini — MAZLABZ Applied Technology Lab",
    template: "%s — MAZLABZ",
  },
  description:
    "Independent applied-technology portfolio spanning edge AI, Raspberry Pi, NVIDIA Jetson, native Android, connected hardware and AI-native systems integration.",
  keywords: [
    "edge AI",
    "systems integration",
    "Raspberry Pi",
    "NVIDIA Jetson",
    "Android Kotlin",
    "technical prototyping",
    "embedded Linux",
    "MAZLABZ",
  ],
  authors: [{ name: "Jack Mazzini" }],
  creator: "Jack Mazzini",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jack Mazzini — MAZLABZ Applied Technology Lab",
    description: "AI-native systems integration across software, edge compute and physical hardware.",
    type: "website",
    url: "/",
    siteName: "MAZLABZ Applied Technology Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Mazzini — MAZLABZ",
    description: "Edge AI · Embedded Linux · Android · Connected Hardware · Automation",
  },
};

export const viewport: Viewport = {
  themeColor: "#070908",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Jack Mazzini",
      url: siteUrl,
      sameAs: ["https://github.com/thotsl4yer69"],
      jobTitle: "AI-Native Systems Integrator & Technical Prototyper",
      knowsAbout: [
        "Edge AI",
        "Raspberry Pi",
        "NVIDIA Jetson",
        "Android development",
        "Embedded Linux",
        "MQTT",
        "Hardware/software prototyping",
      ],
    },
    {
      "@type": "WebSite",
      name: "MAZLABZ Applied Technology Lab",
      url: siteUrl,
      description:
        "Applied technology portfolio covering edge AI, embedded systems, mobile applications, automation and physical computing.",
      author: { "@type": "Person", name: "Jack Mazzini" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
