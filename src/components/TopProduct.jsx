import React from 'react';
import { FaStar } from 'react-icons/fa';

const productsData = [
  {
    id: 1,
    url: "/src/assets/shirt/shirt1.png",
    title: "Casual",
    description: "What is lorem ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
  },
  {
    id: 2,
    url: "/src/assets/shirt/shirt2.png",
    title: "Casual",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit molestias nostrum ab obcaecati quidem aut sint numquam perferendis aliquam praesentium velit expedita veniam architecto vitae cupiditate libero, distinctio eum?',
  },
  {
    id: 3,
    url: "/src/assets/shirt/shirt3.png",
    title: "Casual",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facilis deserunt velit quo ipsam ab praesentium, repellendus natus esse quasi quidem excepturi cupiditate harum sit vero nam voluptate temporibus incidunt.',
  },
];

function TopProduct({ handleOrderpopup }) {
  return (
    <div className="container mx-auto px-4">
      <div className="text-left mb-24">
        <p className="text-sm text-primary py-2" data-aos="fade-up">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold text-center py-3">Best Products</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias quaerat vero veritatis consectetur qui totam fugit. Quod aspernatur, adipisci numquam neque quasi amet iusto unde, at perspiciatis dolore reprehenderit!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center py-36 sm:py-20">
          {productsData.map((data) => (
            <div key={data.id} data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-8">
              <div className="pb-2 -mt-10">
                <img src={data.url} alt={data.title} className="max-w-[160px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md" />
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
