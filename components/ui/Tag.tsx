import { ReactNode } from "react";

interface ITag {
  icon: ReactNode;
  text: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
export const Tag = ({ icon, text, width, height, fontSize }: ITag) => {
  return (
    <div
      className="border-white w-[100px] font-secondary font-[100]  rounded-[3px] px-[3px] border-[0.4px] flex  py-[6px]  overflow-hidden h-[25px] items-center gap-[5px] justify-center  text-[10px]"
      style={{ width: width, height: height, fontSize: fontSize }}
    >
      {icon}
      {text}
    </div>
  );
};
