import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Filters from "./Filters";
import Navbar from "./Navbar";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className=" sticky top-0 z-10 w-full ">
      <div className="flex   items-center justify-between  w-full ">
        <div className="bg-glass flex items-center justify-center rounded-[20px] gap-[13px] min-w-[154px] py-[14px] px-[18px] ">
          <Image src="/images/logo-new.png" alt="logo" width={154} height={44} />
        </div>
        <div className="w-full lg:flex  hidden">
        <Navbar />
        <Link
          href="/"
          className="bg-glass h-[52px] w-[149px] rounded-[20px] flex justify-center items-center text-[14px] font-semibold"
        >
          Sell or Rent with Us
        </Link>
        </div>
      </div>
      {(pathname == "/buy" || pathname == "/rent") && <Filters />}
    </header>
  );
};

export default Header;
