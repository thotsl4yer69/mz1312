import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Jack Mazzini — MAZLABZ Applied Technology Lab",
    description: "AI-native systems integration across software, edge compute and physical hardware.",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
