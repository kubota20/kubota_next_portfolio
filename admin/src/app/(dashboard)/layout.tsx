"use client";

import { useState, useEffect } from "react";
import SideNav from "@/components/side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  );
}
