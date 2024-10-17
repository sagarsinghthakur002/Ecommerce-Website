import React from 'react'
import { GrSecure } from 'react-icons/gr'
import { GiFoodTruck } from 'react-icons/gi'
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'> 
                <div data-aos="zoom-in">
                    <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src='/src/assets/banner/banner1.jpg' alt='Banner' />
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl'>
                        Winter Sale Upto 50% off 
                    </h1> 
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, sed! Esse accusantium cumque quod laborum consequatur omnis, minima et corporis accusamus odio ipsa provident est aut minus saepe, pariatur explicabo!</p>
                    <div className='felx flex-cold gap-4 '>
                        <div data-aos= "fade-up" className='flex items-center gap-4'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
                            dark:bg-violet-400' />
                            <p>Quality Product</p>
                        </div>
                        <div data-aos= "fade-up" className='flex items-center gap-4 mt-[7px]'>
                            < GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos= "fade-up" className='flex items-center gap-4 mt-[7px]'>
                            <MdOutlinePayments className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Easy Payment Method</p>
                        </div>
                        <div data-aos= "fade-up" className='flex items-center gap-4 mt-[7px]'>
                            <BiSolidOffer className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Get Offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
