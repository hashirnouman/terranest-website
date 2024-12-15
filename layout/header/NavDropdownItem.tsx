import Link from "next/link";
import React from "react";

const NavDropdownItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-gray-100 transition-colors text-white"
    >
      {children}
    </Link>
  );
};

export default NavDropdownItem;
