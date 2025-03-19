import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { gatecontext } from "../Context/gate14";
import { useLocation, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Whatsapp_Button from "./../Whatsapp_Button";
import axios from "axios";
import { motion } from "framer-motion";
import HelmetLayout from "../Layout/Helmet";
import Lasercutgatequery from './../Gatedesign14/Lasercutgatequery';
import { stairrailingcontext } from "../Context/StairRailing4";
import { WallCladding8context } from "../Context/wallClading8";
import { FaMessage, FaTiktok } from 'react-icons/fa6';
import ScrollToTop from "../Scrolltop/ScrollToTop";
import { IoLogoWhatsapp } from "react-icons/io";

const Wallcladingdesign = ({canonicalUrl}) => {
//   const { gate14, setgate14 } = useContext(gatecontext);
  const {wallclading8, setwallclading8} = useContext(WallCladding8context);

  const [copygate14, setcopygate14] = useState([]);
  const category = "wallclading";

  const { pathname } = useLocation();

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  

  // Extract the part of the pathname after the last dash
  let design_no = pathname.split("-").pop();
  // console.log("design no: ", design_no);
  //   console.log("design no: ", design_no);
  useEffect(() => {
    // setcopygate14([...gate14]);
    setcopygate14([...wallclading8]);
  }, [wallclading8]);

  // Corrected filter logic
  const related_product = copygate14.filter(
    (p, i) =>
      p.title.toLowerCase().includes(category.toLowerCase()) &&
      p.title.slice(-1) != design_no
  );

  // Shuffle the filtered products and then get the first 4
  const shuffledRelatedProduct = shuffleArray([...related_product]);

  const firstfourrelateditem = shuffledRelatedProduct.slice(0, 4);



  const [showScrolltoTop, setshowScrolltoTop] = useState(false)
                
              
              
              useEffect(() => {
              
                  const handlescroll = ()=>{
                    if (window.scrollY>350) {
                      setshowScrolltoTop(true)
                    }
                    else
                    {
                      setshowScrolltoTop(false)
                    }
                  }
              
                  window.addEventListener("scroll",handlescroll)
              
                  return ()=>{
                    window.removeEventListener("scroll",handlescroll)
                  }
              
                }, [])

                useEffect(() => {
                                   window.scrollTo({
                                    top:0,
                                    behavior:"smooth"
                                   })
                                  }, [])

 const {navbaropenCheckForBelowContainerMargin,setnavbaropenCheckForBelowContainerMargin} = useContext(stairrailingcontext)

  return (
    <HelmetLayout title="Specific Gate Design - Laser Cut"   canonicalUrl={canonicalUrl}>

    <div  
    
    className={`bg-gradient-to-l from-gray-100 to-blue-100  md:mt-5 mt-3     md:py-13  py-8`}
    // className={`bg-gray-100 ${navbaropenCheckForBelowContainerMargin?"mt-0":"mt-4"}  py-8`}
    
    
    >
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Section */}
        
        <div className="mb-8">
          <img
            className="mt-5 hover:scale-105 transition-all w-70 h-130 lg:w-90 lg:h-125  mx-auto object-fill rounded-lg shadow-lg"
            src={wallclading8[design_no].img}
            alt="Laser Cut Gate Design"
          />
        </div>

        <Whatsapp_Button message="I visited from Your Wall Cladding Page!" />
        {/* Text and Image Layout */}
        <div className="grid grid-cols-1 font-sec md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
              className="text-4xl uppercase text-amber-600 font-bold  mb-4"
            >
              {/* {item.title.split(" ").slice(0, -1).join(" ")} 
                  {
                     parseInt(item.title.split(" ").pop())+1
                  } */}
              {wallclading8[design_no].title.split(" ").slice(0, -1).join(" ")}{" "}
              {parseInt(wallclading8[design_no].title.split(" ").pop()) + 1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
              className="text-lg text-gray-700 leading-relaxed text-justify"
            >
              {wallclading8[design_no].description}
            </motion.p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="border-amber-500 border-6 w-70 h-100  lg:w-90 lg:h-110 max-w-lg rounded-lg shadow-md"
              src={wallclading8[design_no].img}
              alt="Laser Cut Floral Gate"
            />
          </div>
        </div>
      </div>
        
      {
          showScrolltoTop&&<ScrollToTop/>
          }


      {/* Laser Cut Gate Query Section */}
      <div className="bg-amber-500 mt-10 p-8 rounded-lg shadow-lg">
        <Lasercutgatequery />
      </div>

      <div className="mt-3 ml-5 w-max flex gap-3 text-black items-center">
        <div className="font-bold">Share</div>
        <a  href="https://www.facebook.com/farhanbajwa.g/"  target="_blank" title="My Facebook" className="cursor-pointer  hover:text-red-400">
                   <FaFacebook />
                 </a>
                 <a href="https://www.tiktok.com/@amb_eng?_t=ZS-8uZd9AtMHlX&_r=1" target="_blank" title="My Tiktok" className="cursor-pointer hover:text-red-400">
                   <FaTiktok />
                 </a>
                 <a href="https://wa.me/923044681357?text=Assalam-u-Alaikum!" target="_blank" title="My Whatsapp" className="cursor-pointer hover:text-red-400">
                   <IoLogoWhatsapp />
                 </a>
                 <div title="Coming Soon.." className="cursor-pointer hover:text-red-400">
                   <FaTwitter />
                 </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10 max-w-7xl mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
          className="text-3xl text-center font-bold text-gray-800 mb-4"
        >
          Related Products
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {firstfourrelateditem.map((item, index) => (
            <NavLink
              key={index}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }) 
              }
              to={`/Wallclading-Laser-Cut-Design-8/Wallclading-design-${item.pathn
                .split("-")
                .pop()}`}
            >
              <div
                key={index}
                className="cursor-pointer bg-white p-4 rounded-lg shadow-md "
              >
                <img
                  className="w-full h-40 object-fill rounded-md hover:scale-103 cursor-pointer"
                  src={item.img}
                  alt={item.title}
                />
                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                  {parseInt(item.title.split(" ").pop()) + 1}
                </h3>
                <div className="mt-2 text-gray-500">{item.date}</div>

                <button
                  className="bg-gray-700 text-white p-1 rounded mt-4 cursor-pointer sm:p-3"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Read More..
                </button>
              </div>
            </NavLink>
          ))}
        </div>
        <NavLink to={"/WallCladingOurServices"}>
          <button className="mt-7 text-center text-2xl text-white cursor-pointer font-bold bg-gray-500 p-2 w-max flex mx-auto rounded-2xl ">
            See All
          </button>
        </NavLink>
      </div>
    </div>
    </HelmetLayout>
  );
};

export default Wallcladingdesign;
