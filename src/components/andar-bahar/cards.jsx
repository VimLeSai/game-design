import React from "react";

const AndarBaharGameCards = () => {
  return (
    <div className="relative my-4 h-[calc(100vh_-_142px)]">
      <b className="block w-full h-12 mx-4 my-4 text-center text-9xl">01 : 90</b>

      <div className="flex items-center justify-between mb-10 w-96">
        <div className="flex-1"></div>
        <div className="flex justify-center flex-1">
          <div className="relative w-[103.46px] h-[138.56px] text-3xl">
            <div className=" rounded-[9.24px] bg-white w-[103.46px] h-[138.56px]" />
            <div className="absolute top-[39.72px] left-[51.73px] bg-salmon w-[41.17px] h-[41.17px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
            <div className="absolute top-[6px] left-[13.39px] bg-salmon w-[9.8px] h-[9.8px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
            <div className="absolute top-[119.16px] left-[90.99px] bg-salmon w-[9.8px] h-[9.8px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
            <b className="absolute top-[56.35px] left-[calc(50%_-_6.47px)]">5</b>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex items-center justify-between w-96">
        <div className="flex justify-center flex-1">
          <div className="relative w-[103.46px] h-[138.56px] text-lg text-gray">
            <div className="absolute top-[0px] left-[0px] rounded-[9.24px] bg-white w-[103.46px] h-[138.56px]" />
            <b className="absolute top-[59px] left-[calc(50%_-_25.73px)]">Andar</b>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <div className="relative">
            <div className="rounded-[9.24px] bg-blue-main box-border w-[107.15px] h-[142.25px] border-[1.8px] border-solid border-white" />
            <div className="absolute -top-[7.5px] rounded-[9.24px] bg-blue-main box-border w-[107.15px] h-[142.25px] border-[1.8px] border-solid border-white" />
            <div className="absolute -top-[15px] rounded-[9.24px] bg-blue-main box-border w-[107.15px] h-[142.25px] border-[1.8px] border-solid border-white" />
            <div className="absolute -top-[22.5px] rounded-[9.24px] bg-blue-main box-border w-[107.15px] h-[142.25px] border-[1.8px] border-solid border-white" />
            <div className="absolute -top-[30px] rounded-[9.24px] bg-white box-border w-[107.15px] h-[142.25px] border-[1.8px] border-solid border-blue-main">
              <i className="absolute font-extrabold top-[calc(50%_-_14px)] text-dark-blue">
                <span>WIN-</span>
                <span className="text-blue-main">YAR</span>
              </i>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <div className="relative w-[103.46px] h-[138.56px] text-lg text-gray">
            <div className="absolute top-[0px] left-[0px] rounded-[9.24px] bg-white w-[103.46px] h-[138.56px]" />
            <b className="absolute top-[59px] left-[calc(50%_-_25.73px)]">Bahar</b>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-4 w-96">
        <div className="flex w-[103.46px] flex-col items-center justify-center flex-1">
          <div className="rounded-mini bg-dodgerblue-100 w-[103.46px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
            <b className="relative">Andar</b>
          </div>
          <div className="my-2 text-xs text-center">1:2</div>
        </div>
        <div className="flex w-[103.46px] flex-col items-center justify-center flex-1">
          <div className=" rounded-mini bg-orange-200 w-[103.46px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
            <b className="relative">Tie</b>
          </div>
          <div className="my-2 text-xs text-center">1:9</div>
        </div>
        <div className="flex w-[103.46px] flex-col items-center justify-center flex-1">
          <div className=" rounded-mini bg-tomato w-[103.46px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
            <b className="relative">Bahar</b>
          </div>
          <div className="my-2 text-xs text-center">1:2</div>
        </div>
      </div>
    </div>
  );
};

export default AndarBaharGameCards;
