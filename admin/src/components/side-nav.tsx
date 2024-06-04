"use client";

import { MainNav } from "@/components/main-nav";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
