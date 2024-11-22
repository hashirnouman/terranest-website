import ReasonCard from "./ReasonCard";

const WhyDubai = () => {
  return (
    <div className="bg-glass w-full h-[895px] rounded-[20px] mt-[67px] flex flex-col items-center px-[22px]">
      <div className="flex flex-col justify-start items-center w-full mb-[44px]">
        <div className="text-[50px] font-sans font-semibold mt-[36px] mb-[26px]">
          Why Dubai?
        </div>
        <p className="font-sans font-medium text-[18px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className="flex gap-[11px] items-center">
        <ReasonCard
          image="/images/sofa-1.png"
          title="Reason 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ReasonCard
          image="/images/sofa-2.png"
          title="Reason 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      
    </div>
  );
};

export default WhyDubai;
