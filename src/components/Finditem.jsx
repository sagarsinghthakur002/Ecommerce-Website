import React from 'react';

const FindItem = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 bg-slate-700 dark:bg-gray-800 flex flex-col sm:flex-row items-center justify-center">
      <div className="flex-shrink-0 p-5">
        <img src="/src/assets/hero/img.png" alt="Hero" className="w-full h-auto object-cover" />
      </div>
      <div className="container backdrop-blur-sm py-10 sm:py-20 px-5 sm:px-10 sm:ml-[-10px] md:ml-[-20px] lg:ml-[-40px]">
        <div className="space-y-6 max-w-xl mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white">Get Notified</h1>
          <input 
            type="email" 
            data-aos="fade-up" 
            placeholder="Enter your email" 
            className="w-full p-4 text-black rounded-md" 
            aria-label="Enter your email"
          />
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindItem;
