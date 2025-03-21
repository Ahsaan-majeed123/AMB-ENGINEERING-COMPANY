import React from "react";
import MaterialWeCanCut from "./MaterialWeCanCut";
import { motion } from "framer-motion";

const CuttingWithTradition = () => {
  return (
    <>
      <div className=" bg-amber-50 py-7"
     style={{ 
      backgroundImage: "url('/pattern4.png'), url('/pattern6.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "400px 300px,200px 200px",  //  Corrected size format (no comma)
      backgroundPosition: "left top, right bottom",  
      backgroundAttachment: "scroll",  
    }}
    
      
      
      // style={{
    
      //   backgroundImage: "url('/up_right.png'), url('/des_bot_left-removebg-preview.png'),url('/up-left.png'),url('/down-right.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right top,  bottom left,left top, bottom right", // Corrected positions
      //   backgroundSize: "150px 170px, 135px 90px,105px 170px,130px 75px", // Resizing images
      // }}
      
      >
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 border-b-8  pt-6 pb-36 border-amber-400">
          <div className="relative w-[50%] ml-auto mr-auto sm:w-[50%] sm:ml-auto sm:mr-auto  md:w-[40%]  ">
            <img
              src="https://www.harrodhorticultural.com/uploads/images/products/ARC-854_Harrod_Laser_Screen_Panels_1.jpg"
              alt="Laser Cutting Image"
              className=" w-100 h-[40vh] sm:h-[60vh] rounded-lg shadow-xl"
            />
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2   w-[80%] md:w-[70%] md:transform    border-6 border-amber-500 rounded-lg  overflow-hidden shadow-lg ">
              <img
                src="https://ptlaser.com/wp-content/uploads/2020/10/What-is-laser-cutting-MI-metal-fabrication-services.jpg"
                alt="Cutting Service Image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full overflow-hidden md:w-[60%] flex flex-col justify-center text-center md:text-left space-y-6 ">
            {/* <p className="text-3xl pt-10 sm:pt-10 md:text-4xl lg:pt-0 font-extrabold text-gray-800"> */}

            <motion.div
              className="font-sec  text-3xl pt-10 sm:pt-10 md:text-4xl lg:pt-0 font-extrabold text-gray-800 "
              initial={{ opacity: 0, x:40 }}
              whileInView={{ opacity: 1, x:0  }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            >
            <p className="text-amber-500 text-5xl pb-1">Crafting</p> with Precision & Excellence

            </motion.div>
            <motion.p
              className="text-xl box-border  text-gray-600  font-bold font-sans text-justify leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "anticipate" }}
            >
              AMB Engineering Company began offering high-precision laser cutting services in the Lahore area, ensuring exceptional accuracy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
              className="font-sec text-lg text-gray-600"
            >
              A laser cutting machine is a computer-controlled system that transforms digital designs into accurate metal pieces. We utilize CO2 laser technology, which ensures superior results for our clients, providing precision and efficiency.

Laser cutting offers unmatched quality by not only cutting the material but also delivering a smooth, refined finish. This method is more organized and precise compared to traditional mechanical cutting, making it the preferred choice for industries seeking high-quality outcomes
            </motion.p>
          </div>
        </div>
      </div>

      <MaterialWeCanCut />
    </>
  );
};

export default CuttingWithTradition;
