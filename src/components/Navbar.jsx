import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { FiShoppingBag } from 'react-icons/fi'


const Menu = [
  {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#Service"
  },
  {
    id:3,
    name:"Kid Ware",
    link:"/#"
  },
  {
    id:3,
    name:"Mens Ware",
    link:"/#"
  },
  {
    id:3,
    name:"Electronics",
    link:"/#"
  },
];

const Dropdownlist = [
  {
    id:1,
    name:"Tranding Product ",
    link:"/#"
  },
  {
    id:2,
    name:"Best Selling ",
    link:"/#"
  },
];

function Navbar( {handleOderPopup}) {
  return (
    <div className='shadow-md bg-white dark:bg-text-white duration-200 relative z-40'>
      <div className='bg-primary/40 py-2'>
        <div className='flex justify-between items-center mx-4'>

          <div>
            <a href='#' className='font-bold text-xl items-center flex gap-1'>
              <FiShoppingBag size="30" />
              Shop me
            </a> 
          </div>

          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input className='w-[200px] sm:w-200px group-hover:w-[300]transition-all duration-300 rounded-ig border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800' placeholder='search' type='text' /> 
            </div>
          </div>
                  {/* 35 */}
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
