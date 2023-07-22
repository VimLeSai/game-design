import React from "react";

const ActionButton = () => {
  return (
    <div className="flex my-2 flex-row items-center gap-[16px] text-sm">
      <div className="flex flex-1 flex-row p-2 box-border items-center justify-center gap-[20px]">
        <div className="flex flex-row items-start justify-start relative gap-[10px]">
          <img className="relative w-5 h-5 z-[0]" alt="" src="/vector8.svg" />
          <img
            className="absolute my-0 mx-[!important] h-[18.4%] w-[44.3%] top-[27.85%] right-[27.85%] bottom-[53.75%] left-[27.85%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector9.svg"
          />
        </div>
        <b className="relative">Task Reward</b>
      </div>
      <div className="flex flex-1 flex-row p-2 box-border items-center justify-center gap-[20px]">
        <img className="relative w-5 h-5" alt="" src="/vector10.svg" />
        <b className="relative">Check In</b>
      </div>
    </div>
  );
};

export default ActionButton;
