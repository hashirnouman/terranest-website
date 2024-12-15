import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

interface INavLink {
  href: string;
  title: string;
}
interface INavDropdown {
  widthClass: string;
  selectedValue?: string;
  list: INavLink[];
  onSelectionChange: (value: string) => void;
  placeholder?: string;
}
export const NavDropdown = (props: INavDropdown) => {
  const { widthClass, list, selectedValue, placeholder } =
    props;
  const router = useRouter();
  return (
    <Select
      selectedKey={selectedValue}
      onSelectionChange={(key) => router.push(key as string)}
      placeholder={placeholder}
      className="overflow-hidden relative"
    >
      <Button
        className={`h-full ${widthClass}  rounded-[10px] outline-none flex justify-center items-center  `}
      >
        <SelectValue />
        <span aria-hidden="true">
          <ChevronDown size={15} />
        </span>
      </Button>
      <div
        className={`absolute bottom-0 left-0 right-0 h-1  mt-2 rounded transition-all  ${widthClass}`}
      />
      <Popover
        className={`bg-glass ${widthClass} rounded-[10px] overflow-hidden `}
      >
        <ListBox className="space-y-[10px] w-full px-[10px] py-[5px] overflow-hidden">
          {list?.map((item) => (
            <ListBoxItem
              className="outline-none   cursor-pointer"
              id={item.href}
              key={item.href}
            >
              <Link href={`/${item.href}`}>{item.title}</Link>
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};
