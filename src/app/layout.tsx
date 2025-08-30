import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAZLABZ.AI - Premium Streaming Devices",
  description: "Cutting-edge streaming technology and podcast hub - MAZLABZ.AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
