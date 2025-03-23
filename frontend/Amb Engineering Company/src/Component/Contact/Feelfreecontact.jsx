import React from "react";

const Feelfreecontact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-200 to-red-400 p-8 rounded-lg shadow-lg text-center space-y-2 ">
        <div className="text-4xl font-bold text-gray-800">
          Have a query? <br />
          Don’t hesitate to reach out to us!
        </div>
        <div className="text-3xl font-bold text-yellow-700 mt-2">
          +92-304 4681357
        </div>
        <a
          href="https://wa.me/923044681357?text=Hello%20bro%20how%20can%20i%20help%20you?"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Me"
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold uppercase rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block cursor-pointer"
        >
          Message Us
        </a>
      </div>
    </div>
  );
};

export default Feelfreecontact;
