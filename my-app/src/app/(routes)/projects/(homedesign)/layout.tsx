import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kubotaのポートフォリオ",
  description: "このサイトはクボタのポートフォリオサイトです",
};

export default async function HomeDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
