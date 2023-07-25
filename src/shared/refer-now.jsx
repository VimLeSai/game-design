import React from "react";

const ReferNowCard = () => {
  return (
    <div className="relative md:w-[360px] flex items-center justify-center h-40 text-xs rounded-xl box-border p-4 border-[1px] border-solid border-whitesmoke">
      <div className="">
        <div className="h-[70px]">
          <div className="my-2">
            <p className="m-0">Refer A friends and earn 259 bounce</p>
            <p className="m-0">for each legitimate invite you send.</p>
          </div>
          <div className="h-8 my-2 text-3xs">
            <b className="text-xs">New Register</b>
            <div className="">Upon invitation, the invitee will receive a reward of 20</div>
          </div>
        </div>
        <div className=" rounded-mini mt-3 bg-orange-100 w-[300px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-base text-dark-blue">
          <div className="relative font-extrabold">Refer Now</div>
        </div>
      </div>
    </div>
  );
};

export default ReferNowCard;
