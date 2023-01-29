import React from "react";
import Lottie from "lottie-react";
import heroGIF from "../assets/heroGIF.json";

function RightHeroSection() {  
  return (
    <div className=" w-[100%] h-[100%] md:w-[800px] md:h-[630px] flex lg:translate-y-[170px] z-100">
      <Lottie animationData={heroGIF}
       />
    </div>
  );
}

export default RightHeroSection;
