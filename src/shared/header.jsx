import React from "react";
import Content from "../widgets/content";

const Header = () => {
  return (
    <header className="w-screen h-[60px] bg-dark-blue ">
      <Content>
        <div className="flex flex-row items-center justify-between h-[60px] px-4 md:px-12 gap-[200px]">
          <i className="relative font-extrabold whitespace-nowrap">
            <span>WIN-</span>
            <span className="text-blue-main">YAR</span>
          </i>
          <img className="relative object-cover w-12 h-12 rounded-lg" alt="" src="/rectangle-23@2x.png" />
        </div>
      </Content>
    </header>
  );
};

export default Header;
