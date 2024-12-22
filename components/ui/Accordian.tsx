import { Plus } from "lucide-react";
import { useState } from "react";

interface IAccordian {
  title: string;
  content: string;
}

const Accordion = ({
  title = "How does TanahAir create website content without knowing our Business plan?",
  content = "TanahAir will schedule interviews with customers who have used our services and discuss business about the product and help solve the problem so that it becomes the best solution.",
}: Partial<IAccordian>) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-custom rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="w-full p-4 flex justify-between items-center cursor-pointer  transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <h6 className="font-sans font-semibold text-base max-w-[385px]">
          {title}
        </h6>
        <Plus
          className={`transform transition-transform duration-300 ease-in-out ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
