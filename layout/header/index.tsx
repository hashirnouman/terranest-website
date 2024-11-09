import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex  gap-[100px] items-center sticky top-0 z-10 w-full ">
      <div className="bg-glass flex items-center justify-center rounded-[20px] gap-[13px] min-w-[257px] h-[94px] px-[15px] ">
        <Image src="/images/logo.jpeg" alt="logo" width={44} height={44} />
        <Image
          src="/images/white-logo.png"
          alt="logo"
          width={160}
          height={27}
        />
      </div>
      <div className="flex w-full gap-[128px] justify-end px-[15px] ">
        <Navbar />
        <Link
          href="/"
          className="bg-glass h-[52px] w-[149px] rounded-[20px] flex justify-center items-center text-[14px] font-semibold"
        >
          Sell or Rent with Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
