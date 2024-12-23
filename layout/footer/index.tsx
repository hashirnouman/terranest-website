import React from "react";
import PageLink from "./PageLink";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-[21px] px-[22px] bg-glass  w-full lg:h-[614px] rounded-[20px] my-[29px]">
      <h1 className=" lg:text-[48px] text-[30px] font-sans font-bold mb-[35px]">
        Start Your Real Estate Journey Today
      </h1>
      <p className="max-w-[928px] text-[21px] font-sans font-medium mb-[54px]">
        Your dream property is just a click away. Whether you&apos;re looking
        for a new home, a strategic investment, or expert real estate advice.
      </p>
     <div className="flex lg:flex-row flex-col justify-around w-[80%]">
     <div className="flex flex-col justify-start  gap-[10px]">
        <PageLink title="Home" />
        <PageLink title="Buy" />
        <PageLink title="Rent" />
        <PageLink title="Off Plan" />
      </div>
      <div className="flex  justify-start  gap-[10px]">
        <PageLink title="Latest  Insights" />
      </div>
      <div className="flex  justify-start  gap-[10px]">
        <PageLink title="Explore More" />
      </div>
     </div>



      <div className="flex lg:flex-row flex-col-reverse mt-[58px] justify-between lg:items-center">
        <button className="bg-white mt-4 text-center text-black font-sans font-bold text-[26px] w-[180px] h-[60px] rounded-[6.5px] hover:bg-[#34249E] hover:text-white transition-all ease-in-out ">
          Contact Us
        </button>
        <div className="flex gap-[7px]">
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image src="/icons/fb.svg" width={18} height={18} alt="facebook" />
            
          </Link>
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image
              src="/icons/linkedin.svg"
              width={18}
              height={18}
              alt="linkedin"
            />
          </Link>
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image src="/icons/x.svg" width={18} height={18} alt="linkedin" />
          </Link>
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image
              src="/icons/youtube.svg"
              width={18}
              height={18}
              alt="linkedin"
            />
          </Link>
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image
              src="/icons/instagram.svg"
              width={18}
              height={18}
              alt="linkedin"
            />
          </Link>
          <Link
            href=""
            className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
          >
            <Image
              src="/icons/tiktok.svg"
              width={18}
              height={18}
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
