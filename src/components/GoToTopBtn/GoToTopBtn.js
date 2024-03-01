import React, {useState, useEffect} from 'react'
import { FaAngleDoubleUp} from "react-icons/fa"
import "./GoToTopBtn.css"

const GoToTopBtn = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() =>{
      window.addEventListener('scroll', () => {
        const scrollThreshold = window.innerWidth > 768 ? 300 : 100;
        if(window.scrollY > scrollThreshold){
          setShowScrollTopButton(true)
        } else {
          setShowScrollTopButton(false)
        }
      });

      // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', () => {});
    };  

  },[]);

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      
          {showScrollTopButton && <FaAngleDoubleUp className='top-btn-position top-btn-style' onClick={scrollTop} /> }
    </div>
  );
};

export default GoToTopBtn;