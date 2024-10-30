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
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

function Footer() {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
          <div className='py-8 px-4'>
            <h1 className='text-2xl font-bold sm:text-left text-justify mb-3 items-center gap-1'>
              <FiShoppingBag size="30" />
              ShopMe
            </h1>
            <p>
              We are a team of passionate individuals who strive to provide the best shopping experience for our customers.
            </p>
          </div>
          <div>
            <div className='py-8 px-4'>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link) => (
                  <li key={link.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-2 mt-6'>
              <a href='#'>
                <FaInstagram className='text-3xl' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl' />
              </a>
            </div> 
            <div className='mt-6'>
              <div className='flex items-center gap-3'>
                <FaMapLocation />
                <p>Kathmandu, Nepal</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <IoCall />
                <p>+977 982340756</p>
              </div>
              
            </div>
            <div className='flex justify-center items-center mt-10 '>
              <p>Copyright &copy; Sagar Singh Thakur. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
