import Image from "next/image";

const Section = () => {
  return (
    <section className="text-white bg-dining h-[408px] bg-center flex justify-center pb-[16px] px-[16px] items-end  bg-cover rounded bg-no-repeat w-full">
      <div className="w-full justify-between flex">
        <div className="bg-glass h-[91px] w-[278px] rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/golden-visa.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[149px] font-sans font-bold text-[16px]">
            Buy Property To Get Golden Visa In UAE
          </p>
        </div>
        <div className="bg-glass h-[91px] w-[278px] rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/export.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[180px] font-sans font-bold text-[16px]">
            Learn About Mortgage to Buy Property In Dubai
          </p>
        </div>
        <div className="bg-glass h-[91px] w-[278px] rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/no-visa.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[149px] font-sans font-bold text-[16px]">
            Buy Property To Get Golden Visa In UAE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;