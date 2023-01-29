import React, { useState, useEffect } from 'react'
import Lottie from "lottie-react";
import newsletterLottie from "../assets/newsletterLottie.json";
import TextField from '@mui/material/TextField';




export const Newsletter = () => {
  const [desktopsize, setDesktopSize] = useState(false);


  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1000) {
      setDesktopSize(true);
    }
  },)

  return (
    <div className="flex justify-center lg:justify-start w-full bg-white">
      <Lottie className='mt-[200px] md:mt-[0] z-0 w-full relative' animationData={newsletterLottie} />
      <div className="absolute m-[50px] p-[30px] text-center md:text-left md:p-[50px] xl:p-[200px] z-10">
        <p className="  text-s xs:text-regular md:text-2xl text-gray-600 font-medium ">Want to have an edge in your Interview Preparation?</p>
        <p className='font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-6xl'><span className='text-secondaryColor'>Subscribe</span> to our <span className='text-primaryColor'>newsletter</span>!</p>
        <div className='flex justify-center flex-col sm:flex-row items-center md:justify-start gap-x-4 pt-2'>
          <TextField sx={{ width: '90%' }} id="outlined-basic" label="E-mail address" variant="outlined" />

          <button
            type="button"
            className=" m-2 w-[110px] h-[40px]  text-[15px] lg:w-[180px] lg:h-[55px] lg:text-[20px] flex justify-center items-center px-6 py-2.5 bg-secondaryColor text-white font-medium text-base rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
