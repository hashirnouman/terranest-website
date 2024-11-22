import Aside from "@/components/pages/Home/Aside";
import Feature from "@/components/pages/Home/Feature";
import Section from "@/components/pages/Home/Section";
import Stats from "@/components/pages/Home/Stats";
import WhyDubai from "@/components/pages/Home/WhyDubai";

export default function Home() {
  return (
    <div className="mt-[10px]">
      <div className="flex gap-[10px] ">
        <Aside />
        <div className="w-[80%] flex flex-col gap-[10px]">
          <Section />
          <Stats />
        </div>
      </div>
      <Feature />
      <WhyDubai />
    </div>
  );
}
