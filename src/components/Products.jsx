import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const productsData = [
  {
    id: 1,
    url: "/src/assets/women/women.png",
    title: "Women Ethnic",
    price: 10.99,
    rating: 4.5,
    aosDelay: "200",
    color: "White",
  },
  {
    id: 2,
    url: "/src/assets/women/women2.jpg",
    title: "Women Western",
    price: 10.99,
    rating: 5.0,
    aosDelay: "400",
    color: "Red",
  },
  {
    id: 3,
    url: "/src/assets/women/women3.jpg",
    title: "Goggles",
    price: 10.99,
    rating: 4.7,
    aosDelay: "600",
    color: "Yellow",
  },
  {
    id: 4,
    url: "/src/assets/women/women4.jpg",
    title: "Women Ethnic",
    price: 10.99,
    rating: 4.8,
    aosDelay: "800",
    color: "Black",
  },
  {
    id: 5,
    url: "/src/assets/women/women4.jpg",
    title: "Women Ethnic",
    price: 10.99,
    rating: 4.8,
    aosDelay: "800",
    color: "Black",
  },
]

function Products() {

  return (
    <div className='mt-14 mb-12 container'>
      <div className='container'>
        <div className=' mb-10 max-w-[600] mx-auto'>
          <p data-aos="fade-up" className='text-2xl text-primary pb-2 font-bold flex  justify-center gap-3'>Top Selling Products for You <MdOutlineProductionQuantityLimits className='text-4xl' />
          </p>
          <h2 data-aos="fade-up" className='text-3xl font-bold pb-2 text-center'>Products</h2>
          <p data-aos="fade-up" className='text-xs text-gray-400 mt-2 font-semibold mb-8 flex *:justify-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vitae adipisci totam reiciendis, veritatis doloremque numquam illum velit autem ullam amet reprehenderit magnam, itaque temporibus nam molestias? Omnis, placeat veniam.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center '>
            {productsData.map((data) => (
              <div key={data.id} data-aos-delay={data.aosDelay} className='space-y-3'>
                <img src={data.url} alt="product photo" className='w-[150px] h-[220px] object-cover' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <span className='ml-1'>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
            <button className='text-center  cursor-pointer bg-primary text-white py-1 px-5 rounded-md mb-9 mt-14'>View Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
