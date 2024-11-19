import Image from "next/image";

const EmployeeofMonth = () => {
  return (
    <div className="w-full py-[25px] bg-glass rounded-[20px] flex flex-col justify-center items-center">
      <p className="font-bold text-[20px]">Employee of the Month</p>
      <p className="font-semibold text-[15.71px]">June 2024</p>
      <Image
        src="/images/person.png"
        width={183}
        height={183}
        alt="person"
        className="h-[183px] w-[183px] rounded-[100px] object-cover border-white border-[6px] my-[28px]"
      />
      <p className="font-bold text-[20px]">Muhammad Rehman</p>
      <p className="font-semibold text-[15.71px]">Sales Manager</p>
    </div>
  );
};

export default EmployeeofMonth;
