import React, { useContext, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Feelfreecontact from "./../Contact/Feelfreecontact";
import Whatsapp_Button from "./../Whatsapp_Button";
import { motion } from "framer-motion";
import Counterup from "./../Counterup/Counterup";
import HelmetLayout from "../Layout/Helmet";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";

const AboutUS = () => {
  const stringtorender = [
    "Meet Our Laser <br/> <span class='text-yellow-500'>Cutting</span> <br> Company...",
  ];

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
    <HelmetLayout title="About US" canonicalUrl={"https://www.ambengineers.com/about-AMB-ENG-Company"}>
      <div
      style={{
        backgroundImage:
        "url('/pattern14.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "10px 6px", // Corrected positions
      backgroundSize: "70px 60px", // Resizing images
      
      }}
        className={`bg-blue-50 ${
          navbaropenCheckForBelowContainerMargin ? "mt-16" : "mt-0"
        }`}
      >
        {/* Background section with image */}
        <div
          className=" relative h-[69vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/R.783c72a6ebb4b17b93bbd0ba57344c69?rik=mUZp4OFvpmqjVg&pid=ImgRaw&r=0')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <motion.div
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
            className="max-w-7xl mx-auto text-center relative pt-44 px-6"
          >
            <ReactTyped
              strings={stringtorender}
              typeSpeed={60}
              backSpeed={30}
              loop
              backDelay={1000}
              showCursor={false}
              className="text-4xl lg:text-5xl text-white font-extrabold leading-tight"
            />
          </motion.div>
        </div>

        {showScrolltoTop && <ScrollToTop />}

        {/* About Us Content Section */}
        <div  style={{ 
      backgroundImage: "url('/pattern4.png'), url('/pattern8.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "400px 300px,100px 100px",  //  Corrected size format (no comma)
      backgroundPosition: "left top, right bottom",  
      backgroundAttachment: "scroll",  
    }}
         className="  max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          {/* <div className="flex-1 mb-6 md:mb-0"> */}

          <div className="relative w-[50%] ml-auto mr-auto sm:w-[50%] sm:ml-auto sm:mr-auto  md:w-[40%] mb-13 ">
            <img
              src="./lasercutting.jpg"
              alt="Laser Cutting Image"
              className="w-full h-auto object-fill  rounded-lg shadow-xl"
            />
            <div className="absolute bottom-[-40px] right-0  w-[80%] md:w-[70%] md:transform   border-6 border-yellow-500  rounded-lg overflow-hidden shadow-lg ">
              <img
                src="./lasercutting2.jpg"
                alt="Cutting Service Image"
                className="w-full h-auto "
              />
            </div>
          </div>

          {/* <img
            src="https://cuttingmaster.com/wp-content/uploads/2021/10/post.jpg"
            alt="Laser Cutting"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div> */}

          {/* Text Section */}
          <div className="flex-1 text-gray-700 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, scale: 1.5, y: -40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
              className="text-3xl font-semibold text-yellow-600 mb-4"
            >
              Precision{" "}
              <p className="text-red-600 font-extrabold md:text-4xl text-4xl">
                Laser Cutting
              </p>{" "}
              Services in Lahore
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 1.5, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              className="mb-4 text-lg font-sec leading-loose"
            >
              <strong>AMB Engineering Company</strong> introduced laser cutting
              technology in Lahore with the mission of delivering top-notch
              laser cutting services to clients across Pakistan.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.5, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              className="mb-4 text-lg"
            >
              <div>
                <strong>AMB Engineering Company</strong> specializes in{" "}
                <strong>high-precision laser cutting</strong> and{" "}
                <strong>bending services</strong> for both{" "}
                <strong>short-run projects</strong> and{" "}
                <strong>large-scale production</strong>. Whether you need small
                quantities or large batches, our services are designed to meet
                your exact needs. We provide{" "}
                <strong>laser cutting services</strong> for a variety of metals,
                including <strong>steel</strong>,{" "}
                <strong>stainless steel</strong>, <strong>aluminum</strong>,{" "}
                <strong>copper</strong>, <strong>brass</strong>, and{" "}
                <strong>nickel</strong>. Additionally, our{" "}
                <strong>air bending</strong> services cover materials such as{" "}
                <strong>steel</strong>, <strong>stainless steel</strong>, and{" "}
                <strong>aluminum</strong> up to <strong>1/4&quot;</strong>{" "}
                thick, with <strong>copper</strong> and <strong>brass</strong>{" "}
                up to <strong>1/8&quot;</strong> thick.
              </div>

              <div>
                <strong>Why Choose AMB Engineering Company?</strong> We offer
                several key benefits: <strong>fast turnaround</strong> with{" "}
                <strong>rapid laser cutting</strong>,{" "}
                <strong>high-quality precision</strong> in every cut and bend to
                ensure accuracy, and <strong>instant online quotes</strong> via
                our easy-to-use quoting system. Additionally, if you have
                specialized needs, you can <em>contact us</em> for a customized
                quote to ensure your project is completed perfectly.
              </div>

              <div>
                For more information or to request a quote, feel free to{" "}
                <a href="contact-us.html">
                  <strong>contact us</strong>
                </a>{" "}
                today!
              </div>
            </motion.div>
          </div>
        </div>

        <Whatsapp_Button />
        {/* Laser Cutting Solution Section */}
        <div style={{ 
      backgroundImage: "url('/pattern17.png'), url('/pattern14.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "120px 120px,200px 200px",  //  Corrected size format (no comma)
      backgroundPosition: "left 55px, right bottom",  
      backgroundAttachment: "scroll",}}   className="relative">
          <img
            src="https://virmer.com/assets/images/resources/620/header_image/article-bg-14.jpg"
            alt="Laser Cutting"
            className="w-full h-auto max-w-7xl mx-auto rounded-lg shadow-lg"
          />
          <div className="absolute  inset-0 bg-blue-300 opacity-20"></div>
          <div className="max-w-7xl mx-auto space-y-6 relative overflow-hidden  px-6 py-12">
            <motion.div
              initial={{ opacity: 0.2, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "anticipate" }}
              className="text-4xl font-extrabold text-white"
            >
              Advanced <p className="text-5xl text-red-600">Laser Cutting</p>{" "}
              Services
            </motion.div>
            <motion.div
              initial={{ opacity: 0.2, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "anticipate" }}
              className="text-gray-600 text-justify font-sec leading-loose"
            >
              <div >
                <strong>Metal laser cutting</strong> has transformed the
                manufacturing sector by offering highly accurate, efficient, and
                budget-friendly methods for shaping and cutting metal materials.
                This process utilizes an intense laser beam to melt, burn, or
                vaporize the metal, resulting in highly precise cuts with smooth
                edges.
              </div>

              <div>
                Laser cutting is extensively used across a wide range of
                industries, such as <strong>automotive</strong>,{" "}
                <strong>aerospace</strong>, <strong>architecture</strong>, and{" "}
                <strong>construction</strong>. It has become the go-to option
                for metal fabricators needing both speed and precision.
              </div>

              <div>
                There are several advantages to opting for laser cutting in
                metal fabrication. For starters, it ensures exceptional
                precision and accuracy, enabling the creation of intricate
                designs and shapes with minimal waste. Additionally, the speed
                of laser cutting allows for the processing of large volumes of
                materials quickly, making it one of the most efficient
                techniques available for <strong>metalworking</strong>.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.2, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "anticipate" }}
              className="text-gray-800 text-justify leading-loose font-robo"
            >
              <div>
                Another <strong>advantage</strong> of{" "}
                <strong>laser cutting</strong> is its ability to work with a
                variety of materials, such as <strong>steel</strong>,{" "}
                <strong>aluminum</strong>, <strong>copper</strong>, and other
                metals. Its flexibility allows it to handle materials of varying
                thicknesses and shapes, making it an incredibly versatile{" "}
                <strong>metal fabrication</strong> technique.
              </div>

              <div>
                The <strong>laser cutting</strong> process involves a highly
                concentrated laser beam that is aimed at the metal surface. This
                laser is managed by a computer system that directs it along a
                pre-programmed path. The intense heat generated by the beam
                melts or vaporizes the metal, resulting in{" "}
                <strong>precise cuts</strong>.
              </div>

              <div>
                With <strong>metal laser cutting services</strong>, there are a
                variety of options available to cater to the unique requirements
                of different clients, ensuring high-quality and accurate results
                for all types of <strong>metalworking projects</strong>.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Counter component */}

        <div>
          <Counterup />
        </div>

        <div className="max-w-xl xl:max-w-3xl  mx-auto mt-10">
          <Feelfreecontact />
        </div>
      </div>
    </HelmetLayout>
  );
};

export default AboutUS;
