import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anirudh Chintha - Software Engineer",
  description:
    "Portfolio of Anirudh Chintha, a skilled Software Engineer specializing in full-stack development with expertise in React, Angular, NodeJS, and cloud technologies.",
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
        <div className="min-h-dvh bg-gradient-to-br from-indigo-50 via-yellow-50 to-indigo-50 dark:from-gray-900 dark:via-indigo-900 dark:to-gray-900 dark:text-gray-100">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
