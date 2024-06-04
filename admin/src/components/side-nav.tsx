"use client";

import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const SideNav = () => {
  return (
    <>
      <div className="max-md:hidden flex-none w-96 top-0 left-0 h-full">
        <div className="bg-white shadow-lg p-4">
          <h3 className="text-center">メニュー</h3>
          <div className="my-4">
            <nav className="grid grid-cols-1 gap-y-2">
              <MainNav />
            </nav>
            {/* ログアウトボタン */}
            <div className="mt-4 text-end">
              <Button size="icon" onClick={() => signOut()}>
                <LogOut />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
