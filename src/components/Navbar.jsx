import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FiShoppingBag } from 'react-icons/fi';
import DarkMode from './DarkMod';


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#Service"
  },
  {
    id: 3,
    name: "Kid Ware",
    link: "/#"
  },
  {
    id: 4,
    name: "Mens Ware",
    link: "/#"
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#"
  },
];

const Dropdownlist = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Offer Product ",
    link: "/#"
  },
];

function Navbar({ handleOrderPopup }) {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-primary/60 py-2'>
        <div className='flex justify-between items-center mx-4'>

          <div>
            <a href='#' className='font-bold text-xl items-center flex gap-1'>
              <FiShoppingBag size="30" />
              Shop me
            </a> 
          </div>

          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800' placeholder='search' type='text' /> 
              <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>

            <button className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group' onClick={handleOrderPopup}>
              <span className='group-hover:block hidden transition-all duration-200'> Order </span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>

      <div data-aos='zoom-in' className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className='text-sm text-gray-500 hover:text-primary duration-200'>
                {data.name}
              </a>
            </li>
          ))}
          <li className='group relative cursor-pointer'>
            <a href='#' className='flex items-center gap-[2px] py-2'>
              Trending Products 
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {Dropdownlist.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
