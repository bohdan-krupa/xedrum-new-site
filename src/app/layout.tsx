import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/header/Header";
import MobileHeader from "@/components/layout/header/MobileHeader";
import Footer from "@/components/layout/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xedrum",
  description: "A modern Next.js application built with TypeScript and best practices",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div>
          <Header />
          <MobileHeader />
        </div>

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
