import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import "../globals.css";

import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { ModalProvider } from "@/provisers/modal-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "kubotaのポートフォリオ",
  description: "このサイトはクボタのポートフォリオサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <ModalProvider />
      </body>
    </html>
  );
}
