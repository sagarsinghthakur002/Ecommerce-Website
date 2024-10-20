import React from 'react';
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    url: '/src/assets/hero/women.png',
    title: "Upto 75% off Women's Wear",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non quas pariatur dolorem, consectetur maxime, iste odio veniam incidunt earum repudiandae similique deleniti fuga rem, debitis reprehenderit placeat explicabo! Quidem."
  },
  {
    id: 2,
    url: '/src/assets/hero/shopping.png',
    title: "Upto 40% off Kid's Wear",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non quas pariatur dolorem, consectetur maxime, iste odio veniam incidunt earum repudiandae similique deleniti fuga rem, debitis reprehenderit placeat explicabo! Quidem."
  },
  {
    id: 3,
    url: '/src/assets/hero/sale.png',
    title: "Upto 50% off Men's Wear",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non quas pariatur dolorem, consectetur maxime, iste odio veniam incidunt earum repudiandae similique deleniti fuga rem, debitis reprehenderit placeat explicabo! Quidem."
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden h-[89vh] w-full bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
      <div className='h-full w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
      <div className='container pb-8 sm:pd-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className='h-screen'>
              <div className='grid grid-cols-1 sm:grid-cols-2 h-full'>
                <div className='flex flex-col justify-center items-center gap-4 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-10'
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='text-sm mt-[2rem]'
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up" 
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => {
                        handleOrderPopup();
                      }}
                      className='bg-gradient-to-r from-primary to-secondary hover:scale-150 duration-200 text-white py-2 px-4 rounded-full'
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className='order-1 sm:order-2 flex justify-center items-center'>
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className='relative z-10 mt-[4rem]'
                  >
                    <img
                      src={data.url} 
                      alt="slider"
                      className='w-[300px] h-[300px] sm:h-[450px] sm:scale-150 lg:scale-120 object-contain mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;