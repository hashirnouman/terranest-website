import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="bg-glass w-full min-h-[895px] rounded-[20px] mt-[32px] flex flex-col lg:px-[22px] px-[6px]">
      <div className="flex flex-col justify-start items-center w-full mb-[44px]">
        
        <div className="lg:text-[50px] text-[30px] font-sans font-semibold my-[26px]">
          Properties Of Week
        </div>
        <p className="font-sans font-medium text-[18px]">
        This week’s top picks by <b>TerraNest Properties</b> include luxury homes and hot distress deals, offering unbeatable value and prime locations. Don’t miss these exceptional opportunities!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-[15px]">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
