import React from 'react'
import Logo from "../public/logo.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bg-gray-50 w-full'>
            <div className="bg-gray-50 h-1/4 w-full flex md:flex-row flex-col justify-around items-center p-20">
                <div className="p-5 ">
                    <ul>
                        <div className='flex flex-col justify-center items-center'>
                            <Image className='mb-5' src={Logo} alt="LOGO" width={173} height={45} />
                            <div className='flex text-black gap-x-8 mt-5'>
                                <li className=" text-md md:text-xl pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Terms and Conditons
                                </li>
                                <li className=" text-md md:text-xl pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    Privacy Policy
                                </li>
                                <li className=" text-md md:text-xl pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                    About us
                                </li>
                            </div>
                        </div>

                    </ul>
                </div>

                <div className=' w-[200px] m-[50px]'>
                    <div className=' md:rotate-90  h-[3px] flex-1 flex-col bg-black'></div>
                </div>

                <div className="p-5 flex flex-col justify-center items-center ">
                    <p className="text-gray-800 font-bold text-xl md:text-3xl pb-4">Still Have any query ?</p>
                    <span className="text-gray-600 text-md md:text-xl pb-2 font-semibold">Mail us at : </span>
                    <a className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">query.prepFront@gmail.com</a>
                    <div className="flex gap-6 pb-5 mt-10">
                        <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    ©  All rights reserved | Built with ❤
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        PrepFront{" "}
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Footer;
