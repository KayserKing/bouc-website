import { AnimatedTextTyping, TrueFocus } from "@/components";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-start">
      {/* <AnimatedTextTyping
        className="text-xl text-center text-white sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] "
        text="We create the digital experiences products and ventures of tomorrow"
      /> */}
      <TrueFocus
        sentence="We create the digital experiences products and ventures of tomorrow"
        manualMode={false}
        blurAmount={2}
        borderColor="#715bff"
        animationDuration={0.5}
        pauseBetweenAnimations={1.5}
        glowColor="white"
      />
    </div>
  );
};

export default Banner;
