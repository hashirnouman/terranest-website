import { Tag } from "@/components/ui/Tag";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProperty {
  firstImg: string;
  secondImg: string;
  thirdImg: string;
  price: string;
  title: string;
  location: string;
  propertyType: string;
  bedrooms: string;
  area: string;
  floor: string;
  furnished: boolean;
  dealerName: string;
  dealerPic: string;
  phone: string;
  whatsapp: string;
  email: string;
  lat: string;
  long: string;
}
const Property = (props: IProperty) => {
  const {
    firstImg,
    secondImg,
    thirdImg,
    price,
    title,
    propertyType,
    dealerPic,
    dealerName,
    phone,
    whatsapp,
    email,
    location,
    bedrooms,
    area,
    floor,
    furnished,
  } = props;
  return (
    <div className="flex gap-[14px]">
      {/* Images */}
      <div className="bg-glass w-[655px] h-[396px] rounded-[20px] flex gap-[14px] py-[24px] px-[14px]">
        <Image
          src={firstImg}
          className="rounded-[11.45px]"
          width={375}
          height={348}
          alt="image"
        />
        <div className="flex flex-col gap-[15px] h-full">
          <Image
            src={secondImg}
            className="rounded-[7px]"
            width={238}
            height={167}
            alt="image"
          />
          <Image
            src={thirdImg}
            className="rounded-[7px]"
            width={238}
            height={167}
            alt="image"
          />
        </div>
      </div>
      {/* property details */}
      <div className="bg-glass w-[539px] h-[396px] rounded-[20px] px-[21px] pt-[39px]">
        <div className="flex justify-between pr-[4px] pl-[3px] w-full">
          <div className="w-full">
            <h6 className="text-[28px] font-bold mb-[8px]">AED {price}</h6>
            <p className="font-secondary font-bold">{title}</p>
          </div>
          <button className="bg-[#34249E] h-[32px] w-[60px] rounded-[5px] text-center font-secondary font-medium text-[10px] underline">
            Map View
          </button>
        </div>
        <p className="my-[8px] flex gap-[7px] pl-[3px] items-center font-secondary font-medium text-[16px] underline">
          <MapPin size={15} />
          {location}
        </p>
        <p className="font-secondary pl-[3px] font-medium text-[18px] underline">
          {propertyType}
        </p>
        <div className="my-[24px] flex flex-wrap gap-[9px]">
          <Tag
            icon={
              <Image src="/icons/bed.svg" width={20} height={20} alt="bed" />
            }
            text={`${bedrooms}-Bedroom`}
            height="38px"
            width="148px"
            fontSize="15px"
          />
          <Tag
            icon={
              <Image src="/icons/globe.svg" width={21} height={21} alt="bed" />
            }
            text={`${area} sq.m`}
            height="38px"
            width="126px"
            fontSize="15px"
          />
          <Tag
            icon={
              <Image
                src="/icons/building.svg"
                width={20}
                height={20}
                alt="floor"
              />
            }
            text={`Building ${floor}`}
            height="38px"
            width="133px"
            fontSize="15px"
          />
          {furnished && (
            <Tag
              icon={
                <Image src="/icons/sofa.svg" width={20} height={20} alt="bed" />
              }
              text="Fully Furnished"
              height="38px"
              width="175px"
              fontSize="15px"
            />
          )}
        </div>
        <div className="flex justify-between  w-full items-center  ">
          <div className="flex gap-[16px] w-full items-center">
            <Image
              src={dealerPic}
              width={42}
              height={42}
              alt="person"
              className="h-[42px] w-[42px] rounded-[100px] object-cover border-white border-[1px]"
            />
            <p className="font-secondary font-bold text-[18px]">{dealerName}</p>
          </div>
          <div className=" w-[50%]  flex gap-[30.44px]">
            <Link href={`tel:${phone}`}>
              <Image
                src="/icons/call.svg"
                width={32.27}
                height={32.27}
                alt="Call"
                className="cursor-pointer"
              />
            </Link>

            <Link
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/whatsapp.svg"
                width={32.27}
                height={32.27}
                alt="WhatsApp"
                className="cursor-pointer"
              />
            </Link>

            <Link href={`mailto:${email}`}>
              <Image
                src="/icons/gmail.svg"
                width={32.27}
                height={32.27}
                alt="Email"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
