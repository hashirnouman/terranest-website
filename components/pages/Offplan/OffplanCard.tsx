import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface IOffplanCard {
  image: string;
  price: string;
  location: string;
  propertyType: string;
  developerName: string;
  handoverDate: string;
  whatsapp: string;
  phone: string;
  email: string;
}
const OffplanCard = (props: IOffplanCard) => {
  const {
    image,
    price,
    location,
    propertyType,
    developerName,
    whatsapp,
    phone,
    email,
    handoverDate,
  } = props;
  return (
    <div className="bg-glass w-[596px] h-[868px] rounded-[30px] pt-[35px] px-[21px]">
      <Image
        src={image}
        className="rounded-[16.94px] "
        width={554}
        height={514}
        alt="image"
      />
      <div className="mt-[18px]  w-full flex justify-between">
        <p className="font-bold text-[30px]">AED {price}</p>
        <button className="font-secondary font-medium text-[10px] bg-white hover:bg-[#34249E] text-black hover:text-white transition-all ease-in-out underline w-[65px] h-[35px] rounded-[5.27px] text-center">
          Map View
        </button>
      </div>
      <p className="my-[8px] flex gap-[7px] pl-[3px] items-center font-secondary font-medium text-[16px] underline">
        <MapPin size={15} />
        {location}
      </p>
      <p className="font-secondary pl-[3px] font-medium text-[18px] mb-[12px] underline">
        {propertyType}
      </p>
      <div className="flex font-secondary text-[19px]">
        <p className="font-bold text-[19px ">Developer:&nbsp; </p>
        <p className="font-medium">{developerName}</p>
      </div>
      <div className="flex font-secondary text-[19px] mb-[27px]">
        <p className="font-bold ">Handover date:&nbsp;</p>
        <p className="font-medium">{handoverDate}</p>
      </div>
      <div className="w-full flex justify-between">
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
        <button className="font-secondary font-medium text-[10px] bg-white hover:bg-[#34249E] text-black hover:text-white transition-all ease-in-out underline w-[129px] h-[35px] rounded-[5.27px] text-center">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default OffplanCard;
