import React, { useState, useEffect } from 'react'
import Lottie from "lottie-react";
import newsletterLottie from "../assets/newsletterLottie.json";
import { Input } from "@nextui-org/react";


export const Newsletter = () => {
  

  return (
    <div className="flex justify-center lg:justify-start w-full bg-white">
      <Lottie className='mt-[200px] md:mt-[0] z-0 w-full relative' animationData={newsletterLottie} />
      <div className="absolute m-[50px] p-[30px] text-center md:text-left md:p-[50px] xl:p-[200px] z-10">
        <p className="  text-s xs:text-regular md:text-2xl text-gray-600 font-medium ">Want to have an edge in your Interview Preparation?</p>
        <p className='font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-6xl'><span className='text-secondaryColor'>Subscribe</span> to our <span className='text-primaryColor'>newsletter</span>!</p>
        <div className='flex justify-center flex-col sm:flex-row items-center md:justify-start gap-x-5 pt-2'>
          <Input

            size= 'md'
            css={{
              width: '100',
              padding:20,
          }}
            placeholder="Enter Your Email Address"
          />
          <button
            type="button"
            className=" w-[110px] h-[40px]  text-[15px] lg:w-[180px] lg:h-[45px] lg:text-[20px] flex justify-center items-center px-6 py-2.5 bg-secondaryColor text-white font-medium text-base rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
