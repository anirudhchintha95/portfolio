import type { Metadata } from "next";
import { Pixelify_Sans, Inter } from "next/font/google";

import "../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${pixel.variable} ${inter.variable} antialiased`}>
        <div className="min-h-dvh bg-gradient-to-br from-indigo-50 via-yellow-50 to-indigo-50 dark:from-gray-900 dark:via-indigo-900 dark:to-gray-900 dark:text-gray-100">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
