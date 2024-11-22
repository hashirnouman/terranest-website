import Image from "next/image";

interface IFastCard {
  number: string;
  text: string;
  url: string;
}
const FactCard = ({ number, text, url }: IFastCard) => {
  return (
    <div className="w-full h-[142px] rounded-[20px] bg-glass px-[21px] flex  flex-col justify-center border-custom">
      <div className="flex w-full justify-between">
        <div className="font-sans font-bold text-[28px]">{number}</div>
        <div>
          <Image src={url} alt="image" width={42} height={33} />
        </div>
      </div>
      <p className="font-sans font-medium text-[21px]">{text}</p>
    </div>
  );
};

export default FactCard;
