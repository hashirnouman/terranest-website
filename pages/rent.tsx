import Property from "@/components/pages/Rent/Property";
import Filters from "@/layout/header/Filters";
import { ListFilter } from "lucide-react";
import Head from "next/head";
import { Button } from "react-aria-components";

const Rent = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Rent</title>
      </Head>

      <div className="space-y-4">
        <div className="">
          <Filters />
        </div>
        <div className="w-full flex justify-between mt-[16px]">
          <div className="bg-glass border-custom rounded-[10px] h-[43px] w-[376px] flex justify-center items-center text-center font-sans font-bold text-[18px]">
            Properties For Rent In Dubai | 1500 Results
          </div>
          <Button className="bg-glass border-custom rounded-[10px] h-[43px] w-[171px] flex justify-center items-center text-center font-secondary font-medium text-[12.7px] gap-[8px]">
            <ListFilter size={20} /> Sort: Most Recents
          </Button>
        </div>
      </div>
      <div className="w-full mt-[38px] flex flex-col gap-[28px] items-center">
        <Property
          firstImg="/images/sample1.png"
          secondImg="/images/sample2.png"
          thirdImg="/images/sample3.png"
          price="55,000"
          area="20.4"
          dealerName="Alex Jhon"
          dealerPic="/images/person.png"
          email="hashirnouman76@gmail.com"
          floor="4"
          furnished={true}
          lat="304.f"
          long="f"
          location="The Bluewaters Residencies"
          phone="+923127881358"
          propertyType="Apartment"
          title="Prime Location | Best View | Best Apartments"
          bedrooms="4"
          whatsapp="+923127881358"
        />
        <Property
          firstImg="/images/sample1.png"
          secondImg="/images/sample2.png"
          thirdImg="/images/sample3.png"
          price="55,000"
          area="20.4"
          dealerName="Alex Jhon"
          dealerPic="/images/person.png"
          email="hashirnouman76@gmail.com"
          floor="4"
          furnished={true}
          lat="304.f"
          long="f"
          location="The Bluewaters Residencies"
          phone="+923127881358"
          propertyType="Apartment"
          title="Prime Location | Best View | Best Apartments"
          bedrooms="4"
          whatsapp="+923127881358"
        />
      </div>
    </div>
  );
};

export default Rent;
