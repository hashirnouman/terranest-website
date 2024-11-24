import Image from "next/image";
interface IReasonCard {
  title: string;
  text: string;
  image: string;
}
const ReasonCard = ({ title, text, image }: IReasonCard) => {
  return (
    <div className="bg-glass border-custom rounded-[10px] h-[615px] w-[575px]  pt-[32px] flex flex-col  px-[19px] relative mb-2">
      <Image
        src={image}
        width={537}
        height={351}
        className="w-full h-[351px] rounded-[6px]"
        alt="card"
      />
      <h1 className="mt-[30px] mb-[6px] font-sans font-bold text-[24px]">
        {title}
      </h1>
      <p className="font-sans font-medium text-[16px] mb-[11px]">{text}</p>
      <button className="bg-white text-center text-black font-sans font-bold text-[15.6px] w-[117px] h-[39px] rounded-[6.5px] hover:bg-[#34249E] hover:text-white transition-all ease-in-out absolute bottom-3">
        Read More
      </button>
    </div>
  );
};

export default ReasonCard;
