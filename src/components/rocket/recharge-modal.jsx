import React, { useState } from "react";

const RechargeModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto md:max-w-3xl md:mx-auto md:my-6">
              <div className="relative p-3 border-0 rounded-lg shadow-lg outline-none md:w-full rounded-t-xl bg-darkslategray focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-gray-300 border-solid rounded-t ">
                  <h3 className="text-3xl m-0 font=semibold text-white text-center">
                    <b className="">Join Bahar</b>
                  </h3>
                  <button
                    className="float-right text-black bg-transparent border-0"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 py-0 text-xl text-white bg-gray-400 rounded-full opacity-7">x</span>
                  </button>
                </div>

                <div className="text-lg ">
                  <div className=" box-border w-full h-px border-t-[1px] border-solid border-dark-blue" />
                  <div className="m-2">
                    <div className="inline-block my-2">Contact Money</div>
                    <div className="flex flex-row items-center justify-between mt-2 mb-4 text-center text-3xs text-lightslategray">
                      <div className="rounded-8xs bg-light-blue w-[52px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                        <b className="relative">+20</b>
                      </div>
                      <div className="rounded-8xs bg-light-blue w-[52px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                        <b className="relative">+50</b>
                      </div>
                      <div className="rounded-8xs bg-light-blue w-[58px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                        <b className="relative">+100</b>
                      </div>
                      <div className="rounded-8xs bg-light-blue w-[63px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                        <b className="relative">+1000</b>
                      </div>
                      <div className="rounded-8xs bg-light-blue w-[63px] h-[25px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                        <b className="relative">+2000</b>
                      </div>
                    </div>
                  </div>
                  <div className="m-2 flex flex-row items-start justify-start gap-[5px] text-center text-base text-lightslategray">
                    <div className="rounded-8xs bg-darkgray w-full h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-start">
                      <b className="relative leading-[130.4%]">Rs. 200</b>
                    </div>
                    <div className="rounded-8xs bg-blue-main w-[160px] h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-black">
                      <b className="relative leading-[130.4%]">Recharge</b>
                    </div>
                  </div>

                  <div className="mt-4 mb-2">
                    <div className="my-2">Number</div>
                    <div className="rounded-8xs bg-light-blue  flex flex-col p-2.5 box-border items-center justify-center text-center text-base text-lightslategray">
                      <div className="flex flex-row items-start justify-start gap-[34px]">
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <div className="rounded-8xs bg-darkgray w-[51px] h-[35px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                            <b className="relative">-5</b>
                          </div>
                          <div className="rounded-8xs bg-darkgray w-[51px] h-[35px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                            <b className="relative">-1</b>
                          </div>
                        </div>
                        <b className="relative text-[26px]">1</b>
                        <div className="flex flex-row items-start justify-start gap-[4px]">
                          <div className="rounded-8xs bg-darkgray w-[55px] h-[35px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                            <b className="relative">+1</b>
                          </div>
                          <div className="rounded-8xs bg-darkgray w-[55px] h-[35px] flex flex-row py-3.5 px-5 box-border items-center justify-center">
                            <b className="relative">+5</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full m-4 text-base text-center">
                    <span>{`Total contact money is `}</span>
                    <b>10</b>
                  </div>
                  <div className="m-2 rounded-3xs bg-crimson  h-[58px] flex flex-row py-3.5 px-5 box-border items-center justify-center text-center text-base">
                    <b className="relative leading-[130.4%]">Confirm</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RechargeModal;
