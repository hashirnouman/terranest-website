import EmployeeofMonth from "./EmployeeofMonth";
import ExclusiveCard from "./ExclusiveCard";

const Aside = () => {
  return (
    <aside className="flex flex-col gap-[10px]  lg:w-[20%] md:[30%] w-full">
      <ExclusiveCard />
      <EmployeeofMonth />
    </aside>
  );
};

export default Aside;
