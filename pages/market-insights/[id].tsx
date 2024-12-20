import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const MarketInsightsDetails = () => {
  return (
    <div className="px-[30px] pt-[36px] pb-[28px]">
      <Head>
        <title>Market Insights</title>
        <meta name="description" content="Market insights" />
      </Head>
      <div className="w-full rounded-[20px] bg-glass h-full py-[26px]  pl-[18px]">
        <div className="w-full flex justify-center mb-[32px] h-full">
          <h1 className="font-secondary font-bold text-[42px] text-center w-[874px] ">
            Make better-informed property decisions today with the latest Dubai
            property market reports!
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/sample1.png"
            width={1023}
            height={585}
            alt="image"
            className="rounded-[31px] h-[585px] w-[1023px] object-cover"
          />
          <div className="mt-[26px] text-center max-w-[996px] ">
            <h6 className="font-poppins font-semibold text-[28px] mb-[20px]">
              Make better-informed property decisions today with the latest
              Dubai.
            </h6>
            <p className="text-left font-sans font-medium ">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              type and scrambled it to make a type specimen book.lorem Ipsum is
              simply dummy text of the. lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley type and scrambled it to make a type
              specimen book.lorem Ipsum is simply dummy text of the. lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              type and scrambled it to make a type specimen book.lorem Ipsum is
              simply dummy text of the.
            </p>

            <p className="text-left mb-[36px] ">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              type and scrambled it to make a type specimen book.lorem Ipsum is
              simply dummy text of the.
            </p>
          </div>
          <button className="mt-[36px] flex justify-center items-center bg-white text-black transition-all ease-in-out hover:bg-[#34249E] hover:text-white font-poppins font-medium underline text-[25.6px] w-[378px] h-[81px] rounded-[12.19px] border-custom">
            View Reports here
          </button>
          <div className="flex flex-col justify-start items-start w-[996px] ">
            <p className="font-poppins font-semibold text-[36px] text-left">
              Share
            </p>
            <div className="flex gap-[7px] mt-[26px]">
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/fb.svg"
                  width={18}
                  height={18}
                  alt="facebook"
                />
              </Link>
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/linkedin.svg"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </Link>
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/x.svg"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </Link>
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/youtube.svg"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </Link>
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </Link>
              <Link
                href=""
                className="w-[41px] h-[41px] rounded-[45px] bg-white flex justify-center items-center"
              >
                <Image
                  src="/icons/tiktok.svg"
                  width={18}
                  height={18}
                  alt="linkedin"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightsDetails;
