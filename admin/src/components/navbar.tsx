import { MainNav } from "@/components/main-nav";
import MenuBar from "@/components/menu-bar";
import { UserAvatar } from "@/components/ui/user-avatar";

const Navbar = () => {
  return (
    <header>
      <div className="border-b">
        <div className="flex h-16 items-center px-4 justify-between">
          <MenuBar />
          <nav className="hidden md:block ml-auto space-x-4 mr-4">
            <MainNav />
          </nav>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
