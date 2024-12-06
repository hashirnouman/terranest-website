import EmployeeofMonth from "./EmployeeofMonth";
import ExclusiveCard from "./ExclusiveCard";

const Aside = () => {
  return (
    <aside className="flex flex-col gap-[10px]  md:w-[20%] w-full">
      <ExclusiveCard />
      <EmployeeofMonth />
    </aside>
  );
};

export default Aside;
