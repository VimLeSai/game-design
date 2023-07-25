import React from 'react'
import PrimaryButton from '../../widgets/primary-button'
import OutlineButton from '../../widgets/outline-button'

const WalletCard = () => {
  return (
    <div className="flex p-4 rounded-xl md:w-[360px] z-[0] bg-blue-main flex-col items-start justify-start gap-[10px]">
        <div className="w-full flex flex-col items-start justify-start gap-[12px] z-[1]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="box-border flex flex-col items-center justify-center p-2 w-9">
                <img className="relative w-7 h-[22.79px]" alt="" src="/wallet-icon.svg" />
              </div>
              <b className="relative">1200.67</b>
              <div className="flex flex-col items-center justify-center p-2">
                <img className="relative w-[22px] h-[19.95px]" alt="" src="/vector7.svg" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-around gap-[16px] text-sm">
            <PrimaryButton text="Recharge" />
            <OutlineButton text="Withdraw" />
          </div>
        </div>
      </div>
  )
}

export default WalletCard