import React from "react";
import { FaMessage } from "react-icons/fa6";
import OurMission from "./../OurMission/OurMission";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HighQualityLaserContact = () => {
  return (
    <div>
      <div>
        <div
          className="pt-65 pl relative w-full  min-h-[70vh]  rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.ZOOxZ0zTO9lTIkjIFNLPCQHaE8?w=1000&h=667&rs=1&pid=ImgDetMain')",
          }}
        >
          <div className="absolute top-0 left-0 opacity-60 w-full h-full bg-black"></div>

          {/* Content Section */}
          <div className=" mb-20 flex flex-col max-w-2xl   ml-[10%] text-xl relative z-9 p-6 ">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, scale: 1.2, y: -40 }} // Start with opacity 0, slightly larger scale, and offscreen position
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // End with full opacity, normal scale, and centered
              transition={{
                delay: 0.3, // Slight delay to enhance the entrance effect
                duration: 1, // Smooth animation duration
                ease: "easeOut", // Ease-out timing to make the effect smoother and more polished
              }}
              className="text-white text-5xl font-extrabold mb-6"
            >
              <div>
                <strong>
                  Top-Notch{" "}
                  <p className="text-5xl font-sec text-amber-500">
                    Laser Cutting{" "}
                  </p>{" "}
                  Services
                </strong>
              </div>
            </motion.div>

            {/* Flex Row Section with Icon */}
            <div className="flex flex-row gap-6 mb-6 items-center">
              <div className="text-amber-600 text-5xl">
                <FaMessage />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 1.2, y: 40 }} // Start with opacity 0, slightly larger scale, and offscreen position
                whileInView={{ opacity: 1, scale: 1, y: 0 }} // End with full opacity, normal scale, and centered
                transition={{
                  delay: 0.3, // Slight delay to enhance the entrance effect
                  duration: 1.3, // Smooth animation duration
                  ease: "anticipate", // Ease-out timing to make the effect smoother and more polished
                }}
                className="text-white text-lg"
              >
                <div>
                  <strong>AMB ENGINEERING COMPANY</strong> specializes in
                  high-precision CNC laser cutting, utilizing a powerful laser
                  beam to accurately cut through various materials.
                </div>
              </motion.div>
            </div>

            {/* Contact Button */}
            <NavLink to={"/contact"}>
              <div>
                <button className="text-2xl cursor-pointer bg-amber-300 font-bold text-black p-3 rounded-lg hover:bg-gray-200 transition duration-300">
                  Get in touch
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <OurMission />
    </div>
  );
};

export default HighQualityLaserContact;
