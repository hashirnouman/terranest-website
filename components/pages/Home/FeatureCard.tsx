import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="bg-glass border-custom rounded-[10px] h-[541px] w-[378px]  pt-[32px] flex flex-col items-center px-[22px] ">
      <div className="h-[239px] relative">
        <Image
          src="/images/card-image.jpeg"
          width={332}
          height={239}
          className="w-full h-full rounded-[10px]"
          alt="card"
        />
        <div className="absolute bottom-1 right-1">
          <Image src="/images/logo.jpeg" width={24} height={24} alt="logo" />
        </div>
        <div className=" absolute top-2 right-2 bg-[#FF0000E5] h-[30px] w-[65px] rounded-[5px] text-[10px] font-secondary font-[300] flex justify-center items-center">
          Signature
        </div>
      </div>
      <div>
        <Image src="/icons/location.svg" alt="icon" width={10} height={10}/>
      </div>
    </div>
  );
};

export default FeatureCard;
