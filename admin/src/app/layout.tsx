import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/providers/providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "管理者",
  description: "管理者用ページです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(inter.className)}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <ModalProvider />
        </NextAuthProvider>
      </body>
    </html>
  );
}
