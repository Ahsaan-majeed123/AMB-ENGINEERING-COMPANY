import React from "react";
import HighQualityLaserContact from "./../HighQualityLaser/HighQualityLaserContact";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const MaterialWeCanCut = () => {
  
  const stringtorender = [
    "Materials <span class='text-red-500'> We Can   Cut </span> For You <span class='text-red-500'>...</span>"
    
  ];

  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg ">
          {/* Title Section */}
          <div className="text-center pt-4 mb-8 ">
            <motion.div
              initial={{ opacity: 0.2, y:40  }}
              whileInView={{ opacity: 1, y:0}}
              transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
              className="text-3xl  items-center  sm:text-4xl md:text-4xl text-gray-700 font-extrabold capitalize"
            >
              <ReactTyped
                          strings={stringtorender}
                          typeSpeed={20}
                          backSpeed={20}
                          loop
                          backDelay={2900}
                          showCursor={false}
                          className="font-extrabold"
                        />
              
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative border-t-2 border-gray-400/30 overflow-hidden  shadow ">
            <img
              src="https://m.media-amazon.com/images/I/51YJsBTSFSL.jpg"
              alt="Materials"
              className="w-full h-[300px] object-fill rounded-lg"
            />
          </div>
        </div>
      </div>

      <HighQualityLaserContact />
    </>
  );
};

export default MaterialWeCanCut;
