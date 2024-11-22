import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex  gap-[100px] items-center justify-between sticky top-0 z-10 w-full ">
      <div className="bg-glass flex items-center justify-center rounded-[20px] gap-[13px] min-w-[154px] py-[14px] px-[18px] ">
        <Image src="/images/logo.svg" alt="logo" width={154} height={44} />
      </div>
      <Navbar />
      <Link
        href="/"
        className="bg-glass h-[52px] w-[149px] rounded-[20px] flex justify-center items-center text-[14px] font-semibold"
      >
        Sell or Rent with Us
      </Link>
    </header>
  );
};

export default Header;
