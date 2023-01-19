import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards } from "swiper";
import { Pagination } from "swiper";
import Card from './Card';

const SERVICE_LIST = [
    {
        heading: "Discover your Ideal Industry",
        src: "/ServiceImage1.jpg"
    },
    {
        heading: "How to craft the best resume",
        src: "/ServiceImage2.jpg"
    },
    {
        heading: "Non-Technical skills does a lot more",
        src: "/ServiceImage3.jpg"
    },
    {
        heading: "Get help from industry experts",
        src: "/ServiceImage4.jpg"
    },
];

function Services() {

    return (
        <div className=' flex flex-col  bg-primaryColor p-10 -mt-12  xl:-mt-5 '>
            <div className=' flex flex-col gap-y-4 mt-20' >
                <p className='text-center text-white text-[28px] font-medium'>Master the art of <span className="text-secondaryColor font-semibold">Interviewing</span></p>
                <p className='text-justify text-white'>Unlock the secrets to acing any interview with our expert guidance. Master the art of interviewing and stand out from the competition with our tailored coaching and resources. Take the first step towards your dream job today and explore our services.</p>
            </div>
        </div>
    )
}

export default Services