"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathName === `/`,
    },
    {
      href: `/projects`,
      label: "Projects",
      active: pathName === `/projects`,
    },
    {
      href: `/blogs`,
      label: "Blogs",
      active: pathName === `/blogs`,
    },
    {
      href: `/categories`,
      label: "Categories",
      active: pathName === `/categories`,
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </>
  );
};
