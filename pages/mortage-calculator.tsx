import Accordian from "@/components/ui/Accordian";
import SliderWithRange from "@/components/ui/SliderWithRange";
import Head from "next/head";
import Image from "next/image";

const Mortgage = () => {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
      </Head>

      <div className="text-white px-[30px] flex justify-between items-start mt-[37px] w-full gap-[28px]">
        <div className="w-[48%] space-y-[14px]">
          <div className="bg-glass border-custom rounded-[19.53px] h-[138px] w-full pt-[15px] pl-[18px] pr-[40px]">
            <h6 className="font-sans font-bold text-[31px] mb-[20px]">
              Try Our Mortgage Calculator
            </h6>
            <p className="font-sans font-medium text-[16px]">
              lorem Ipsum is simply dummy text of the printing and typesetting
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
        <div className="w-[52%] flex flex-col gap-[14px]">
          <div className="w-full bg-glass border-custom rounded-[19.53px] pt-[19px] px-[27px] pb-[20px] ">
            <div className="border-custom w-full rounded-[20px] h-[112px] flex items-center pl-[9px] gap-[16px] mb-[19px]">
              <div className="bg-white w-[55px] h-[55px] rounded-[12px] flex justify-center items-center">
                <Image
                  src="/icons/whatsapp-lg.svg"
                  alt="icon"
                  width={42.8}
                  height={42.8}
                />
              </div>
              <p className="font-sans font-bold text-[31px]">
                Talk to our Advisor
              </p>
            </div>
            <div className="w-full  px-6 h-full flex flex-col gap-[34px]">
              <SliderWithRange
                max={35_000_000}
                min={200_000}
                step={100_000}
                showPercentage
                title="Down Payment"
                label="AED"
              />
              <SliderWithRange
                max={35_000_000}
                min={200_000}
                step={100_000}
                showPercentage={false}
                title="Property Price"
                label="AED"
              />
              <SliderWithRange
                max={10}
                min={1}
                step={1}
                showPercentage={false}
                title="Duration"
                label="years"
              />
              <SliderWithRange
                max={20}
                min={1}
                step={0.1}
                showPercentage={false}
                title="Interest Rate"
                label="%"
              />
            </div>
          </div>
          <div className="w-full bg-glass border-custom rounded-[19.53px] py-[20px] pl-[28px] pr-[45px]">
            </div>
        </div>
      </div>
    </>
  );
};

export default Mortgage;
