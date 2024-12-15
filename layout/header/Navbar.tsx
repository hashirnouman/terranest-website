import { useRouter } from "next/router";
import { NavDropdown } from "./NavDropdown";
import NavLink from "./NavLink";
import { latestInsightsLinks, exploreMoreLinks } from "@/constants/navlinks";
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
          href="/offplan"
          text="Off Plan"
          active={router.pathname === "/offplan"}
        />

        <NavDropdown
          list={latestInsightsLinks}
          widthClass="w-auto"
          selectedValue={""}
          onSelectionChange={(e) => console.log(e)}
          placeholder="Latest Insights"
        />
        <NavDropdown
          list={exploreMoreLinks}
          widthClass="w-auto"
          selectedValue={""}
          onSelectionChange={(e: unknown) => console.log(e)}
          placeholder="Explore More"
        />
      </div>
    </nav>
  );
};

export default Navbar;
