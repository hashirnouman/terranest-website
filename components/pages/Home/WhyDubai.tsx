import React from "react";
import FeatureCard from "./FeatureCard";

const WhyDubai = () => {
  return (
    <div className="bg-glass w-full h-[895px] rounded-[20px] mt-[67px] flex flex-col px-[22px]">
      <div className="flex flex-col justify-start items-center w-full mb-[44px]">
        <div className="text-[50px] font-sans font-semibold mt-[36px] mb-[26px]">
          Why Dubai?
        </div>
        <p className="font-sans font-medium text-[18px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className="flex justify-between">
        <FeatureCard />
      </div>
    </div>
  );
};

export default WhyDubai;
