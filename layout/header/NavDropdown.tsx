import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";

export const NavDropdown = ({ text }: { text: string }) => {
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
