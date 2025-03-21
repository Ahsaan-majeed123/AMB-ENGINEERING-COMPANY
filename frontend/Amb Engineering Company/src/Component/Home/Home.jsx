import React, { useContext, useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import OurServices from "./../Services/OurServices";
import { IoLogoWhatsapp } from "react-icons/io";
import { ReactTyped } from "react-typed";

// Import framer-motion
import { motion } from "framer-motion";
import Whatsapp_Button from "./../Whatsapp_Button";
import HelmetLayout from "../Layout/Helmet";
import axios from "axios";
import { stairrailingcontext } from "../Context/StairRailing4";

import ScrollToTop from "./../Scrolltop/ScrollToTop";
import { Backend_Url } from "../utils/utils";

const Home = () => {
  const [imgno, setimgno] = useState(0);

  const [videoUrl, setvideoUrl] = useState("");
  const [showScrolltoTop, setshowScrolltoTop] = useState(false);

  const {
    navbaropenCheckForBelowContainerMargin,
    setnavbaropenCheckForBelowContainerMargin,
  } = useContext(stairrailingcontext);

  const img = [
     "https://th.bing.com/th/id/R.c6e52ee5b3391e77f45841d1d24a19cc?rik=76pKm7LYMBV8Pw&pid=ImgRaw&r=0",
    "./design.jpg",


    "./ceiling_and_shades_oc8lvg_page-0010.jpg",
    "./Fiber-Laser-Cutting-2.jpg",


    
    // // Video (YouTube URL) needs the playlist parameter for looping
    // "https://www.youtube.com/embed/3lLfXX9Xu-0?",

    "./laser.jpg",
   


    "./isl2.jpg",
    "./isl.jpg"

    
  ];

  const prev = () => {
    setimgno((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setimgno((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        // If the current image is a video (index 2 in this case), switch after a longer time
        // if (imgno === 2) {
        next(); // Move to next slide after 15 seconds for video
        // } else {
        // next();  // Move to next slide after 5 seconds for images
        // }
      },
      // imgno === 2 ? 15000 :
      4000
    ); // 15 seconds for video, 5 seconds for images

    return () => clearInterval(interval);
  }, [imgno]);

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

  const stringtorender = [
    "I am  <span class='text-yellow-500'>Farhan</span> Majeed...",
    "I can provide <span class='text-yellow-500'>Laser Cutting</span> services...",
    "I can <span class='text-yellow-500'>create Gate</span> Designs...",
    "I can also <span class='text-yellow-500'>make Islamic</span> make Islamic Calligraphy...",
  ];

  // Change Favicon

  const [faviconUrl, setFaviconUrl] = useState("");

  // Fetch the favicon URL when the component mounts using axios
  useEffect(() => {
    const fetchFaviconUrl = async () => {
      const publicid = "WhatsApp_Image_2025-03-11_at_8.35.37_PM_xvo73k";
      try {
        const response = await axios.get(`${Backend_Url}/get-favicon-url`, {
          params: { public_id: publicid }, // Pass public_id as a query param
        });

        if (response.data && response.data.url) {
          // Set the favicon URL state
          setFaviconUrl(response.data.url);
        } else {
          console.error("Error fetching favicon URL:", response.data);
        }
      } catch (error) {
        console.error("Error fetching favicon URL with axios:", error);
      }
    };

    fetchFaviconUrl();
  }, []); // Empty dependency array to run this effect once, on mount

  useEffect(() => {
    if (faviconUrl) {
      // Update the favicon dynamically
     const favicon =  document.querySelector("#favicon");
     const appleIcon = document.querySelector("#apple-icon");
    

     if (favicon) {
      favicon.href = faviconUrl;
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = faviconUrl;
      document.head.appendChild(newFavicon);
    }

    if (appleIcon) {
      appleIcon.href = faviconUrl;
    } else {
      const newAppleIcon = document.createElement("link");
      newAppleIcon.rel = "apple-touch-icon";
      newAppleIcon.href = faviconUrl;
      document.head.appendChild(newAppleIcon);
    }


    }
  }, [faviconUrl]); // This will trigger when faviconUrl state changes

  return (
    <HelmetLayout title="Laser Cut Machine - Amb Eng Company" canonicalUrl={"https://www.ambengineers.com"}>
      <div
        className={` 
         ${navbaropenCheckForBelowContainerMargin ? "mt-15" : "mt-0"} 
        box-border bg-gradient-to-r from-black via-gray-600  to-purple-700  h-[67vh] sm:h-[85vh] w-[99vw]`}
      >
        <div className="relative">
          {/* Image carousel */}
          <div className="relative w-full h-[57vh] sm:h-[75vh]">
            {img.map(
              (image, index) => (
                // index === 2 ? ( // Video on index 2
                //   <iframe
                //     key={index}
                //     width="100%"
                //     height="100%"
                //     src={`${image}autoplay=1&mute=1&loop=1&playlist=3lLfXX9Xu-0`} // Correctly formatted video URL with autoplay and loop
                //     allow="autoplay; encrypted-media"
                //     allowFullScreen={false}
                //     title={`video-${index}`}
                //     frameBorder="0"
                //   />
                // ) : (
                <img
                  key={index}
                  src={image}
                  alt={`carousel-${index}`}
                  className={`absolute top-0 left-0 w-full h-full ${index==2?"object-contain":"object-fill"}   transition-opacity duration-1000 ease-in-out ${
                    imgno === index ? "opacity-100 " : "opacity-0 "
                  }`}
                />
              )
              // )
            )}
          </div>

          {/* Carousel Dots */}
          <div className="flex absolute bottom-2 left-[50%] transform -translate-x-1/2">
            {img.map((image, index) => (
              <div
                key={index}
                className={` cursor-pointer  text-3xl ${
                  imgno === index ? "text-black scale-125" : "text-gray-300"
                }`}
                onClick={() => setimgno(index)}
              >
                <GoDotFill className="" />
              </div>
            ))}
          </div>

          {showScrolltoTop && <ScrollToTop />}

          {/* Previous Button */}
          <motion.button
            onClick={prev}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity duration-300 text-xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <GrPrevious />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={next}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 opacity-70 hover:opacity-100 transition-opacity duration-300 text-xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <GrNext />
          </motion.button>
        </div>

        {/* Typed Text Section */}
        <motion.div
          className="mt-1 bottom-0 left-1/2 text-white text-2xl sm:text-2xl   max-w-80 md:w-max  text-center font-semibold  mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ReactTyped
            strings={stringtorender}
            typeSpeed={60}
            backSpeed={30}
            loop
            backDelay={1000}
            showCursor={false}
            className="font-extrabold"
          />
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <Whatsapp_Button message="From Home Page Visit" />

      {/* Services Section */}
      <OurServices />
    </HelmetLayout>
  );
};

export default Home;
