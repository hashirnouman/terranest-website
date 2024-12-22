import Accordian from "@/components/ui/Accordian";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Mortgage = () => {
  return (
    <div className="text-white px-[30px] flex justify-between items-start mt-[37px] w-full gap-[28px]">
      <div className="w-[48%] space-y-[14px]">
        <div className="bg-glass border-custom rounded-[19.53px] h-[138px] w-full pt-[15px] pl-[18px] pr-[40px]">
          <h6 className="font-sans font-bold text-[31px] mb-[20px]">
            Try Our Mortgage Calculator
          </h6>
          <p className="font-sans font-medium text-[16px]">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s.
          </p>
        </div>
        <div className="bg-glass border-custom rounded-[19.53px] mt-[30px] pl-[18px] pr-[17px] pb-[9px]">
          <h6 className="font-sans font-bold text-[31px] mb-[20px]">
            Frequently Asked Questions
          </h6>
          <div className="flex flex-col gap-[16px]">
            <Accordian />
            <Accordian />
            <Accordian />
            <Accordian />
          </div>
        </div>
      </div>
      <div className="w-[52%] bg-glass border-custom rounded-[19.53px] pt-[19px] px-[27px] h-[500px]">
        <div className="border-custom w-full rounded-[20px] h-[112px] flex  items-center pl-[9px] gap-[16px] mb-[19px]">
          <div className="bg-white w-[55px] h-[55px] rounded-[12px] flex justify-center items-center">
            <Image
              src="/icons/whatsapp-lg.svg"
              alt="icon"
              width={42.8}
              height={42.8}
            />
          </div>
          <p className="font-sans font-bold text-[31px]">Talk to our Advisor</p>
        </div>
        <div className="w-full h-full">
         <Slider />
        </div>
      </div>
    </div>
  );
};

export default Mortgage;
