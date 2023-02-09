import React from "react";
import { useRouter } from "next/router";

function LeftHeroSection() {
  const router = useRouter()

  function HandleClick(){
    router.push('dashboard/login')
  }
  return (
    <div className="p-5  pr-0 md:pt-[50px]">
      <div className="flex flex-col gap-y-8 md:gap-y-16 text-3xl font-semibold items-center justify-content md:text-5xl xl:text-6xl lg:items-start text-center lg:text-left">
        <div>
          <p className="bg-transparent pb-5">Worried about  your <span className="text-primaryColor">Job Interview</span> ?</p>
          <p className="bg-transparent text-xl font-medium md:text-3xl">Be Interview Ready with our "<span className="text-primaryColor leading-0 text-2xl md:text-3xl font-semibold">Pre-Interview Preparation</span>" services.</p>
        </div>
        <button
        onClick={HandleClick}
        type="button"
        className=" w-[180px] h-[60px] md:w-[230px] md:h-[70px] md:text-[20px] inline-block px-6 py-2.5 bg-secondaryColor text-white font-medium text-base rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
        >
        Explore Services
        </button>
      </div>
    </div>
  );
}

export default LeftHeroSection;
