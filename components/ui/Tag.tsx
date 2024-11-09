import { ReactNode } from "react";

interface ITag {
  icon: ReactNode;
  text: string;
}
export const Tag = ({ icon, text }: ITag) => {
  return (
    <div className="border-white w-auto font-secondary font-[100]  rounded-[2px] px-[3px] border-[0.4px] flex  py-[6px]  overflow-hidden h-[20px] items-center gap-[5px]  text-[9px]">
      {icon}
      {text}
    </div>
  );
};
