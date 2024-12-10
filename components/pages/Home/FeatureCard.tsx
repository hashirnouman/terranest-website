import { Tag } from "@/components/ui/Tag";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useState } from "react";
const FeatureCard = () => {
  const [color, setColor] = useState("black");
  return (
    <div className="bg-glass border-custom rounded-[10px] h-[541px] lg:min-w-[380px] w-full lg:pt-[32px] pt-4 flex flex-col items-center lg:px-[22px] px-3">
      <div className="h-[239px] mb-[17px] relative">
        <Image
          src="/images/card-image.jpeg"
          width={332}
          height={239}
          className="w-full h-full rounded-[10px]"
          alt="card"
        />
        <div className="absolute bottom-1 right-1">
          <Image src="/images/logo.jpeg" width={24} height={24} alt="logo" />
        </div>
        <div className=" absolute top-2 right-2 bg-[#FF0000E5] h-[30px] w-[65px] rounded-[5px] text-[10px] font-secondary font-[300] flex justify-center items-center">
          Signature
        </div>
      </div>
      <div className="flex justify-between w-full mb-[5px]">
        <div className="flex gap-[6px]">
          <Image src="/icons/location.svg" alt="icon" width={10} height={10} />
          <p className="font-sans font-medium text-[14px]">
            The Bluewaters Residencies
          </p>
        </div>
        <p className="text-[14px]">AED 55,000</p>
      </div>
      <div className="mb-[17.9px] w-full">
        <p className="font-secondary font-bold text-[14px]">
          Prime Location | Sea View |
        </p>
      </div>
      <div className="flex gap-[5px] flex-wrap w-full ">
        <Tag
          icon={<Image src="/icons/bed.svg" width={20} height={20} alt="bed" />}
          text="4-Bedroom"
        />
        <Tag
          icon={
            <Image src="/icons/globe.svg" width={20} height={20} alt="bed" />
          }
          text="230 sq.m"
        />
        <Tag
          icon={
            <Image src="/icons/building.svg" width={20} height={20} alt="bed" />
          }
          text="Building 4"
        />
      </div>
      <div className="w-full flex mt-[16.9px] mb-[30px] gap-[20.44px]">
        <Image
          src="/icons/call.svg"
          width={21.67}
          height={21.67}
          alt="call"
          className="cursor-pointer"
        />
        <Image
          src="/icons/whatsapp.svg"
          width={21.67}
          height={21.67}
          alt="call"
          className="cursor-pointer"
        />
        <Image
          src="/icons/gmail.svg"
          width={21.67}
          height={21.67}
          alt="call"
          className="cursor-pointer"
        />
      </div>
      <button
        className="lg:w-[309px] w-full h-[41.22px] bg-white text-black flex justify-center items-center gap-[8px]  rounded-[10px] font-secondary font-medium hover:bg-[#34249E] hover:text-white transition-all ease-in-out "
        onMouseEnter={() => setColor("white")}
        onMouseLeave={() => setColor("black")}
      >
        View Property Details
        <MoveRight color={color} />
      </button>
    </div>
  );
};

export default FeatureCard;
