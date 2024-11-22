import React from "react";
import Header from "./header";
import Footer from "./footer";

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 bg-main pt-[32px] px-[30px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
