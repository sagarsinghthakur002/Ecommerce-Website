import React from "react";
import { DiResponsive } from "react-icons/di";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, aliquam minima maxime quis dolorum. Dolor doloribus corrupti ad cupiditate architecto perspiciatis? Labore nemo aut et consequuntur, recusandae similique! Perspiciati",
    img: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 2,
    name: "sara",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, aliquam minima maxime quis dolorum. Dolor doloribus corrupti ad cupiditate architecto perspiciatis? Labore nemo aut et consequuntur, recusandae similique! Perspiciati",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    name: "satya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, aliquam minima maxime quis dolorum. Dolor doloribus corrupti ad cupiditate architecto perspiciatis? Labore nemo aut et consequuntur, recusandae similique! Perspiciati",
    img: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 4,
    name: "kartch",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro, aliquam minima maxime quis dolorum. Dolor doloribus corrupti ad cupiditate architecto perspiciatis? Labore nemo aut et consequuntur, recusandae similique! Perspiciati",
    img: "https://picsum.photos/200/300/?blur=2",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    arrows: false,
    autoPlay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary"></p>
          <h1 data-aos="fade-up" className="text-3xl font-bold pb-4">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deleniti facilis, hic velit rem, animi est autem, molestias expedita
            in debitis.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col shadow-lg gap-4 py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-slate-300 text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 ring-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
