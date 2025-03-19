import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from "axios";
import { Backend_Url } from "../utils/utils";
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {

  const [logourl, setlogourl] = useState("")

  const fetchurllogoimg2 = async () => {
      // const publicid = "wall-clading_j3yzwq";
      const publicid = "WhatsApp_Image_2025-03-11_at_8.35.37_PM_xvo73k";
  
      try {
        const res = await axios.get(
          `${Backend_Url}/get-img-url`,
          // "http://localhost:8086/api/userEmail/get-img-url",
          {
            params: { public_id: publicid },
          }
        );
        setlogourl(res.data.url);
        // window.open(res.data.url, "_blank"); // Open the PDF automatically
      } catch (error) {
        console.error("Error fetching the PDF URL:", error);
        alert("Failed to fetch the PDF URL. Please try again.");
      }
    };
  
    useEffect(() => {
      fetchurllogoimg2();
    }, []);
  return (
    <div className="mt-9 bg-gray-800 text-white py-8">
      <div className=" px-4  flex max-w-7xl mx-auto">
        <Link to="/">
        <img
          // src="https://m.media-amazon.com/images/I/51YJsBTSFSL.jpg"
          src= {logourl}
          className="rounded-full   object-fill  w-65 h-43 sm:w-55 sm:h-45"
          height={200}
          width={200}
          alt="My logo for amb engineering company and go to home"
        />
        </Link>

        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">
          AMB Engineering Engineering Company
          </h2>
          <div className="text-lg mb-2">
            <strong>Our Address: </strong>T No, 4 Near Coca-Cola Wearhouse Sandha Lahore, Punjab
          </div>
          <div className="text-lg mb-4">
            <strong>Opening Hours:</strong>
            <br />
            Monday to Saturday: 9:00 AM - 6:00 PM
            <br />
            Sunday: Closed
          </div>
        </div>
      </div>

      <div className=" pl-10 pr-10 border-t border-gray-700 pt-4 flex justify-between">
        <p className="text-sm">
          &copy; 2025 AMB Engineering Company.  All rights reserved.
        </p>

        <div className="flex gap-3 text-white sm:mr-24 text-xl  ">
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
      </div>
    </div>
  );
};

export default Footer;
