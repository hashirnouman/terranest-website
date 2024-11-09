import NavLink from "./NavLink";
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-glass w-[633px] rounded-[30px] h-[52px] flex justify-center items-center">
      <ul className=" inline-flex justify-between w-full px-[35px]">
        <NavLink href="/buy" text="Buy" active />
        <NavLink href="/buy" text="Rent" active={false} />
        <NavLink href="/buy" text="Offline" active={false} />
        <NavLink href="/buy" text="Commercial" active={false} />
        <div className="flex items-center gap-[7.23px]">
          Latest Insights
          <IoChevronDownSharp />
        </div>
        <div className="flex items-center gap-[7.23px]">
          Explore More
          <IoChevronDownSharp />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
