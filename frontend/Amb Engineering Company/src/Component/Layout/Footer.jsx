import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <div className="mt-9 bg-gray-800 text-white py-8">
      <div className=" px-4  flex max-w-7xl mx-auto">
        <img
          src="https://m.media-amazon.com/images/I/51YJsBTSFSL.jpg"
          className="rounded-full border border-4 border-blue-400 w-38 h-43 sm:w-45"
          height={200}
          width={200}
          alt=""
        />

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
