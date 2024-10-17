import React from 'react'
import AOS from "aos";  
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Banner from './components/Banner';

const App = () => {

  const [orderPopup, setOrderpopup] = useState(false); 

  const handleOrderPopup = () => { //funcation for popup
    setOrderpopup(!orderPopup); 
  };

  useEffect(() => {  //use for Animate On Scroll Library
    AOS.init({
      duration: 100,
      easing: "ease-in-sine",
      offset: 100,
      delay: 100,
      });
  
      AOS.refresh();
    },[]);

  return (
    <>
    <div className='bg-white dark:bg-gray-900
     dark:text-white duration-200'>

      <Banner/>

    </div>
    </>
  )
}

export default App