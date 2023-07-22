import React from "react";
import { Link } from "react-router-dom";

const SubHeader = ({ subTitle, showRule, backLink = "/" }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: "-16px",
        marginTop: "-16px",
        width: "calc(100vw - 42px)",
        marginLeft: "-16px",
        background: "#2a324a",
      }}
      className=" bg-dark-blue h-[45px] flex flex-row items-center justify-between gap-[78px] text-xl text-lightslategray z-10"
    >
      <Link to={backLink}>
        <div className="h-[45px] overflow-hidden flex flex-row p-2 box-border items-center justify-center">
          <img className="relative w-2.5 h-[17.47px]" alt="" src="/vector5.svg" />
        </div>
      </Link>
      <b className="relative">{subTitle}</b>
      <div className="h-[45px] flex flex-row p-2 box-border items-center justify-center text-xs">
        {showRule && <div className="relative">Rule</div>}
      </div>
    </div>
  );
};

export default SubHeader;
