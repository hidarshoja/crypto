import React from 'react'
import TypingEffect from './TypingEffect'

export default function SlideHeader() {
  return (
    <div className="flex flex-col lg:flex-row pt-48 items-center justify-center w-full bg-sectionBack1 p-8">
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0">
      <img
        src="/img/crypto1.svg"
        alt="Crypto Image"
        className="max-w-[80%] h-auto"
      />
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className=" flex flex-col h-36 lg:h-24  items-center gap-2 font-semibold text-text2 space-y-2">
        <span className="text-xl text-text2">
          بازار معاملات B2B را با ما تجربه کنید{" "}
        </span>
        <TypingEffect />
      </p>
      <div className="mt-6 flex flex-col gap-2 w-full lg:flex-row items-center justify-center  space-y-4 lg:space-y-0 lg:space-x-4">
        <input
          type="text"
          placeholder="شماره تماس خود را وارد کنید "
          className="w-full lg:w-auto px-4 py-2 border border-text2 rounded-md text-text2 placeholder-text2 focus:outline-none focus:ring-2 focus:ring-text2"
        />
        <button className="px-6 py-2 bg-text2 text-content2 rounded-md hover:bg-[#ffcc00]">
          از اینجا شروع کنید
        </button>
      </div>
    </div>
  </div>
  )
}
