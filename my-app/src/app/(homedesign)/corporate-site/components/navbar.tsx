import Link from "next/link";

import { Menu } from "lucide-react";

import { mainNavValue } from "../data/data";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="bg-sky-600 text-white p-4 relative">
      <Container>
        <div className="flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Corporate Site</h1>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle className="text-center">メニュー</SheetTitle>
                </SheetHeader>
                <Separator className="my-8" />
                <nav>
                  {mainNavValue.map((item) => (
                    <ul key={item.id}>
                      <Link href={item.href}>
                        <li className="flex gap-4 mb-4">
                          <span className="text-sky-300">{item.icon}</span>
                          <span className="font-semibold">{item.name}</span>
                        </li>
                      </Link>
                    </ul>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden md:flex gap-5">
            {mainNavValue.map((item) => (
              <ul key={item.id}>
                <li>
                  <Link
                    href={item.href}
                    className="relative flex flex-col items-center "
                  >
                    <span className="relative z-50 font-semibold">
                      {item.name}
                    </span>
                    <span className="absolute text-sky-300">{item.icon}</span>
                  </Link>
                </li>
              </ul>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
