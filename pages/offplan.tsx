import OffplanCard from "@/components/pages/Offplan/OffplanCard";
import { DropDown } from "@/components/ui/DropDown";
import { CircleX, ListFilter, Search } from "lucide-react";
import Head from "next/head";
import { useState } from "react";
import { Button } from "react-aria-components";

const Offplan = () => {
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [totalBeds, setTotalBeds] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full">
      <Head>
        <title>Offplan</title>
      </Head>

      <div className="space-y-4">
        <div className="">
          <div className="mt-[37px] flex w-full justify-between  items-center ">
            <div className="h-[48px] w-[307px] rounded-[10px] border-custom flex items-center pl-[20px] pr-[10px] gap-[5px] bg-glass">
              <Search color="white" size={20} />
              <input
                className="w-full h-full border-none outline-none bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
              />
              <div className="w-[20px] h-full flex justify-center items-center">
                {searchTerm.length > 0 && (
                  <CircleX
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setSearchTerm("")}
                  />
                )}
              </div>
            </div>
            <DropDown
              list={["Apartments", "Penthouse", "Villa"]}
              widthClass="w-[172px]"
              selectedValue={propertyType}
              onSelectionChange={(e) => setPropertyType(e)}
              placeholder="Property Type"
            />
            <DropDown
              list={["AED 2,000", "AED 12,000", "AED 20,000", "AED 200,000"]}
              widthClass="w-[175px]"
              selectedValue={minPrice}
              onSelectionChange={(e) => setMinPrice(e)}
              placeholder="Min Price"
            />
            <DropDown
              list={["AED 2,000", "AED 12,000", "AED 20,000", "AED 200,000"]}
              widthClass="w-[175px]"
              selectedValue={maxPrice}
              onSelectionChange={(e) => setMaxPrice(e)}
              placeholder="Max Price"
            />
            <DropDown
              list={["1", "2", "3", "4"]}
              widthClass="w-[108px]"
              selectedValue={totalBeds}
              onSelectionChange={(e) => setTotalBeds(e)}
              placeholder="Beds"
            />
            <DropDown
              list={["1", "2", "3", "4"]}
              widthClass="w-[176px]"
              selectedValue={totalBeds}
              onSelectionChange={(e) => setTotalBeds(e)}
              placeholder="Developers"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-[16px]">
          <div className="bg-glass border-custom rounded-[10px] h-[43px] w-[376px] flex justify-center items-center text-center font-sans font-bold text-[18px]">
            New Developments In Dubai | 1500 Results
          </div>
          <Button className="bg-glass border-custom rounded-[10px] h-[43px] w-[171px] flex justify-center items-center text-center font-secondary font-medium text-[12.7px] gap-[8px]">
            <ListFilter size={20} /> Sort: Most Recents
          </Button>
        </div>
      </div>
      <div className=" mt-[38px] grid grid-cols-2   gap-x-[14px] gap-y-[28] gap-[28px] place-items-center">
        <OffplanCard
          developerName="Majid Developers"
          whatsapp="+923127881358"
          phone="+923127881358"
          email="hashirnouman76@gmail.com"
          handoverDate="Q2 2026"
          image="/images/sample1.png"
          location="The Bluewaters Residencies"
          price="55,000"
          propertyType="Apartment"
        />
        <OffplanCard
          developerName="Majid Developers"
          whatsapp="+923127881358"
          phone="+923127881358"
          email="hashirnouman76@gmail.com"
          handoverDate="Q2 2026"
          image="/images/sample1.png"
          location="The Bluewaters Residencies"
          price="55,000"
          propertyType="Apartment"
        />
        <OffplanCard
          developerName="Majid Developers"
          whatsapp="+923127881358"
          phone="+923127881358"
          email="hashirnouman76@gmail.com"
          handoverDate="Q2 2026"
          image="/images/sample1.png"
          location="The Bluewaters Residencies"
          price="55,000"
          propertyType="Apartment"
        />
        <OffplanCard
          developerName="Majid Developers"
          whatsapp="+923127881358"
          phone="+923127881358"
          email="hashirnouman76@gmail.com"
          handoverDate="Q2 2026"
          image="/images/sample1.png"
          location="The Bluewaters Residencies"
          price="55,000"
          propertyType="Apartment"
        />
      </div>
    </div>
  );
};

export default Offplan;
