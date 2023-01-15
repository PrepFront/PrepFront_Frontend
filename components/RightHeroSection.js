import React from "react";
import Lottie from "lottie-react";
import heroGIF from "../assets/heroGIF.json";

function RightHeroSection() {
  // const lottieStyle = {
  //   height: 60%,
  //   width : 90%,
  // };
  
  return (
    <div className=" w-[50%] h-[50%] md:w-[800px] md:h-[630px] flex lg:translate-y-[170px] z-100">
      <Lottie animationData={heroGIF}
       />
    </div>
  );
}

export default RightHeroSection;
