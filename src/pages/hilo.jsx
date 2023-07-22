import Layout from "../shared/layout";
import SubHeader from "../shared/sub-header";

const HiloPage = () => {
  const CardNoFive = (
    <div className="relative w-[103.46px] h-[138.56px] text-left text-3xl">
      <div className="absolute top-[0px] left-[0px] rounded-[9.24px] bg-white w-[103.46px] h-[138.56px]" />
      <div className="absolute top-[39.72px] left-[51.73px] rounded-10xs bg-salmon w-[41.17px] h-[41.17px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <div className="absolute top-[6px] left-[13.39px] bg-salmon w-[9.8px] h-[9.8px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <div className="absolute top-[119.16px] left-[90.99px] bg-salmon w-[9.8px] h-[9.8px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
      <b className="absolute top-[56.35px] left-[calc(50%_-_6.47px)]">5</b>
    </div>
  );
  return (
    <>
      <Layout>
        <>
          <SubHeader subTitle="Hilo" showRule />
          <div className="overflow-y-auto flex items-top justify-center gap-[40px]">
            <div className="relative my-4 h-[calc(100vh_-_142px)]">
              <div className="flex my-4 text-center w-80 font-fs-elliot-pro">
                <div className="flex items-center justify-center flex-1">{CardNoFive}</div>
                <div className="flex flex-col items-center justify-center flex-1 gap-4">
                  <div className=" rounded-mini box-border w-[120px] flex flex-row py-3.5 px-5 items-center justify-center border-[1px] border-solid border-white">
                    <b className="relative text-base">
                      <p className="m-0">High</p>
                      <p className="m-0">1.18 x</p>
                    </b>
                  </div>
                  <div className="rounded-mini box-border w-[120px] flex flex-row py-3.5 px-5 items-center justify-center border-[1px] border-solid border-white">
                    <b className="relative text-base">
                      <p className="m-0">Low</p>
                      <p className="m-0">1.21 x</p>
                    </b>
                  </div>
                </div>
              </div>
              <div className="relative p-2 text-base text-center rounded-lg text-lightslategray font-fs-elliot-pro bg-darkslategray">
                <div className=" flex flex-row items-start justify-start gap-[5px]">
                  <div className="rounded-8xs bg-gray w-full h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-start">
                    <b className="relative leading-[130.4%]">Rs. 200</b>
                  </div>
                  <div className="rounded-8xs bg-orange-100 w-[150px] h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-white">
                    <b className="relative leading-[130.4%]">STOP</b>
                  </div>
                </div>
                <div className="my-3 flex flex-row items-center justify-center gap-[8px] text-3xs">
                  <div className="rounded-8xs bg-light-blue  h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                    <b className="relative">+20</b>
                  </div>
                  <div className="rounded-8xs bg-light-blue  h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                    <b className="relative">+50</b>
                  </div>
                  <div className="rounded-8xs bg-light-blue  h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                    <b className="relative">+100</b>
                  </div>
                  <div className="rounded-8xs bg-light-blue  h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                    <b className="relative">+1000</b>
                  </div>
                  <div className="rounded-8xs bg-light-blue  h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                    <b className="relative">+2000</b>
                  </div>
                </div>
                <div className="my-1 font-extrabold text-center text-5xs">WIN-YAR HILO</div>
                <div className="flex items-center justify-between">
                  <img className="w-24 h-9" alt="" src="/group-41.svg" />
                  <img className="w-24 h-9" alt="" src="/group-42.svg" />
                </div>
              </div>
              {SequncialCards()}
            </div>
            <div className="relative rounded-xl bg-darkslategray my-4 h-fit max-h-[calc(100vh_-_142px)]">
              <div className="p-4 w-96">
                <div className="flex items-center">
                  <div className="flex-1 box-border  flex  p-2.5 items-center justify-center border-b-[2px] border-solid border-dark-blue">
                    <div className="relative whitespace-nowrap">Everyone orders</div>
                  </div>
                  <div className="flex-1  box-border w-[172px] flex  p-2.5 items-center justify-center border-b-[2px] border-solid border-blue-main">
                    <div className="relative">My orders</div>
                  </div>
                </div>

                <div className="my-4 rounded-xl flex flex-col p-[15px] items-center justify-center text-xs border-[1px] border-solid border-white">
                  <div className="flex flex-row my-3 items-end justify-start gap-[20px]">
                    <div className="rounded-8xs bg-tomato w-[52px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-center text-3xs">
                      <b className="relative">LOSE</b>
                    </div>
                    <div className="flex flex-row py-1.5 px-3.5 items-center justify-center">
                      <div className="relative">Points: 20</div>
                    </div>
                    <div className="flex flex-row py-1.5 px-3.5 items-center justify-center">
                      <div className="relative">05/25 09:22 pm</div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center gap-[20px]">{SequncialCards()}</div>
                  <div className="flex flex-row items-center justify-center gap-[23px]">
                    <div className="flex flex-row py-1.5 px-3.5 items-center justify-center">
                      <div className="relative">Pass: 2</div>
                    </div>
                    <div className="flex flex-row py-1.5 px-3.5 items-center justify-center">
                      <div className="relative">Multiple: 0.000X</div>
                    </div>
                    <div className="flex flex-row py-1.5 px-3.5 items-center justify-center">
                      <div className="relative">00.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );

  function SequncialCards() {
    return (
      <div className="my-4 flex items-center justify-center h-[95px] text-[15.08px]">
        <div className="relative w-[70.93px] h-[95px]">
          <div className="absolute top-[0px] left-[0px] rounded-[6.33px] bg-white w-[70.93px] h-[95px]" />
          <div className="absolute top-[27.23px] left-[35.47px] rounded-10xs bg-salmon w-[28.23px] h-[28.23px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[4.12px] left-[9.18px] bg-salmon w-[6.72px] h-[6.72px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[81.7px] left-[62.38px] bg-salmon w-[6.72px] h-[6.72px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
          <b className="absolute top-[38.63px] left-[calc(50%_-_4.43px)]">5</b>
        </div>
        <img className="relative w-[33px] h-[34px] -mx-1 z-10" alt="" src="/group-301.svg" />
        <div className="relative w-[70.93px] h-[95px]">
          <div className="rounded-[6.33px] bg-white w-[70.93px] h-[95px]" />
          <img
            className="absolute top-[calc(50%_-_19.5px)] left-[calc(50%_-_19.4px)] w-[39px] h-10"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="absolute h-[10.53%] w-[14.1%] top-[4.21%] right-[80.17%] bottom-[85.26%] left-[5.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute h-[10.53%] w-[14.1%] top-[85.26%] right-[6.86%] bottom-[4.21%] left-[79.04%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
          <b className="absolute top-[39px] left-[calc(50%_-_4.4px)]">4</b>
        </div>
        <img className="relative w-[33px] h-[34px] -mx-1 z-10" alt="" src="/group-46.svg" />
        <div className="relative w-[70.93px] h-[95px]">
          <div className="rounded-[6.33px] bg-white w-[70.93px] h-[95px]" />
          <img
            className="absolute h-[42.11%] w-[52.16%] top-[29.47%] right-[23.78%] bottom-[28.42%] left-[24.06%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
          <img
            className="absolute h-[10.53%] w-[12.69%] top-[4.21%] right-[81.58%] bottom-[85.26%] left-[5.73%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="absolute h-[10.53%] w-[12.69%] top-[85.26%] right-[6.86%] bottom-[4.21%] left-[80.45%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <b className="absolute top-[39px] left-[calc(50%_-_4.4px)]">3</b>
        </div>
      </div>
    );
  }
};

export default HiloPage;
