import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { MainNav } from "@/components/main-nav";

const MenuBar = () => {
  return (
    <>
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

export default MenuBar;
