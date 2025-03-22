import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Whatsapp_Button from "./../Whatsapp_Button";
import HelmetLayout from "../Layout/Helmet";
import { motion } from "framer-motion";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";

const MechanicalPartsLaserCutting = () => {
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
    <HelmetLayout title="Mechanical Parts - Laser Cut" canonicalUrl={"https://www.ambengineers.com/laser-cutting-Mechanical-parts-3"}>
      <div
      
        className={`
        
         bg-gradient-to-l  from-gray-100 to-blue-100
        md:mt-4 mt-4 md:py-20 py-10
           pt-6`}
      >
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto pl-2 pr-2  flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Content Section */}
          <div className="flex flex-col space-y-6 lg:w-2/3 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
              className="text-4xl p-1 font-bold text-gray-800"
            >
              <p className=" md:text-5xl  font-sec text-amber-600">
                Laser Cutting
              </p>{" "}
              for Mechanical Parts
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
              className="text-lg font-sec text-gray-600 text-justify pl-2 pr-4"
            >
              To begin, let's explore the concept of{" "}
              <Link
                to="/laser-cutting-service-1"
                className="text-blue-600 hover:underline"
                title="Laser cutting service page"
              >
                laser cutting
              </Link>{" "}
              for mechanical applications. This technique utilizes advanced
              machinery to precisely shape materials based on specific design
              criteria. Various tools, such as drill presses, lathes, and
              milling machines, play key roles in the process, each performing a
              unique function. Depending on the task, these machines are
              employed to drill, cut, and shape materials as per the required
              specifications.
            </motion.div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuSG2opIGCtcvVIrq7ixhSJKV8pieF22nd4eXvhONdh8TdAPmbRmxMLGCO2tu_i8H2HE&usqp=CAU"
              alt="Laser Cutting Image"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-2/3 rounded-lg shadow-xl mx-auto hover:scale-105 transform transition duration-300"
            />
          </div>

          {showScrolltoTop && <ScrollToTop />}

          {/* Contact Form Section */}
          <div className="lg:w-1/3 w-2/3 mx-auto">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-2xl">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-white  font-sec mb-6">
                Got any inquiries? Reach out to us, and we’ll respond promptly!
              </p>
              {/* Replace this section with your contact form */}
              <Link to={"/contact"}>
                <div
                  title="Contact Us Page"
                  className="border p-4 rounded-lg text-center text-white bg-gray-800 hover:bg-gray-700 transition duration-200"
                >
                  <span className="text-lg font-semibold">Contact Us</span>
                </div>
              </Link>
            </div>
          </div>
          <Whatsapp_Button message="I visit Your Mechanincal Parts Laser Cutting Page" />
        </div>

        {/* Section 2 */}
        <div style={{ 
      backgroundImage: "url('/pattern14.png'), url('/pattern19.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "70px 70px,300px 300px",  //  Corrected size format (no comma)
      backgroundPosition: "left top, 650px bottom",  
      backgroundAttachment: "scroll",  
    }} className="mt-10 bg-gray-300 pt-13 pb-10">
          <div  className="pl-3 pr-3  border-box max-w-7xl mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Content Section */}
            <div  className="flex  flex-col space-y-4 lg:w-2/3 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
                className="text-3xl font-bold text-gray-800"
              >
                We specialize in cutting{" "}
                <p className="text-amber-600 text-3xl md:text-4xl border w-max border-2 rounded font-extrabold">
                  MECHANICAL PARTS
                </p>{" "}
                with speed and precision.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
                className="text-lg font-sec text-gray-600"
              >
                The price of laser cutting services can fluctuate based on
                several factors. A <b>single, simple design</b> will typically
                cost less compared to mass production of multiple units. More
                complex projects, with intricate details or strict requirements,
                will increase the overall price. Other key considerations
                include the <b>type and thickness of the material</b>, the{" "}
                <b>quantity of items to be cut</b>, and how quickly the job
                needs to be completed. These variables can significantly
                influence the final cost.
              </motion.p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDwb1su5cp6dPZ7Z2GK89nTu796AVn-CklZ6DBoYX5aiVeqk__av2gzbXSIs-T1C1L3M&usqp=CAU"
                alt="Laser Cutting Example"
                className="w-3/5 sm:w-3/5 md:w-2/5 lg:w-full rounded-lg shadow-lg object-fill"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mt-8 mx-auto p-6 space-y-8">
          {/* Image Section */}
          <div className="gap-6 flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg p-6 bg-white">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <img
                className="w-full h-auto sm:h-64 object-fill rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                src="https://cdn.thefabricator.com/a/the-rapid-evolution-of-modern-laser-cutting-1673038845.JPG"
                alt="Laser Cutting"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full space-y-4 mt-6 lg:mt-0 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
                className="text-2xl font-sec md:text-4xl font-semibold text-gray-800"
              >
                <p className="font-sec text-4xl md:text-5xl">
                  Laser Cutting <p className="text-4xl text-red-600">vs</p>
                </p>
                Mechanical Techniques
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
                className="text-lg font-sec text-gray-600 leading-relaxed text-justify"
              >
                <strong>Laser cutting</strong> offers superior results compared
                to traditional cutting methods. It combines both{" "}
                <strong>cutting and finishing</strong> in one seamless process,
                making it highly desirable for various industries. Unlike{" "}
                <i>mechanical cutting</i>, which can cause material deformation
                and wear on equipment, <strong>laser cutting</strong> is more
                efficient and precise. The laser operates without direct contact
                with the material, minimizing the risk of contamination or
                physical damage to both the material and the machinery.
                Additionally, <strong>laser cutting</strong> generates fewer
                heat-affected zones, ensuring that materials maintain their
                integrity and machinery remains in optimal condition.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section 4 */}

        <div className=" flex flex-col lg:flex-row gap-6 bg-amber-50 max-w-7xl mx-auto p-6 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="lg:w-1/3 w-1/2 mx-auto">
            <img
              src="https://th.bing.com/th/id/R.c69fa80763b57c55ba5b7b4e614b4da1?rik=WB78zzWLs4a9Lg&pid=ImgRaw&r=0"
              alt="Laser Cutting"
              className="w-full h-auto object-fill rounded-lg shadow-sm"
            />
          </div>

          {/* Text and List Section */}
          <div className="lg:w-2/3 w-full space-y-6 p-6 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
              className="md:text-4xl p-2 text-2xl  border font-bold text-amber-500 shadow w-max font-sec  leading-tight"
            >
              Mechanical Components
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
              className="text-xl text-gray-700 font-medium mb-4"
            >
              Laser Cutting Custom Parts
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
              className="list-disc pl-6 space-y-2 text-gray-600"
            >
              <li>
                <b className="text-gray-800">Exact Measurements</b>
              </li>
              <li>Laser precision within +/- 0.13mm</li>
              <li>Real-time design consultation</li>
              <li>
                <b className="text-gray-800">Quick Delivery</b> across all
                regions in Pakistan.
              </li>
            </motion.ul>

            {/* Button Section */}
            <Link
              title="Contact Us page"
              to="/contact"
              className="inline-block bg-yellow-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Price Inquiry
            </Link>
          </div>
        </div>
      </div>
    </HelmetLayout>
  );
};

export default MechanicalPartsLaserCutting;
