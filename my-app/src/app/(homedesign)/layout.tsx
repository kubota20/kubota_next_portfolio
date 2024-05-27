import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "kubotaのポートフォリオ",
  description: "このサイトはクボタのポートフォリオサイトです",
};

export default async function HomeDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
