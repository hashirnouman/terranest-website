import Image from "next/image";
interface IInsightCard {
  image: string;
  title: string;
  date: string;
}
const InsightCard = ({ image, title, date }: IInsightCard) => {
  return (
    <div className="w-[382px] h-[433px] rounded-[18.99px] bg-glass py-[22px] px-[13px flex flex-col justify-center items-center gap-[10px]">
      <Image
        src={image}
        alt=""
        width={355}
        height={330}
        className="rounded-[10px]"
      />
      <div className="font-poppins text-white w-[349px] overflow-hidden">
        <p className=" font-semibold text-[13.68px]  w-full overflow-hidden">
          {title}
        </p>
        <p className=" text-[11.4px]">{date}</p>
      </div>
    </div>
  );
};

export default InsightCard;
