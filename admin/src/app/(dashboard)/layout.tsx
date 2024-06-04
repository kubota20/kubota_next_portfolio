import SideNav from "@/components/side-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-between">
      <SideNav />
      {children}
    </div>
  );
}
