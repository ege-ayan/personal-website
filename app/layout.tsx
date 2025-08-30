import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/common/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://egeayan.dev"),

  title: {
    default: "Ege Ayan - Full Stack Developer & Software Engineer",
    template: "%s | Ege Ayan",
  },
  description:
    "Passionate full-stack developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and cloud solutions. Building scalable applications with clean code and exceptional user experiences.",

  applicationName: "Ege Ayan Portfolio",
  authors: [
    {
      name: "Ege Ayan",
      url: "https://egeayan.dev",
    },
  ],
  creator: "Ege Ayan",
  publisher: "Ege Ayan",

  keywords: [
    "Ege Ayan",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Turkey Developer",
    "Bilkent University",
    "Computer Engineering",
    "Modern Web Development",
    "Scalable Applications",
    "User Experience",
    "Clean Code",
  ],
  category: "Portfolio",

  alternates: {
    canonical: "https://egeayan.dev",
    languages: {
      "en-US": "https://egeayan.dev",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://egeayan.dev",
    title: "Ege Ayan - Full Stack Developer & Software Engineer",
    description:
      "Passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable applications with exceptional user experiences.",
    siteName: "Ege Ayan Portfolio",
    images: [
      {
        url: "/images/ege-ayan.jpg",
        width: 343,
        height: 343,
        alt: "Ege Ayan - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ege Ayan - Full Stack Developer & Software Engineer",
    description:
      "Passionate full-stack developer and software engineer specializing in React, Next.js, and modern web technologies. Building scalable applications with exceptional user experiences.",
    creator: "@egeayan",
    images: [
      {
        url: "/images/ege-ayan.jpg",
        alt: "Ege Ayan - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`antialiased pt-20 px-5 sm:px-6 lg:px-12 2xl:px-20 bg-black text-white min-h-screen`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
