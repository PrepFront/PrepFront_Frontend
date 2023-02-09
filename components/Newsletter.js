import React, { useState, useEffect, useRef } from 'react'
import Lottie from "lottie-react";
import newsletterLottie from "../assets/newsletterLottie.json";
import TextField from '@mui/material/TextField';
import validator from 'validator'
import axios from "axios";

export const Newsletter = () => {

  const email = useRef();

  const [desktopsize, setDesktopSize] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [helpertext, setHelperText] = useState('');


  function clickHandler() {
    console.log(email.current.value)

    const inputMail = email.current.value;

    if (validator.isEmail(inputMail)) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setHelperText('Enter a valid email address!');
    }

  }



  useEffect(() => {
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
        <div className='flex justify-center  flex-col sm:flex-row items-center md:justify-start gap-x-4 pt-2'>
          <TextField sx={{
            width: '90%',
            margin:'5px',
          }} error={!isValid} helperText={helpertext} inputRef={email} id="outlined-basic" label="E-mail address" variant="outlined" size={desktopsize?"normal":"small"}/>
          <button
            type="button"
            className="m-2 w-[110px] h-[40px]  text-[15px] lg:w-[180px] lg:h-[55px] lg:text-[20px] flex justify-center items-center px-6 py-2.5 bg-secondaryColor text-white font-medium text-base rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={clickHandler}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
