import { useRouter } from "next/router";
import NavLink from "./NavLink";
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";

// Create a new component for dropdown-style nav items
const NavDropdown = ({ text }: { text: string }) => {
  return (
    <Link href="#" className="cursor-pointer block h-8">
      <div className="relative h-full">
        <div className="flex items-center h-6 font-normal gap-1">
          {text}
          <IoChevronDownSharp className="text-sm" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded bg-transparent" />
      </div>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-glass w-[633px] rounded-[30px] h-[52px] flex justify-center items-center">
      <div className="flex justify-between items-center w-full px-8">
        <NavLink href="/" text="Home" active={router.pathname === "/"} />
        <NavLink href="/buy" text="Buy" active={router.pathname === "/buy"} />
        <NavLink
          href="/rent"
          text="Rent"
          active={router.pathname === "/rent"}
        />
        <NavLink
          href="/offline"
          text="Offline"
          active={router.pathname === "/offline"}
        />
        <NavLink
          href="/commercial"
          text="Commercial"
          active={router.pathname === "/commercial"}
        />
        <NavDropdown text="Latest Insights" />
        <NavDropdown text="Explore More" />
      </div>
    </nav>
  );
};

export default Navbar;
