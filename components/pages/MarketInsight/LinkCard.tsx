import Image from 'next/image'
import React from 'react'

const LinkCard = () => {
  return (
    <div className="h-[154px] flex  items-start gap-[16px] overflow-hidden">
      <Image
        src={"/images/sample1.png"}
        width={250}
        height={154}
        alt=""
        className="rounded-[7.63px] object-center h-[154px] w-[250px]"
      />

      <div className="font-poppins text-white w-[349px]">
        <p className=" font-semibold text-[21px] leading-[120%]">
          Make better-informed property decisions today with the latest Dubai.
        </p>
        <p className=" text-[17px]">08-11-2024</p>
      </div>
    </div>
  );
}

export default LinkCard