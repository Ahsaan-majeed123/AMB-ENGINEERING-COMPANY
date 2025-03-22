import React, { useEffect, useState } from "react";
import CuttingWithTradition from "./CuttingWithTradition";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import axios from "axios";
import { Backend_Url } from "../utils/utils";

const OurServices = () => {
  const [fileurl, setfileurl] = useState("");

  let img = [
    {
      title: "Precision Bending Services",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGu6WzzTjHO4xPPreSrz7P0avfO5j4Qr_iA&s",
    },
    {
      title: "Advanced Laser Cutting Solutions",
      TITLE_For_hover: "Laser Cutting",
      path: "laser-cutting-service",
      imge: "https://th.bing.com/th/id/R.f9e82056da37c3a98b0d63e5ff230610?rik=eLHrUiGTJfQVbA&riu=http%3a%2f%2ffederalmetalworks.com%2fwp-content%2fuploads%2f2015%2f04%2fLaser_cutting.jpg&ehk=G%2bpL7MGSUImgjh9CFWj%2fPo1QvF9LoC0%2fdnaiXB7gVpI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Custom Wall Cladding Designs",
      imge: "https://image.made-in-china.com/2f0j00cUmYskLBlobK/Laser-Cut-Metal-Decorative-Wall-Art-Panel-for-Home-Office-Indoor-or-Outdoor-Use.webp",
    },
    {
      title: "Precision Mechanical Parts Cutting",
      TITLE_For_hover: "Mechanical Parts",
      path: "laser-cutting-Mechanical-parts",
      imge: "https://th.bing.com/th/id/R.19f67d41236e78a705daf6af972b45d7?rik=Q0ta%2fB2RhXpWzA&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
      title: "Customized Gate Designs Up to 14 Feet",
      TITLE_For_hover: "Gate Designs upto 14",
      path: "Gate-Laser-Cut-Design",
      imge: "https://i.pinimg.com/736x/19/50/25/1950250d0bfdc65fd71650179806de19.jpg",
    },
    {
      title: "Safety Grills & Stylish Stair Designs",
      path: "Gate-Laser-Cut-Design",
      imge: "https://i.pinimg.com/736x/77/b9/89/77b989608b7540859bbb96001deb4ce4.jpg",
    },
  ];
  

  const fetchurlpdf = async (event,index) => {
    if (index != 2 && index!=5 && index!=0) {
      return;
    } else if (index == 2) {
      event.preventDefault();
      const publicid = "Wall_Cladding_ojumyg";
      try {
        const res = await axios.get(
          `${Backend_Url}/get-pdf-url`,
          // "http://localhost:8086/api/userEmail/get-pdf-url",
          {
            params: { public_id: publicid },
          }
        );
      window.open(res.data.url, "_blank"); // Open the PDF automatically 
      } catch (error) {
        console.error("Error fetching the PDF URL:", error);
        alert("Failed to fetch the PDF URL. Please try again.");
      }
    }
    else if(index==0)
    {
      event.preventDefault()
    }
    else if (index == 5) {
      event.preventDefault();
      const publicid = "Railing_and_stairs_d9ay3i";
      try {
        const res = await axios.get(
          `${Backend_Url}/get-pdf-url`,
          // "http://localhost:8086/api/userEmail/get-pdf-url",
          {
            params: { public_id: publicid },
          }
        );
      window.open(res.data.url, "_blank"); // Open the PDF automatically 
      } catch (error) {
        console.error("Error fetching the PDF URL:", error);
        alert("Failed to fetch the PDF URL. Please try again.");
      }
    }
  };


  return (
    <>
    {/* bg-gradient-to-tr from-red-500/80 via-yellow-100/50 to-blue-300 */}
      {/* <div className="bg-gradient-to-b from-amber-50 via-amber-200   to-amber-50 shadow-2xl"
       */}
      <div 
  className="shadow-2xl"
  style={{ 
    backgroundImage: "url('/pattern17.png'), linear-gradient(to bottom, #fef3c76c, #fcd34d9a, #fef3c744) ",  
    backgroundRepeat: "no-repeat, no-repeat",  // Space added
    backgroundPosition: "right 13px, center top",  // Adjusted for better placement
    backgroundSize: "90px 85px, cover",  // Ensures the first image keeps its size, gradient covers full area
    backgroundAttachment: "scroll",
  }}


      
      
      // style={{ 
      //   backgroundImage: "url('/pattern13.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",  // Ensures the image covers the entire div
      //   backgroundPosition: "100px top",  // Centers the image
      //   backgroundSize: "200px 200px",
      //   backgroundAttachment: "scroll", // Optional: Keeps background fixed on scroll
      // }}
      >
        <div className="max-w-7xl overflow-hidden w-full  mx-auto px-4 py-12 pb-30 ">
          <motion.div
            initial={{ opacity: 0, scale:1.5, x: -50 }}
            whileInView={{ opacity: 1,scale:1,  x: 0 }}
            transition={{delay:0.5, duration: 0.5, ease: "easeInOut" }}
            className="font-sec  pb-3 border-b-4 border-yellow-500 sm:text-center items-center text-justify text-3xl font-extrabold text-gray-800 mb-12 px-4 md:px-0 leading-relaxed"
          >
           Laser <p className="text-4xl text-amber-500">Cutting Solutions
            </p> We Offer
          </motion.div>

        

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {img.map((product, index) => {
              return (
                  <NavLink
                    key={index}
                    to={`/${product.path}-${index}`}
                    onClick={(event) => fetchurlpdf(event,index)}
                  >
                    <div
                      key={index}
                      className="relative  rounded-lg shadow-lg transform  hover:shadow-xl cursor-pointer"
                      title={
                        index==2?"Wall Cladding PDF":index==5?"Stair Railing PDF":index==0?"": `${product.TITLE_For_hover}`
                      }
                    >
                      
                      <motion.img
 initial={{ opacity: 0, y:-40 }}
 whileInView={{ opacity: 1,y : 0 }}
 transition={{ duration: 0.2 }}
                     
                        className="w-full hover:-translate-y-5  h-64 object-fill rounded-lg transition duration-300 ease-in-out"
                        src={product.imge}
                        alt={`Service ${index + 1}`}
                      />

                      <div
                        className="p-3 -tracking-wide font-sans font-bold text-center absolute bottom-0 w-full bg-amber-500 text-xl"
                        dangerouslySetInnerHTML={{ __html: product.title }}
                      />
                    </div>
                  </NavLink>
                 
              );
            })}
          </div>
        </div>
      </div>

      <CuttingWithTradition />
    </>
  );
};

export default OurServices;
