import React, { useEffect, useState } from 'react';
import AOS from "aos";  
import "aos/dist/aos.css";
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


const App = () => {

  const [orderPopup, setOrderpopup] = useState(false); 

  const handleOrderPopup = () => { //function for popup
    setOrderpopup(!orderPopup); 
  };

  useEffect(() => {  //initialize AOS library 
    AOS.init({
      duration: 100,
      easing: "ease-in-sine",
      offset: 100,
      delay: 100,
    });
  
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero/>
        <Banner />
      </div>
    </>
  );
}

export default App;
