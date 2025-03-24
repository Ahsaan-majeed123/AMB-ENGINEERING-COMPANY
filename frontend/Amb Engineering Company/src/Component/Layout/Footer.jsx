import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { Backend_Url } from "../utils/utils";
import axios from 'axios';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await axios.post(
        `${Backend_Url}/newsletteremail`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.success) {
        setMessageSent(true);
        setEmail(""); // Clear the input field after submission
        // toast.success(result.data.message); // Show success message
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      // toast.error(
      //   "There was an error sending the message. Please try again later."
      // // );
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // toast.configure();
  }, []);

  return (
    <div className="mt-9 bg-gray-800 text-white py-8">
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <Link to="/">
            <img
              src="../blacklogo.jpg"
              alt="AMB Engineering Company Logo"
              className="rounded-full object-fill w-32 h-32 mx-auto md:mx-0"
            />
          </Link>
        </div>

        {/* Quick Links Section */}
        <div>
          <p className="text-lg font-semibold text-center md:text-left mb-4">Quick Links</p>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about-AMB-ENG-Company" className="hover:text-blue-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/sitemap" target="_blank" className="hover:text-blue-500">Sitemap</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <p className="text-lg font-semibold text-center md:text-left mb-4">Our Services</p>
          <ul className="space-y-2">
            <li><Link to="/laser-cutting-service-1" className="hover:text-blue-500">Laser Cutting Service</Link></li>
            <li><Link to="/laser-cutting-Mechanical-parts-3" className="hover:text-blue-500">Mechanical Parts</Link></li>
            <li><Link to="/Gate-Laser-Cut-Design-4" className="hover:text-blue-500">Gate Laser Cut Design</Link></li>
            <li><Link to="/StairRailingOurServices" className="hover:text-blue-500">Stair Railing Services</Link></li>
            <li><Link to="/WallCladingOurServices" className="hover:text-blue-500">Wall Cladding Services</Link></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <p className="text-lg font-semibold text-center md:text-left mb-4">Contact Information</p>
          <ul className="space-y-2">
            <li>Phone: +92 304 4681357</li>
            <li>Email: farhanbajwa418@gmail.com</li>
            <li>Address: T No, 4 Near Coca-Cola Wearhouse Sandha Lahore</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
<div className="bg-gray-900 text-center py-7 mt-10 rounded-lg shadow-lg">
  <p className="text-3xl font-semibold text-white mb-6">Subscribe To Our Newsletter</p>
  
  <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4 md:space-x-6 max-w-lg mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="bg-white p-3 rounded-lg text-black text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
    <button
      type="submit"
      disabled={loading}
      className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {loading ? <span>Sending...</span> : <span>Subscribe</span>}
    </button>
  </form>

  {messageSent && (
    <div className="text-center text-xl font-bold text-white mt-6">
      <p>Your email has been received! Thank you for subscribing.</p>
    </div>
  )}
</div>


      {/* Social Media Icons */}
      <div className="bg-gray-800 py-6">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/farhanbajwa.g/" target="_blank" className="text-2xl hover:text-red-500" title="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.tiktok.com/@amb_eng?_t=ZS-8uZd9AtMHlX&_r=1" target="_blank" className="text-2xl hover:text-red-500" title="TikTok">
            <FaTiktok />
          </a>
          <a href="https://wa.me/923044681357?text=Assalam-u-Alaikum!" target="_blank" className="text-2xl hover:text-green-500" title="WhatsApp">
            <IoLogoWhatsapp />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="text-2xl hover:text-blue-500" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-2xl hover:text-blue-500" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-center py-4 mt-10">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AMB Engineering Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
