import React from "react";

export const Hero = () => {
  return (
    <div className="py-2 px-4 flex items-center flex-col w-full  my-20">
      <button className="flex items-center justify-between gap-1.5 rounded-full border px-4 py-1 border-gray-200 hover:bg-gray-200 transition duration-200 cursor-pointer bg-gary-100 text-gray-600">
        what are the stages tax Requriments?
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </button>
      <div className="flex items-center justify-between flex-col">
        <h1 className="text-6xl mt-10 text-black tracking-tight text-center font-bold ">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="text-xl text-gray-700 text-center tracking-tighter font-medium leading-6 mt-2">
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br /> Set up in 10 mins. Back to building by 10:55pm.
        </p>
      </div>
      <div className="btn flex justify-between items-center gap-5 mt-10">

        <button
          className="[text-shadow:0px_1px_1px_rgba(0,_0,_0,_0.16)] shadow-[0px_1px_4px_-1px_rgba(30,_31,_37,_0.38)] hover:bg-[#2262C7] active:bg-[#215BB9] 
        transition-background duration-150 ease-in-out bg-[#2679F3] text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Get Stated
        </button>

        <button
          className=" hover:bg-neutral-300 active:bg-neutral-300
        transition-background duration-150 ease-in-out bg-transparent text-black text-sm font-medium px-4 py-2 rounded-lg"
        >
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};
