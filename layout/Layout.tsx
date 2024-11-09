import React from "react";

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <div className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 bg-main">
      <div className="bg-black bg-opacity-[50%] h-screen  backdrop-blur-[17.6px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
