import React from 'react';
import { FaStar } from 'react-icons/fa';

const productsData = [
  {
    id: 1,
    url: "/src/assets/shirt/shirt.png",
    title: "Casual",
    description: "What is lorem ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
  },
  {
    id: 2,
    url: "/src/assets/shirt/shirt2.png",
    title: "Casual",
    description: "What is lorem ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
  },
  {
    id: 3,
    url: "/src/assets/shirt/shirt3.png",
    title: "Casual",
    description: "What is lorem ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
  },
];

function TopProduct({ handleOrderpopup }) {
  return (
    <div className="container">
      <div className="text-left mg-24">
        <p className="text-sm text-primary" data-aos="fade-up">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias quaerat vero veritatis consectetur qui totam fugit. Quod aspernatur, adipisci numquam neque quasi amet iusto unde, at perspiciatis dolore reprehenderit!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {productsData.map((data) => (
            <div key={data.id} data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
              <div>
                <img src={data.url} alt='image' className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
              </div>
              <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              <button
                className="bg-primary text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary duration-300"
                onClick={handleOrderpopup}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
