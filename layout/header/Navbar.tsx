import { useRouter } from "next/router";
import NavLink from "./NavLink";
import { NavDropdown } from "./NavDropdown";

// Create a new component for dropdown-style nav items

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-glass w-full max-w-[633px] rounded-[30px] h-[52px] hidden lg:flex justify-center items-center">
      <div className="flex justify-between items-center w-full px-8">
        <NavLink href="/" text="Home" active={router.pathname === "/"} />
        <NavLink href="/buy" text="Buy" active={router.pathname === "/buy"} />
        <NavLink
          href="/rent"
          text="Rent"
          active={router.pathname === "/rent"}   
        />
        <NavLink
          href="/comming-soon"
          text="Off Plan"
          // active={router.pathname === "/offline"}
        />
        {/* <NavLink
          href="/comming-soon"
          text="Commercial"
          // active={router.pathname === "/commercial"}
        /> */}
        <NavDropdown text="Latest Insights" />
        <NavDropdown text="Explore More" />
      </div>
    </nav>
  );
};

export default Navbar;
