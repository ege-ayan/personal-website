import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/common/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`antialiased pt-20 px-4 sm:px-6 lg:px-12 2xl:px-20 bg-black text-white min-h-screen`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
