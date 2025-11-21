import React from "react";
import Container from "./Container";

const Page = () => {
  return (
    <div className="flex flex-col items-stretch h-screen relative top-0 [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full ">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container />
      <div className="relative bg-amber-200 h-px w-full inset-0">
        <div className="absolute inset-y-0 top-0 h-px w-full bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="w-6xl h-screen flex justify-center items-center mx-auto mt-5">
          <img
            src="hero-ui-v5.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
