import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Lasercutgatequery = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto text-xl p-6">
      {/* Contact Form Section */}
      <div className="lg:w-1/3 w-full mx-auto">
        <div className="bg-gradient-to-r from-black via-white-500 to-blue-400 p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-white mb-6">
            Have inquiries? Drop us a message, and we'll get back to you
            shortly!
          </p>
          {/* Link to the Contact Page */}
          <Link to="/contact">
            <div
              title="Contact Us Page"
              className="border p-4 rounded-lg text-center text-white bg-gray-800 hover:bg-gray-700 transition duration-200"
            >
              <span className="text-lg font-semibold">Contact Us</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Laser Cut Gate Query Section */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="text-3xl font-bold mb-4"
        >
          LASER CUT GATE QUERY
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="text-lg text-gray-700 text-justify"
        >
          <div>
            <strong>Metal laser cutting</strong> is a state-of-the-art technique
            that employs a <strong>high-powered laser</strong> to precisely cut
            through a wide range of metal materials, such as sheets, plates, and
            pipes. Unlike traditional methods like plasma or water jet cutting,{" "}
            <em>laser cutting</em> offers numerous advantages, including{" "}
            <strong>exceptional precision</strong>, faster processing speeds,
            and greater flexibility. During the process, a{" "}
            <strong>computer-controlled</strong> laser beam is directed at the
            material to melt, burn, or vaporize the metal. The focused beam
            enables the creation of <strong>intricate patterns</strong> and{" "}
            <em>complex shapes</em> with remarkable accuracy. This advanced
            technique is invaluable in industries that require high-quality,
            custom-made components, including <strong>automotive</strong>,{" "}
            <strong>aerospace</strong>, and <em>high-tech manufacturing</em>.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lasercutgatequery;
