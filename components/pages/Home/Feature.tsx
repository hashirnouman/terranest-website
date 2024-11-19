import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="bg-glass w-full h-[895px] rounded-[20px] mt-[67px] flex flex-col px-[22px]">
      <div className="flex flex-col justify-start items-center w-full mb-[44px]">
        <div className="bg-glass border-custom flex justify-center items-center h-[48px] w-[122px] rounded-[10px] mt-[61px]">
          Featured
        </div>
        <div className="text-[50px] font-sans font-semibold my-[26px]">
          Properties Of Week
        </div>
        <p className="font-sans font-medium text-[18px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className="flex">
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
