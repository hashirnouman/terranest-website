// import React, { useEffect, useRef, useState } from "react";
// import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Image from "next/image";

const Section = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [isMuted, setIsMuted] = useState(false);
  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = isMuted;
  //     videoRef.current.playbackRate = 2;
  //     videoRef.current.volume = 0.5;
  //   }
  // }, [isMuted]);

  // const toggleMute = () => {
  //   setIsMuted((prev) => !prev); // Toggle mute state
  // };

  return (
    <section className="text-white  rounded-[20px] group relative bg-dining min-h-[408px] bg-center flex justify-center py-[16px] px-[16px] lg:items-end  bg-cover  bg-no-repeat w-full">
      {/* <video
        className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover"
        autoPlay
        loop
        muted
        ref={videoRef}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      {/* <button
        onClick={toggleMute}
        className="bg-glass lg:group-hover:top-3 hover:text-blue-200  absolute lg:top-[-100px]  lg:left-1/2 transform -translate-x-1/2  top-2 right-[-10px] z-10 border-2  border-white h-9 w-9 rounded-full flex justify-center items-center"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button> */}
      <div className="w-full flex lg:flex-row flex-col justify-between ">
        <div className="bg-glass h-[91px] lg:w-[278px] w-full rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/golden-visa.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[149px] font-sans font-bold text-[16px]">
            Buy Property To Get Golden Visa In UAE
          </p>
        </div>
        <div className="bg-glass h-[91px] lg:w-[278px] w-full rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/export.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[180px] font-sans font-bold text-[16px]">
            Learn About Mortgage to Buy Property In Dubai
          </p>
        </div>
        <div className="bg-glass h-[91px] lg:w-[278px] w-full rounded-[10px] flex gap-[10px] justify-center items-center ">
          <Image
            src="/images/no-visa.png"
            width={57}
            height={57}
            alt="golden visa"
          />
          <p className="w-[149px] font-sans font-bold text-[16px]">
            No Visa! Still Buy Property in Dubai
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
