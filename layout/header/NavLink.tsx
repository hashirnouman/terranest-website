import Link from "next/link";
import React from "react";

interface INavLink {
  href: string;
  text: string;
  active: boolean;
}
const NavLink = ({ href, text, active }: INavLink) => {
  return (
    <Link href={href} className="cursor-pointer mb-[4px]">
      <div className="flex flex-col gap-[2px] font-normal">
        {text}
        {active && <span className="bg-white h-[4px] w-auto rounded"></span>}
      </div>
    </Link>
  );
};

export default NavLink;
