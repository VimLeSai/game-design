import React from "react";
import { Link } from "react-router-dom";

function detectMobile() {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
const Menubar = () => {
  const isMobile = detectMobile();
  if (isMobile) {
    return (
      <div className="fixed bottom-[25px] z-40  left-0 h-[74px] text-3xs text-lightslategray">
        <div className="fixed bottom-[25px] z-40 left-4 h-[74px] w-[calc(100vw_-_32px)] rounded-2xl bg-darkslategray " />
        <div className="fixed bottom-[40px] z-50 left-4 flex flex-row items-center justify-around w-[calc(100vw_-_32px)]">
          <div className="h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px] text-orange-100">
            <img className="relative w-[22px] h-[22px]" alt="" src="/home-icon.svg" />
            <div className="relative">Home</div>
          </div>
          <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
            <img className="relative w-[21.71px] h-[21.71px]" alt="" src="/invite-icon.svg" />
            <div className="relative">Invite</div>
          </div>
          <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
            <img className="relative w-6 h-[19.53px]" alt="" src="/wallet-icon.svg" />
            <div className="relative">Recharge</div>
          </div>
          <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
            <img className="relative w-[18px] h-[22px]" alt="" src="/person-icon.svg" />
            <div className="relative">My</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[74px] h-[calc(100vh_-_60px)] text-3xs bg-darkslategray  text-lightslategray">
      <div className="flex flex-col items-center py-4 justify-center gap-[45px]">
        <Link to="/">
          <div className="h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px] text-orange-100">
            <img className="relative w-[22px] h-[22px]" alt="" src="/home-icon.svg" />
            <div className="relative">Home</div>
          </div>
        </Link>
        <Link to="/">
          <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
            <img className="relative w-[21.71px] h-[21.71px]" alt="" src="/invite-icon.svg" />
            <div className="relative">Invite</div>
          </div>
        </Link>
        <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
          <img className="relative w-6 h-[19.53px]" alt="" src="/wallet-icon.svg" />
          <div className="relative">Recharge</div>
        </div>
        <div className="w-11 h-11 flex flex-col p-2 box-border items-center justify-center gap-[10px]">
          <img className="relative w-[18px] h-[22px]" alt="" src="/person-icon.svg" />
          <div className="relative">My</div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
