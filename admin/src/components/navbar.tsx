import { MainNav } from "./main-nav";
import SideNav from "./side-nav";

const Navbar = () => {
  return (
    <header>
      <div className="border-b">
        <div className="flex h-16 items-center px-4 justify-between">
          <SideNav />
          <nav className="hidden md:block ml-auto space-x-4">
            <MainNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
