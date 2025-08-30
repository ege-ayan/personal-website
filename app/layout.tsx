import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/common/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ege Ayan - Software Engineer and Full Stack Developer",
  metadataBase: new URL("https://egeayan.dev"),
  description: "Ege Ayan - Software Engineer and Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ege Ayan",
    description: "Ege Ayan's personal website",
    url: "https://egeayan.dev/",
    siteName: "Ege Ayan",
    images: [{ url: "/images/ege-ayan.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege Ayan",
    description: "Ege Ayan's personal website",
    images: [{ url: "/images/ege-ayan.jpg" }],
  },
  alternates: {
    canonical: "./",
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
