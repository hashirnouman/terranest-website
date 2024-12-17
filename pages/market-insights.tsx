import InsightCard from "@/components/pages/MarketInsight/InsightCard";
import LinkCard from "@/components/pages/MarketInsight/LinkCard";
import Maincard from "@/components/pages/MarketInsight/Maincard";
import { DropDown } from "@/components/ui/DropDown";
import { ArrowRight, Search } from "lucide-react";
import React from "react";
import { Button } from "react-aria-components";
import Head from "next/head";
const MarketInsights = () => {
  return (
    <div className="px-[30px] pt-[36px] pb-[28px]">
      <Head>
        <title>Market Insights</title>
        <meta name="description" content="Market insights"/>
      </Head>
      <div className="w-full rounded-[20px] bg-glass h-full py-[26px]  pl-[18px]">
        <div className="w-full flex justify-center mb-[32px] h-full">
          <h1 className="font-secondary font-bold text-[42px] text-center w-[874px] leading-[120%]">
            Make better-informed property decisions today with the latest Dubai
            property market reports!
          </h1>
        </div>
        <div className="w-full flex justify-center items-center gap-[24px] ">
          <DropDown
            list={["Market Insights", "Penthouse", "Villa"]}
            widthClass="w-[224px]"
            selectedValue={"Market Insights"}
            onSelectionChange={(e) => console.log(e)}
            heightClass="h-[55px]"
          />
          <Button className="bg-glass h-[55px] w-[224px] rounded-[11px] border-custom flex justify-center items-center font-sans font-medium text-[20px] gap-[10px]">
            Search
            <Search color="white" size={20} />
          </Button>
          <Button className="w-[55px] h-[55px] bg-glass rounded-[11px] border-custom flex justify-center items-center">
            <ArrowRight color="white" size={20} />
          </Button>
        </div>
        <div className="mt-[40px] w-full  flex justify-center items-start gap-[13px]">
          <div className=" w-[526px]">
            <Maincard />
          </div>
          <div className=" w-[615px] space-y-[10px]">
            <LinkCard />
            <LinkCard />
            <LinkCard />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="mt-[49px] grid grid-cols-3 gap-[13.3px] place-items-center">
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
            <InsightCard
              date="08-11-2024"
              image="/images/sample1.png"
              title="Make better-informed property decisions today with the latest Dubai property market reports"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
