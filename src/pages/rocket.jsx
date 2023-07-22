import { useState } from "react";
import RechargeModal from "../components/rocket/recharge-modal";
import Layout from "../shared/layout";
import SubHeader from "../shared/sub-header";

const RocketPage = () => {
  const [showModal, setShowModal] = useState(false);
  const GrowthTags = (
    <div className="flex flex-row items-center justify-between mt-2 mb-4 text-xs ">
      <div className="rounded-8xs bg-mediumseagreen w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-dodgerblue-200 w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-tomato w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-dodgerblue-200 w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-tomato w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-dodgerblue-200 w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <div className="relative">1.37x</div>
      </div>
      <div className="rounded-8xs bg-gray w-[45px] h-[25px] flex flex-row py-3.5 px-2.5 box-border items-center justify-center">
        <img className="relative w-[21px] h-[21px] overflow-hidden shrink-0" alt="" src="/mdiclockarrow.svg" />
      </div>
    </div>
  );

  return (
    <>
      <Layout>
        <>
          <SubHeader subTitle="Rocket" showRule />
          <div className="overflow-y-auto flex items-top justify-center gap-[40px]">
            <div className="relative my-4 w-96 h-[calc(100vh_-_142px)]">
              {GrowthTags}
              <div className="relative p-2 my-4 text-base text-center rounded-lg text-lightslategray font-fs-elliot-pro bg-darkslategray">
                <div className=" flex flex-row items-start justify-start gap-[5px]">
                  <div className="rounded-8xs bg-darkgray w-full h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-start">
                    <b className="relative leading-[130.4%]">Rs. 200</b>
                  </div>
                  <div className="rounded-8xs bg-orange-100 w-[180px] h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-black">
                    <button className="relative leading-[130.4%] bg-orange-100 cursor-pointer uppercase" onClick={() => setShowModal(true)}>
                      <p className="m-0">
                        <b>Started</b>
                      </p>
                      <p className="m-0 text-3xs">(next round)</p>
                    </button>
                  </div>
                </div>

                <div className="flex flex-row mt-4 items-center justify-center gap-[101px] text-sm text-white">
                  <div className="flex flex-row items-center justify-center gap-[10px]">
                    <div className="rounded box-border w-[11px] h-[11px] border-[1px] border-solid border-gray" />
                    <b className="relative">AUTOSTOP</b>
                  </div>
                  <div className="rounded-8xs bg-darkgray w-[120px] h-[35px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-base text-lightslategray">
                    <b className="relative">X2.00</b>
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

              <div className="relative w-full my-4 text-xs text-center text-white cursor-pointer h-fit bg-darkslategray rounded-xl font-fs-elliot-pro">
                <div className="flex items-center text-sm text-left ">
                  <div className="flex-1 box-border flex flex-row p-2.5 items-center justify-center border-b-[2px] border-solid border-[#111422]">
                    <div className="relative">Everyone orders</div>
                  </div>
                  <div className="flex-1 box-border  flex flex-row p-2.5 items-center justify-center border-b-[2px] border-solid border-blue-main">
                    <div className="relative">My orders</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center ">
                  <div className="relative flex rounded-xl p-4 gap-3 m-2 border-[1px] border-solid border-white w-80">
                    <div className="flex-1 w-1/2">
                      <div className="flex flex-row items-center justify-start m-1">
                        <div className="relative">
                          <span>{`Periods: `}</span>
                          <b>2112290230</b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start m-1">
                        <div className="relative">
                          <span>{`Time: `}</span>
                          <b>12/28 02:18</b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start m-1">
                        <div className="relative">
                          <span>{`point: `}</span>
                          <b>400</b>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 w-1/2">
                      <div className="flex flex-row items-center justify-start m-1">
                        <div className="relative">
                          <span>{`Amount: `}</span>
                          <b>+1290.90</b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start m-1 ">
                        <div className="relative">
                          <span>{`Stop: `}</span>
                          <b>2.22x</b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start m-1">
                        <div className="relative">
                          <span>{`Result: `}</span>
                          <b>-</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RechargeModal showModal={showModal} setShowModal={setShowModal} />
        </>
      </Layout>
    </>
  );
};

export default RocketPage;
