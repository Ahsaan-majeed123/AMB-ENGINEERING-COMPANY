import React, { useContext, useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { TbClockHour1Filled } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";
import Whatsapp_Button from "../Whatsapp_Button";
import HelmetLayout from "../Layout/Helmet";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";
import { Backend_Url } from "../utils/utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await axios.post(
        // "http://localhost:8086/api/userEmail",
        `${Backend_Url}`,
        { name, email, contactNo, message, category },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.success) {
        setMessageSent(true);
        toast.success(result.data.message); // Show success message
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      // Here error handling should use `error.message` rather than `result.data.message`
      toast.error(
        "There was an error sending the message. Please try again later."
      );
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop the loading spinner after completion
    }
  };

  const {
    navbaropenCheckForBelowContainerMargin,
    setnavbaropenCheckForBelowContainerMargin,
  } = useContext(stairrailingcontext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

  return (
    <HelmetLayout title="Contact Us - AMB Eng Comp">
      <div>
        <div
          className={` md:mt-5 mt-3     md:py-13 bg-gray-50 py-12`}
          // className={` ${
          //   navbaropenCheckForBelowContainerMargin ? "mt-0" : "mt-4"
          // } bg-gray-50 py-12`}
        >
          <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-xl">
            {/* Icons Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white p-10 text-6xl rounded-xl flex justify-center items-center shadow-lg hover:scale-105 transition duration-300">
                <FaPhone />
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-300 text-white p-10 text-6xl rounded-xl flex justify-center items-center shadow-lg hover:scale-105 transition duration-300">
                <MdAttachEmail />
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 text-white p-10 text-6xl rounded-xl flex justify-center items-center shadow-lg hover:scale-105 transition duration-300">
                <FaAddressBook />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-10 text-6xl rounded-xl flex justify-center items-center shadow-lg hover:scale-105 transition duration-300">
                <TbClockHour1Filled />
              </div>
            </div>

            {showScrolltoTop && <ScrollToTop />}

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                <b className="text-2xl text-gray-800">PHONE</b>
                <p className="text-lg text-gray-600">+92-304 4681357</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                <b className="text-2xl text-gray-800">E-MAIL</b>
                <p className="text-lg text-gray-600">
                  farhanbajwa418@gmail.com
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                {/* <b className="text-2xl text-gray-800">OUR ADDRESS</b>
                <p className="text-lg text-gray-600">
                  Sandha Road Lahore near Coca-Cola Factory
                </p> */}

                <strong className="text-2xl text-gray-800">Our Address: </strong> <p className="text-lg text-gray-600">T No, 4 Near Coca-Cola Wearhouse Sandha Lahore</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                <b className="text-2xl text-gray-800 uppercase">
                  OPENING HOURS
                </b>
                <p className="text-lg text-gray-600">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
                <p className="text-lg text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <Whatsapp_Button message="From Your Contact Us Page" />

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto py-12">
          <div className="capitalize text-center mb-6 text-5xl pb-8 font-bold text-gray-800">
            Get in Touch
          </div>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="gap-10 grid grid-cols-2">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Contact Number Input */}
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Your Contact Number"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  className="w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Select */}
              <div>
                <select
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Your Desired Service</option>
                  <option value="Laser Precision Cutting">
                    Laser Precision Cutting
                  </option>
                  <option value="Metal Structure Fabrication">
                    Metal Structure Fabrication
                  </option>
                  <option value="Custom Door Creations">
                    Custom Door Creations
                  </option>
                  <option value="Artistic Islamic Calligraphy">
                    Artistic Islamic Calligraphy
                  </option>
                  <option value="Bespoke Stair Railing Designs">
                    Bespoke Stair Railing Designs
                  </option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="mb-5">
                <textarea
                  required
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-max mx-auto flex cursor-pointer p-4 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition duration-300"
                disabled={loading} // Disable button while loading
              >
                {loading ? <p>Sending...</p> : <p>Send a Message</p>}
              </button>
            </div>
            <div className="text-center text-xl font-bold mt-5">
              {messageSent && <p>Your Message Was Sent! Thanks</p>}
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.607484296337!2d74.26927617507107!3d31.562385145066052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d0014561c23%3A0xf2448f96910adc5d!2sAMB%20Engineering%20Company!5e0!3m2!1sen!2s!4v1741171231957!5m2!1sen!2s"
            width="100%" // This ensures the iframe takes full width of its container
            height="450"
            className="rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 xl:w-1/2 h-96" // Tailwind classes for responsiveness
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </HelmetLayout>
  );
};

export default Contact;
