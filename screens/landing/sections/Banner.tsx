import { AnimatedTextTyping } from "@/components";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-start">
      <AnimatedTextTyping
        className="text-xl text-center text-white sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] "
        text="We create the digital experiences products and ventures of tomorrow"
      />
    </div>
  );
};

export default Banner;
