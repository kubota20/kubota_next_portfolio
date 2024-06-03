"use client";

import { Menu } from "lucide-react";

import { MainNav } from "./main-nav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const SideNav = () => {
  return (
    <>
      <div className="max-md:hidden md:fixed w-64 top-0 left-0 h-full">
        <div className="bg-white h-full shadow-lg p-4">
          <h3 className="text-center">メニュー</h3>
          <div className="my-4">
            <nav className="grid grid-cols-1 gap-y-2">
              <MainNav />
            </nav>
          </div>
        </div>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu size={30} />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-center">メニュー</SheetTitle>
          </SheetHeader>
          <div className="my-4">
            <nav className="grid grid-cols-1 gap-y-2">
              <MainNav />
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNav;
