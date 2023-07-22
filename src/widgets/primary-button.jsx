import React from "react";

const PrimaryButton = ({ text, children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded-mini bg-light-blue w-36 flex flex-row py-3.5 px-5 box-border items-center justify-center"
    >
      <b className="relative text-white">{text || children}</b>
    </button>
  );
};

export default PrimaryButton;
