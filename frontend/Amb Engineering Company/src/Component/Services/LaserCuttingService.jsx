import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Whatsapp_Button from "./../Whatsapp_Button";
import { motion } from "framer-motion";
import HelmetLayout from "../Layout/Helmet";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";

const LaserCuttingService = () => {
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
    <HelmetLayout title="Laser Cut Details">
      <div
        className={`md:mt-4 mt-4  bg-gray-300  py-0 md:py-13`}
        // className={`${
        //   navbaropenCheckForBelowContainerMargin ? "mt-0" : "mt-4"
        // } py-0`}
      >
        {/* Main container */}

        <div className=" p-10">
          <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 px-4">
            {/* Image Section */}
            <img
              src="https://m.media-amazon.com/images/I/51YJsBTSFSL.jpg"
              alt="Laser Cutting"
              className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
              width={300}
              height={200}
            />

            {/* Text Section */}
            <div className="flex flex-col space-y-4 md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, scale: 1.2, y: -40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl font-bold text-gray-800"
              >
                Metal{" "}
                <p className="text-5xl font-extrabold text-amber-500">
                  Sheet Laser
                </p>{" "}
                Cutting
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg text-gray-600 font-sec text-justify"
              >
                At AMB Engineering, we pride ourselves on delivering top-tier{" "}
                <strong>"Laser Cutting Excellence"</strong> across all aspects
                of our work. With extensive experience in{" "}
                <strong>CNC Laser</strong> and metal cutting technology, we
                provide unmatched precision and quality, setting us apart from
                the competition.
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg text-gray-550 font-sec text-justify"
              >
                At AMB Engineering, we prioritize{" "}
                <strong>
                  reliability, customer support, and engineering expertise
                </strong>{" "}
                to ensure every project is executed with precision and
                efficiency. Our commitment to{" "}
                <strong>"Continuous Improvement"</strong> fuels our dedication
                to delivering exceptional results and meeting customer needs in
                every step of the process.
              </motion.p>

              {showScrolltoTop && <ScrollToTop />}

              {/* Button */}
              <Link
                to={"/contact"}
                className="font-bold bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 cursor-pointer"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
        <Whatsapp_Button message="I Visit Your Laser Cutting Service Page!" />

        {/* Second Section */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Text Section */}
            <div className="flex flex-col space-y-4 md:w-1/2 overflow-hidden">
              <motion.h3
                initial={{ opacity: 0, scale: 1.2, y: -40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-sec  text-3xl font-bold text-gray-800"
              >
                Custom <p className="text-5xl text-amber-500">Metal Cutting</p>{" "}
                to Fit Your Needs
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 1.2, x: -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg text-gray-600 text-justify"
              >
                At <strong>AMB Engineering Company</strong>, we specialize in
                high-precision laser cutting of 2D flat materials. Our advanced
                technology allows us to cut materials up to 1" thick, with a
                cutting area of 24" x 34". We focus on delivering exact cuts for
                intricate designs, ensuring precise feature-to-feature
                alignment, including small holes and narrow slots, with great
                attention to detail.
              </motion.p>
            </div>

            {/* Image Section */}
            <img
              src="https://m.media-amazon.com/images/I/51YJsBTSFSL.jpg"
              alt="Laser Cutting"
              className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
              width={300}
              height={200}
            />
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg text-gray-600 text-justify"
            >
              Laser cutting technology utilizes focused energy to precisely
              slice through materials in a revolutionary and highly efficient
              manner. This method is also widely applied in
              <Link
                initial={{ opacity: 0, scale: 1.2, y: -40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                to={"/laser-cutting-Mechanical-parts-3"}
                className="text-yellow-400 hover:underline"
                title="Mechanical Parts Cutting Page"
              >
                {" "}
                Mechanical Parts Cutting
              </Link>{" "}
              for unparalleled precision. The laser directs a concentrated
              photon beam onto the material, producing incredibly clean and
              sharp cuts. Thanks to computer-controlled technology, these lasers
              provide exceptional accuracy, minimizing the chance of error. The
              result is a polished, flawless cut with excellent finishing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg text-gray-600 text-justify mt-4"
            >
              Currently, businesses may choose between two distinct kinds of
              laser cutters: gaseous CO2 and Nd:YAG.
            </motion.p>
          </div>
        </div>
      </div>
    </HelmetLayout>
  );
};

export default LaserCuttingService;
