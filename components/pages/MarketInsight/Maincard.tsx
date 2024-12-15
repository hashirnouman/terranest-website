import Image from "next/image";

const Maincard = () => {
  return (
    <div className="flex flex-col  gap-[17px]  justify-end items-center">
      <Image
        src="/images/sample1.png"
        alt="logo"
        width={526}
        height={494}
        className="rounded-[17px]"
      />
      <div className="font-poppins text-white">
        <p className=" font-semibold text-[21px]">
          Make better-informed property decisions today with the latest Dubai.
        </p>
        <p className=" text-[17px]">08-11-2024</p>
      </div>
    </div>
  );
};

export default Maincard;
