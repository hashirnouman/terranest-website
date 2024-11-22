import FactCard from "./FactCard";
import Numbercard from "./Numbercard";

const Stats = () => {
  return (
    <div className="flex gap-[10px]">
      <div className="bg-glass h-[420px] w-[85%] rounded-[20px] border-custom"></div>
      <div className="flex flex-col gap-[21px] w-[276px]">
        <FactCard
          number="754"
          text="Total Transactions"
          url="/icons/estate.png"
        />
        <FactCard number="21.7 B" text="Total Worth" url="/icons/money.png" />
        <Numbercard />
      </div>
    </div>
  );
};

export default Stats;
