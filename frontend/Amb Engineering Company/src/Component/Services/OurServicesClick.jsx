import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";
import Whatsapp_Button from './../Whatsapp_Button';

const OurServicesClick = () => {
  const fun = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    navbaropenCheckForBelowContainerMargin,
    setnavbaropenCheckForBelowContainerMargin,
  } = useContext(stairrailingcontext);

  const [showScrolltoTop, setshowScrolltoTop] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 350) {
        setshowScrolltoTop(true);
      } else {
        setshowScrolltoTop(false);
      }
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={`bg-gradient-to-b from-gray-50 via-gray-300 to-gray-50 md:mt-5 mt-3  py-13  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showScrolltoTop && <ScrollToTop />}

        {/* Islamic Calligraphy */}
        <div className="flex gap-6 flex-col md:flex-row items-center justify-between mb-12 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-extrabold leading-loose md:text-4xl text-gray-800 mb-4"
            >
              Islamic <span className="text-amber-600">Calligraphy</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 text-lg mb-4 text-justify"
            >
              At Amb Engineering Company, we offer high-quality Islamic
              calligraphy wall art at affordable prices in Lahore, Pakistan. Our
              craftsmanship combines artistic precision with intricate designs,
              bringing a beautiful and spiritual touch to your space.
            </motion.p>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
              onClick={() => fun()}
            >
              Read more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://vecty.co/file-view/surah-an-nas-islamic-calligraphy-wall-art-decor-.jpg"
              alt="Islamic Calligraphy"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Flame Cutting */}
        <div className="flex gap-6 flex-col md:flex-row items-center justify-between mb-12 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmwmjvnQGgJeFIlaUcUfa13K9G1p0tyTeug&s"
              alt="Flame Cutting"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-extrabold leading-loose md:text-4xl text-gray-800 mb-4"
            >
              Flame <span className="text-amber-600">Cutting</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-600 text-lg mb-4 text-justify"
            >
              At Amb Engineering Company, we offer high-quality, precision flame
              cutting services for carbon, alloy, and stainless steel. Our
              advanced cutting technology ensures clean, accurate cuts, making
              us a leading choice for all your metal fabrication needs. We
              provide these services at the best prices in Pakistan, delivering
              exceptional value without compromising on quality.
            </motion.p>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
              onClick={() => fun()}
            >
              Read more
            </button>
          </div>
        </div>

        

        {/* Plasma Cutting */}
        <div className="flex gap-6 flex-col md:flex-row items-center justify-between mb-12 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-extrabold leading-loose md:text-4xl text-gray-800 mb-4"
            >
              Plasma <span className="text-amber-600">Cutting</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-600 text-lg mb-4 text-justify"
            >
              At Amb Engineering Company, we provide the best quality CNC plasma
              cutting services for a wide range of materials, including SS, MS,
              and other metals. Our expert services cater to industries such as
              medical and surgical items, gates, doors, railings, partitions,
              and more. We also specialize in plasma cutting for business
              places, restaurants, and marquees, all at the best prices in
              Lahore.
            </motion.p>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
              onClick={() => fun()}
            >
              Read more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://fractory.com/wp-content/uploads/2020/02/Plasma-cutter-cutting-metal.jpg"
              alt="Plasma Cutting"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>




<Whatsapp_Button message={"I vist You Page Which have your Services!"}/>

{/* Laser Cutting */}
<div className="flex gap-6 flex-col md:flex-row items-center justify-between mb-12 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXO4pB8kxSfl2tUOM4eTEGogFC4m7StY9Kw&s"
              alt="Laser Cutting"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-extrabold leading-loose md:text-4xl text-gray-800 mb-4"
            >
              Laser <span className="text-amber-600">Cutting</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-gray-600 text-lg mb-4 text-justify"
            >
              Amb Engineering Company utilizes state-of-the-art CNC Fibre Laser
              Cutting Machines, featuring a large cutting bed with the power to
              penetrate all types of metal sheets. We offer the best laser
              cutting services in Lahore, Pakistan, with a focus on precision
              and efficiency. Laser cutting is a highly versatile technology
              that has transformed the manufacturing industry, and at Amb
              Engineering Company, we specialize in providing top-notch laser
              cutting services for businesses of all sizes.
            </motion.p>
            <button
              onClick={() => fun()}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Read more
            </button>
          </div>
        </div>




      </div>
    </div>
  );
};

export default OurServicesClick;
