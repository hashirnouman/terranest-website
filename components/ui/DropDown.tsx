import { ChevronDown } from "lucide-react";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

interface IDropDown {
  widthClass: string;
  selectedValue?: string;
  list: string[];
  onSelectionChange: (value: string) => void;
  placeholder?: string;
}
export const DropDown = (props: IDropDown) => {
  const { widthClass, list, selectedValue, onSelectionChange, placeholder } =
    props;
  return (
    <Select
      selectedKey={selectedValue}
      onSelectionChange={(key) => onSelectionChange(key.toString())}
      placeholder={placeholder}
    >
      <Button
        className={`bg-glass h-[48px] ${widthClass} px-[11px] rounded-[10px] outline-none flex justify-center items-center gap-[5px] border-custom`}
      >
        <SelectValue />
        <span aria-hidden="true">
          <ChevronDown size={15} />
        </span>
      </Button>
      <Popover className={`bg-glass ${widthClass} rounded-[10px] `}>
        <ListBox className="space-y-[10px] w-full px-[10px] py-[20px] ">
          {list?.map((item, index) => (
            <ListBoxItem
              className="outline-none   cursor-pointer"
              id={item}
              key={index}
            >
              {item}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};


