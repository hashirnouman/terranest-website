import { MiniTag } from "@/components/ui/Minitag";
import Image from "next/image";
import Link from "next/link";
const ExclusiveCard = () => {
  return (
    <div className="w-full bg-glass h-auto rounded-[20px] py-[25px] flex flex-col justify-start items-center px-[14px]">
      <p className="text-white text-[20px] font-bold text-center mb-[12px]">
        Exclusive Sale Offer
      </p>
      <div className="h-[163px] relative">
        <Image
          src="/images/card-image.jpeg"
          width={226}
          height={163}
          className="w-full h-full rounded-[10px]"
          alt="card"
        />
        <div className="absolute bottom-1 right-1">
          <Image
            src="/images/logo.jpeg"
            width={16.7}
            height={16.7}
            alt="logo"
          />
        </div>
        <div className=" absolute top-1 right-1 bg-[#FF0000E5] h-[16px] w-[40px] rounded-[5px] text-[7px] font-secondary font-[600] flex justify-center items-center">
          Signature
        </div>
      </div>
      <div className="flex mt-[11.58px] justify-between items-center w-full mb-[4px]">
        <p className=" text-[14px] font-bold">The Bluewaters Residencies</p>
        <p className="text-[14px] font-semibold">AED 55,000</p>
      </div>
      <div className="gap-0">
        <p className="font-medium  text-[14px]">
          A stunning 4-bedroom, 3-bathroom ,full sea view corner unit in a
          peaceful suburban neighborhood and a...
          <br />
          <Link href="" className="underline text-[9px]">
            Read More
          </Link>
        </p>
      </div>
      <div className="flex ">
        <MiniTag
          icon={<Image src="/icons/bed.svg" width={10} height={10} alt="bed" />}
          text="4-Bedroom"
        />
        {/* <MiniTag
          icon={
            <Image src="/icons/globe.svg" width={20} height={20} alt="bed" />
          }
          text="230 sq.m"
        />

        <MiniTag
          icon={
            <Image src="/icons/sofa.svg" width={20} height={20} alt="bed" />
          }
          text="Fully Furnished"
        /> */}
      </div>
      <Link
        href=""
        className="bg-white flex justify-center items-center gap-[5px] text-black text-center h-[25px] w-[100%] font-secondary text-[12px] rounded-[1.6px]"
      >
        View Property Details
        <span>
          <Image
            src="/icons/arrow-right.svg"
            width={20}
            height={1}
            alt="arrow"
          />
        </span>
      </Link>
    </div>
  );
};

export default ExclusiveCard;
