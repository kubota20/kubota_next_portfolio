import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-14 items-center">
          <Link href="/" className="ml-1 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl italic">Portfolio</p>
          </Link>
          <MainNav />
          {/* NavbarActions */}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
