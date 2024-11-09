import EmployeeofMonth from "./EmployeeofMonth";
import ExclusiveCard from "./ExclusiveCard";

const Aside = () => {
  return (
    <aside className="flex flex-col gap-[10px] w-full">
      <ExclusiveCard />
      <EmployeeofMonth />
    </aside>
  );
};

export default Aside;
