import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

const Counterup = () => {
  const [countOn, setCountOn] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 1380 ) {
        setCountOn(true);
        // Add any additional logic you want to trigger when scroll position is greater than 10
      }
      else{
        setCountOn(false)
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ 
      backgroundImage: "url('/pattern10.png'), url('/pattern20.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100px 100px,100px 100px",  //  Corrected size format (no comma)
      backgroundPosition: "left top, right bottom",  
      backgroundAttachment: "scroll",  
    }}
     className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto  p-6 rounded-lg shadow-lg bg-white">
        {/* <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Window Design Counter */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-center flex items-center justify-center h-24">
              {countOn && (
                <CountUp
                  className="text-4xl text-white font-extrabold"
                  start={0}
                  end={991}
                  duration={6}
                />
              )}
              <span className="text-2xl text-white font-semibold">+</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">
            Custom Window Designs Crafted
            </p>
          </div>

          {/* Stair Railing Counter */}
          <div className="text-center bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-center flex items-center justify-center h-24">
              {countOn && (
                <CountUp
                  className="text-4xl text-white font-extrabold"
                  start={0}
                  end={1040}
                  duration={6}
                />
              )}
              <span className="text-2xl text-white font-semibold">+</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">
            Custom Stair Railing Crafted
            </p>
          </div>

          {/* Calligraphy Counter */}
          <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-center flex items-center justify-center h-24">
              {countOn && (
                <CountUp
                  className="text-4xl text-white font-extrabold"
                  start={0}
                  end={990}
                  duration={6}
                />
              )}
              <span className="text-2xl text-white font-semibold">+</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">
            Custom Calligraphy Designed
            </p>
          </div>

          {/* Gate Design Counter */}
          <div className="text-center bg-gradient-to-r from-red-500 to-red-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-center flex items-center justify-center h-24">
            {

countOn && 
<CountUp className="text-4xl text-white font-extrabold" start={0} end={473} duration={6} />
 }
              <span className="text-2xl text-white font-semibold">+</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">
            Custom Gate Design Crafted
            </p>
          </div>
        </div>
        {/* </ScrollTrigger> */}
      </div>
    </div>
  );
};

export default Counterup;
