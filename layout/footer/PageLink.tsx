import React from "react";
interface IPageLink {
  title: string;
}
const PageLink = ({ title }: IPageLink) => {
  return (
    <div className="w-[150px]">
      <h6 className="text-[21px] font-sans font-bold mb-[15px]">{title}</h6>
      <ul className="text-[14px] font-sans font-medium w-full">
        <li>Transactions</li>
        <li>Exclusive Sale Offer</li>
        <li>Employee of the Month</li>
        <li>Properties Of Week</li>
        <li>Why Dubai?</li>
      </ul>
    </div>
  );
};

export default PageLink;
