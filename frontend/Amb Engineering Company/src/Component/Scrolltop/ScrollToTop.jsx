import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const handlescrolltotop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
  return (
    <div className="fixed left-7 bottom-6 cursor-pointer text-6xl text-gray-600 opacity-85 bg-white z-10 rounded-full bottom-4 left-3 hover:text-blue-400" onClick={handlescrolltotop}>
      <FaChevronCircleUp />
    </div>
  );
};

export default ScrollToTop;
