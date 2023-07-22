import React from "react";

const OutlineButton = ({ text, children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded-mini box-border w-36 flex flex-row py-3.5 px-5 bg-transparent items-center justify-center border-[1px] border-solid border-white"
    >
      <b className="relative text-white">{text || children}</b>
    </button>
  );
};

export default OutlineButton;
