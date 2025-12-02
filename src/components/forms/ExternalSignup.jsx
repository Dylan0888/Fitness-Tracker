import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

const ExternalSignup = () => {
  return (
    <section className='flex justify-evenly'>
        <button className='cursor-pointer outline-2 outline-neutral-600/20 rounded-md p-2 md:p-3 lg:p-5 hover:outline-blue-500 active:scale-110 transition-all ease-in-out duration-100 sm:text-md md:text-lg lg:text-2xl xl:text-4xl'><FcGoogle/></button>

        <button className='cursor-pointer outline-2 outline-neutral-600/20 rounded-md p-2 md:p-3 lg:p-5 hover:outline-blue-500 active:scale-110 transition-all ease-in-out duration-100 sm:text-md md:text-lg lg:text-2xl xl:text-4xl'><BsApple/></button>

        <button className='cursor-pointer outline-2 outline-neutral-600/20 rounded-md p-2 md:p-3 lg:p-5 hover:outline-blue-500 active:scale-110 transition-all ease-in-out text-blue-500 duration-100 sm:text-md md:text-lg lg:text-2xl xl:text-4xl'><FaWindows/></button>
    </section>
  )
}

export default ExternalSignup
