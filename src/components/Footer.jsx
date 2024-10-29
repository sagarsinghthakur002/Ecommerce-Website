import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaMapLocation } from 'react-icons/fa6'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaLocationArrow,
} from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'

const FooterLinks = [
  {
    title:"Home"
    link:"/#"
  },

  {
    title:"About"
    link:"/#"
  },

  {
    title:"Contact"
    link:"/#"
  },

  {
    title:"Blog"
    link:"/#"
  },
]

function Footer() {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container'>
        <div data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-44 pt-5'>
          <div className='py-8 px-4'>
            <h1 className='text-2xl font-bold sm:text-left text-justify mb-3 items-center gap-1'></h1>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
