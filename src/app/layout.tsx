import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Script from "next/script"; // ✅ Added for external scripts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabter Iqbal | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Sabter Iqbal – Showcasing web development and AI integration expertise.",
  keywords: [
    "Sabter Iqbal",
    "Full-Stack Developer",
    "Next.js",
    "AI Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Sabter Iqbal | Full-Stack Developer",
    description:
      "Explore my portfolio featuring modern web projects and AI innovations.",
    url: "https://sabter.tech.vercel.app",
    siteName: "Sabter Iqbal Portfolio",
    images: [
      {
        url: "./Logo.png",
        width: 1200,
        height: 630,
        alt: "Sabter Iqbal Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
