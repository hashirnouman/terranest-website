import Aside from "@/components/pages/Home/Aside";
import Feature from "@/components/pages/Home/Feature";
import Section from "@/components/pages/Home/Section";
import Stats from "@/components/pages/Home/Stats";

export default function Home() {
  return (
    <div className="mt-[10px]">
      <div className="flex gap-[10px] ">
        <Aside />
        <div className="w-[85%]">
          <Stats />
        </div>
      </div>
      <Feature/>
    </div>
  );
}
