import Aside from "@/components/pages/Home/Aside";
import Feature from "@/components/pages/Home/Feature";
import Section from "@/components/pages/Home/Section";
import Stats from "@/components/pages/Home/Stats";
import WhyDubai from "@/components/pages/Home/WhyDubai";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="mt-[10px]">
        <div className="flex md:flex-row flex-col-reverse gap-[10px] ">
          <Aside />
          <div className="lg:w-[80%] w-full flex flex-col gap-[10px]">
            <Section />
            <Stats />
          </div>
        </div>
        <Feature />
        <WhyDubai />
      </div>
    </>
  );
}
