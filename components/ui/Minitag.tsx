import { ReactNode } from "react";

interface ITag {
  icon: ReactNode;
  text: string;
}
export const MiniTag = ({ icon, text }: ITag) => {
  return (
    <div className="border-white border flex justify-center items-center h-[40px] rounded-[10px] text-[10px] w-auto py-[15px]">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
