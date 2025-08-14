import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://egeayan.dev"),
  title: "Ege Ayan | Software Engineer | Full Stack Developer",
  description:
    "Full-stack developer who actually gets stuff done. I build web apps, mobile apps, and whatever else needs building. Let's work together and create something solid.",
  keywords: [
    "Ege Ayan",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Flutter",
    "Java",
    "Spring Boot",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "NestJS",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ege Ayan" }],
  creator: "Ege Ayan",
  openGraph: {
    title: "Ege Ayan | Full Stack Developer",
    description:
      "Full-stack developer who gets shit done. Web apps, mobile apps, whatever you need.",
    url: "https://egeayan.dev",
    siteName: "Ege Ayan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ege-ayan.jpg",
        width: 800,
        height: 600,
        alt: "Ege Ayan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Ayan | Full Stack Developer",
    description:
      "Full-stack developer who gets shit done. Web apps, mobile apps, whatever you need.",
    images: ["/images/ege-ayan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
