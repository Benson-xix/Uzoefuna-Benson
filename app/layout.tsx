import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Uzoefuna Benson — Developer & Creator",
  description: "Portfolio of Uzoefuna Benson — Software Developer crafting modern web experiences.",
  keywords: [
    "Development", "Web", "Software Development", "Programming",
    "Benson", "Uzoefuna", "Chijioke", "Tech", "JavaScript",
    "Work", "Skill", "Portfolio",
  ],
  openGraph: {
    title: "Uzoefuna Benson — Developer & Creator",
    description: "Portfolio of Uzoefuna Benson — Software Developer crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${spaceMono.variable} antialiased`}
      >
        {/* Ambient background glow blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="glow-blob glow-blob--blue" />
          <div className="glow-blob glow-blob--purple" />
          <div className="glow-blob glow-blob--teal" />
          <div className="grid-overlay" />
        </div>

        {children}
      </body>
    </html>
  );
}