import React from 'react'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards } from "swiper";
import { Pagination } from "swiper";


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
        <div className='bg-primaryColor  pt-[150px] pb-[150px] flex justify-center'>
            <div className=' w-[80%]'>
            <p className='text-center text-white text-[30px] md:text-5xl  font-medium'>Master the art of <span className="text-secondaryColor font-semibold">Interviewing</span></p>
                <div className=' flex flex-col items-center pt-5 xl:flex-row md:pt-[100px] -mt-12  xl:-mt-5 '>
                    <p className='p-[50px] w-[100%] sm:w-[90%] text-justify md:text-xl lg:w-[50%]  text-white'>Unlock the secrets to acing any interview with our expert guidance. Master the art of interviewing and stand out from the competition with our tailored coaching and resources. Take the first step towards your dream job today and explore our services.</p>
                    <div className=" w-full flex mt-5  md:m-5 md:items-center justify-center">
                        
                        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5  lg:grid-cols-4">
                            
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                                <div className="h-96 w-[14rem] ">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/ServiceImage1.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-xl font-bold text-white">Discover your Ideal Industry</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                </div>
                            </div>
                            
                            
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                                <div className="h-96 w-[14rem]">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 " src="/ServiceImage2.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-xl font-bold text-white">How to craft the Best Resume</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                </div>
                            </div>
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                                <div className="h-96 w-[14rem]">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/ServiceImage3.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-xl font-bold text-white">Importance of Non-Technical skills</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                </div>
                            </div>
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                                <div className="h-96 w-[14rem]">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/ServiceImage4.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-xl font-bold text-white">Get help from industry experts</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services