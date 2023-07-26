import React from "react";
import { Link } from "react-router-dom";

const SubHeader = ({ subTitle, showRule, backLink = "/" }) => {
  return (
    <div className="sub-header bg-dark-blue h-[45px] flex flex-row items-center justify-between gap-[78px] text-xl text-lightslategray z-10">
      <Link to={backLink}>
        <div className="h-[45px] overflow-hidden flex flex-row p-2 box-border items-center justify-center">
          <img className="relative w-2.5 h-[17.47px]" alt="" src="/vector5.svg" />
        </div>
      </Link>
      <b className="relative text-base whitespace-nowrap">{subTitle}</b>
      <div className="h-[45px] flex flex-row p-2 box-border items-center justify-center text-xs">
        {showRule && <div className="relative">Rule</div>}
      </div>
    </div>
  );
};

export default SubHeader;
