import Link from "next/link";
import React from "react";

interface INavLink {
  href: string;
  text: string;
  active?: boolean;
}

const NavLink = ({ href, text, active }: INavLink) => {
  return (
    <Link href={href} className="cursor-pointer block h-8">
      <div className="relative h-full">
        <div className="flex items-center h-6 font-normal">{text}</div>
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 rounded transition-all ${
            active ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>
    </Link>
  );
};

export default NavLink;
