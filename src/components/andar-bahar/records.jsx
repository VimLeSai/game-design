import React from "react";

const AndarBaharRecords = () => {
  return (
    <div className="relative my-4 w-[calc(100vw_-_32px)] rounded-xl bg-darkslategray h-fit md:max-h-[calc(100vh_-_142px)] text-xs">
      <div className="p-2 w-[calc(100vw_-_48px)] md:w-96">
        <b className="block w-full my-3 text-lg text-center">Record</b>
        <div className=" box-border w-full h-px border-t-[1px] border-solid border-dark-blue" />

        <div className="flex items-center justify-between my-1 text-lightslategray">
          <div className="py-1.5 px-3.5 items-center justify-center">
            <div className="relative">Andar Bahar Record(s)</div>
          </div>
          <div className="py-1.5 px-3.5 items-center justify-center">
            <div className="relative">More</div>
          </div>
        </div>
        <div className="flex flex-col my-3 px-2 items-start justify-start gap-[20px] text-dark-blue">
          {Array(3)
            .fill({})
            .map((x) => (
              <div className="flex flex-row items-center justify-center gap-[18px]">
                <div className="relative w-16 md:w-20 h-[26px] rounded-33xl bg-white">
                  <div className="absolute top-[6px] left-[30px] inline-block w-[21.76px]">609</div>
                  <div className="absolute top-[3px] left-[4px] w-5 h-5 text-center text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue-200 w-5 h-5" />
                    <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">A</b>
                  </div>
                </div>
                <div className="relative w-16 md:w-20 h-[26px] rounded-33xl bg-white">
                  <div className="absolute top-[6px] left-[30px] inline-block w-[21.76px]">609</div>
                  <div className="absolute top-[3px] left-[4px] w-5 h-5 text-center text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-orange-200 w-5 h-5" />
                    <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">T</b>
                  </div>
                </div>
                <div className="relative w-16 md:w-20 h-[26px] rounded-33xl bg-white">
                  <div className="absolute top-[6px] left-[30px] inline-block w-[21.76px]">609</div>
                  <div className="absolute top-[3px] left-[4px] w-5 h-5 text-center text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue-200 w-5 h-5" />
                    <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">A</b>
                  </div>
                </div>
                <div className="relative w-16 md:w-20 h-[26px] rounded-33xl bg-white">
                  <div className="absolute top-[6px] left-[30px] inline-block w-[21.76px]">609</div>
                  <div className="absolute top-[3px] left-[4px] w-5 h-5 text-center text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-5 h-5" />
                    <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">B</b>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="box-border w-full h-px border-t-[1px] border-solid border-dark-blue" />
        <div className="flex">
          <div className="box-border flex-1 flex flex-row p-2.5 items-center justify-center text-sm border-b-[2px] border-solid border-blue-main">
            <div className="relative">Everyone orders</div>
          </div>
          <div className="box-border flex-1 flex flex-row p-2.5 items-center justify-center text-sm border-b-[2px] border-solid border-dark-blue">
            <div className="relative">My orders</div>
          </div>
        </div>

        <div className="flex flex-row py-[5px] px-0 items-center justify-center border-b-[1px] border-solid border-white">
          <div className="w-[137px] flex flex-row py-1.5 px-3.5 box-border items-center justify-start">
            <b className="relative">Period</b>
          </div>
          <div className="w-[69px] flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <b className="relative">User</b>
          </div>
          <div className="w-[68px] flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <b className="relative">Select</b>
          </div>
          <div className="w-[69px] flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <b className="relative">Point</b>
          </div>
        </div>
        <div className="flex flex-row py-[5px] px-0 items-center justify-center">
          <div className="w-[137px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-start">
            <div className="relative">202308090231</div>
          </div>
          <div className="w-[69px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <div className="relative">***889</div>
          </div>
          <div className="w-[68px] flex flex-row py-1.5 px-3.5 box-border items-center justify-center text-center">
            <div className="relative w-5 h-5">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-dodgerblue-200 w-5 h-5" />
              <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">A</b>
            </div>
          </div>
          <div className="w-[69px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <div className="relative">20 Rs</div>
          </div>
        </div>
        <div className="flex flex-row py-[5px] px-0 items-center justify-center">
          <div className="w-[137px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-start">
            <div className="relative">202308090231</div>
          </div>
          <div className="w-[69px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <div className="relative">***889</div>
          </div>
          <div className="w-[68px] flex flex-row py-1.5 px-3.5 box-border items-center justify-center text-center">
            <div className="relative w-5 h-5">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-orange-200 w-5 h-5" />
              <b className="absolute top-[3px] left-[calc(50%_-_5px)] inline-block w-2.5">T</b>
            </div>
          </div>
          <div className="w-[69px] h-8 flex flex-row py-1.5 px-3.5 box-border items-center justify-center">
            <div className="relative">20 Rs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndarBaharRecords;
