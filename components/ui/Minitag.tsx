import { ReactNode } from "react";

interface ITag {
  icon: ReactNode;
  text: string;
}
export const MiniTag = ({ icon, text }: ITag) => {
  return (
    <div className="border-white overflow-hidden border flex justify-center gap-[3px] items-center h-[24px] rounded-[3px] text-[10px] min-w-auto px-[6px] py-[4px] ">
      <div>{icon}</div>
      {text}
    </div>
  );
};
