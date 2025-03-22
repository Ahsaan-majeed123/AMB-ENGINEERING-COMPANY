import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Feelfreecontact from "./../Contact/Feelfreecontact";
import { motion } from "framer-motion";

const OurMission = () => {
  const [questionOpen, setQuestionOpen] = useState(null);

  // Array of questions and answers with HTML formatting (bold and line breaks)
  const faqData = [
    {
      question: "How does Laser Cutting Work?",
      answer:
        "Laser cutting uses a concentrated laser beam to precisely cut through materials. <br /> <b><i>This method ensures high levels of accuracy</i></b> and is widely used in various industrial applications.",
    },
    {
      question: "Which materials can be processed with laser cutting?",
      answer:
        "Our laser cutting services can handle a broad range of materials such as: <br /> <b><u>1. Metal</u></b> <br /> <u>2. Wood</u> <br /> <b>3. Acrylic</b> <br /> 4. Plastic <br /> <b>5. Leather</b> <br /> And more options available!",
    },
    {
      question: "What is the precision level of laser cutting?",
      answer:
        "Laser cutting offers remarkable precision, achieving tolerances of up to 0.1mm, depending on the material. <br /> <b><i>This makes it perfect for cutting intricate and detailed patterns.</i></b>",
    },
    {
      question: "Why should I choose laser cutting?",
      answer:
        "Laser cutting offers clean and accurate results, minimizes waste, <b><i>provides exceptional precision</i></b>, and enables the creation of complex shapes without requiring extra tools or setup.",
    },
  ];

  // Toggle the question and answer
  const toggleAnswer = (index) => {
    if (questionOpen === index) {
      setQuestionOpen(null); // Close if clicked again
    } else {
      setQuestionOpen(index); // Open the clicked question's answer
    }
  };

  return (
    <>
    <div
      className="bg-amber-50 py-19"
      style={{
        backgroundImage:
          "url('/pattern16.png'),url('/pattern4.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 56px,  center left", // Corrected positions
        backgroundSize: "120px 100px, 235px 320px,215px 180px", // Resizing images
        
      }}
    >
      <div
       className=" flex flex-col bg-gradient-to-bl from-amber-100 to-white md:flex-row gap-8 max-w-7xl mx-auto px-4 border-t-4 pt-5 border-b-4 border-amber-600 rounded-lg shadow-xl">
        {/* Image Section */}
        <div className="relative  w-full sm:w-[50%] md:w-[38%] mx-auto overflow-hidden rounded-lg shadow-lg  h-max">
          <img
            src="./ourmissiongate.png"
            alt="Laser Cutting Image"
            className="border-6 border-amber-600 w-[79vw] sm:w-full sm:h-[80vh] mx-auto h-[60vh] rounded-lg shadow-xl"
          />

          {/* left-1/2 transform -translate-x-1/2   w-[80%] md:w-[70%] md:transform */}
          <div className="absolute bottom-0 left-1/2  transform translate-x-1       border-4 border-white  rounded-xl   shadow-lg ">
            <img
              src="./ourmission2.jpg"
              alt="Cutting Service Image"
              className="w-full  h-auto"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full pt-3 md:w-[60%] flex flex-col justify-center text-center md:text-left space-y-6">
          <p className="text-3xl font-extrabold text-gray-800 tracking-wide">
            Frequently Asked Questions
          </p>

          {/* FAQ Questions */}
          <div className="space-y-4  text-justify">
            {faqData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 1.2, x: -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                key={index}
                className="group"
              >
                {/* Question */}
                <div
                  className="flex   justify-between items-start cursor-pointer text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
                  onClick={() => toggleAnswer(index)} // Toggle the answer
                >
                  <span>{item.question}</span>
                  {questionOpen === index ? (
                    <FaChevronUp className="text-xl ml-2  text-blue-600 group-hover:text-blue-800 transition duration-300" />
                  ) : (
                    <FaChevronDown className="text-xl ml-2  text-blue-600 group-hover:text-blue-800 transition duration-300" />
                  )}
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    questionOpen === index
                      ? "max-h-screen opacity-100" // Full expansion with opacity
                      : "max-h-0 opacity-0" // Collapsed with zero opacity
                  }`}
                  style={{
                    maxHeight: questionOpen === index ? "500px" : "0", // Dynamically adjust the height
                  }}
                >
                  <div
                    className="border-l-4 border-blue-600 mt-2 p-4 bg-gray-50 rounded-lg shadow-md transition-all duration-300"
                    dangerouslySetInnerHTML={{ __html: item.answer }} // Set answer as HTML
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Strategy Section */}
          <div className="mt-12 mb-12  overflow-hidden">
            <motion.p
              initial={{ opacity: 0, scale: 1.7, x: 10 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-3xl font-extrabold text-amber-600 mb-6"
            >
              Our Approach
            </motion.p>
            <div className="text-xl text-gray-600 leading-relaxed mb-4 flex gap-3">
              <div className=" items-center flex ">
                <FaArrowAltCircleRight />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="w-[90%] text-justify"
              >
                <div>
                  <strong>Our goal</strong> is to harness cutting-edge{" "}
                  <em>technology</em> and creativity to offer top-tier{" "}
                  <strong>laser cutting services</strong>. We are dedicated to
                  delivering precise, <b>accurate</b>, and <u>on-time</u>{" "}
                  solutions to our clients.
                </div>
              </motion.div>
            </div>
            <div className=" text-xl text-gray-600 leading-relaxed mb-4 flex gap-3">
              <div
                // initial={{ opacity: 0, scale: 1.2, x: -40 }}
                // whileInView={{ opacity: 1, scale: 1, x: 0 }}
                // transition={{
                //   delay: 0.3,
                //   duration: 0.5,
                //   ease: "easeOut",
                // }}
                className=" items-center flex "
              >
                <FaArrowAltCircleRight />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="w-[90%] text-justify"
              >
                <div>
                  We <strong>strive</strong> to turn our clients' <u>visions</u>{" "}
                  into reality by utilizing <em>state-of-the-art equipment</em>{" "}
                  and <b>innovative processes</b>.
                </div>
              </motion.div>
            </div>
            <div className="flex text-xl text-gray-600 leading-relaxed mb-4 gap-3">
              <div
                // initial={{ opacity: 0, scale: 1.2, x: -100 }}
                // whileInView={{ opacity: 1, scale: 1, x: 0 }}
                // transition={{
                //   delay: 0.3,
                //   duration: 0.5,
                //   ease: "easeOut",
                // }}
                className=" items-center flex "
              >
                <FaArrowAltCircleRight />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="w-[90%] text-justify"
              >
                <div>
                  Our <strong>goal</strong> is to establish ourselves as a
                  trusted leader in the <em>laser cutting industry</em>, known
                  for our <b>high-quality solutions</b> and{" "}
                  <b>dependable services</b>. We aim to consistently deliver{" "}
                  <i>innovative</i> and <b>precise</b> cutting-edge solutions to
                  our clients.
                </div>
              </motion.div>
            </div>
            <div
              // initial={{ opacity: 0, scale: 1.2, x: -40 }}
              // whileInView={{ opacity: 1, scale: 1, x: 0 }}
              // transition={{
              //   delay: 0.3,
              //   duration: 1.3,
              //   ease: "easeOut",
              // }}
              className="flex text-xl text-gray-600 leading-relaxed  mx-auto font-bold w-[93%] text-justify"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <strong>AMB Engineering Company</strong> laser cutters are
                essential tools for both prototyping and large-scale
                manufacturing. Our <em>advanced laser cutting technology</em> is
                widely used in <b>machine shops</b> to efficiently cut large
                materials. <b>AMB Engineering Company</b> is trusted by hardware
                firms to create affordable, high-speed prototypes.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Feelfreecontact />
      </>
  );
};

export default OurMission;
