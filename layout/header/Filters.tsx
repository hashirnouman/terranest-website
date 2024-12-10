import { DropDown } from "@/components/ui/DropDown";
import { useState } from "react";

import { CircleX, Search, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/router";
import { Button } from "react-aria-components";
const Filters = () => {
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [totalBeds, setTotalBeds] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <div className="mt-[37px] flex w-full justify-between  items-center ">
      
      <DropDown
        list={["Rent", "Buy"]}
        widthClass="w-[93px]"
        selectedValue={router.pathname == "/buy" ? "Buy" : "Rent"}
        onSelectionChange={() => {
          if (router.pathname == "/buy") {
            router.push("/rent");
          } else {
            router.push("/buy");
          }
        }}
        placeholder=""
      />
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
        widthClass="w-[93px]"
        selectedValue={totalBeds}
        onSelectionChange={(e) => setTotalBeds(e)}
        placeholder="Beds"
      />
      <Button
        className="flex justify-center items-center rounded-[10px] outline-none gap-[8px] bg-glass text-white h-[48px] w-[160px] text-[18px] border-custom"
        type="button"
      >
        <SlidersHorizontal size={20} />
        More Filters
      </Button>
    </div>
  );
};

export default Filters;
