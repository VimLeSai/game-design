import React from "react";
import Header from "./header";
import Menubar from "./menu-bar";

const Layout = ({ children }) => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden text-5xl text-left text-white cursor-pointer bg-backgound font-fs-elliot-pro"
      style={{
        backgroundImage: "url('/group-501.svg')",
      }}
    >
      <Header />
      <main className="h-[calc(100vh_-_60px)] flex w-screen overflow-hidden">
        <div className="hidden md:block w-[74px] h-[calc(100vh_-_60px)]">
          <Menubar />
        </div>
        <div className="w-[calc(100vw_-_74px)] max-h-[calc(100vh_-_60px)] overflow-x-hidden overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
