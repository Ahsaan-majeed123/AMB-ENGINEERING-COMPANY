import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { stairrailingcontext } from "../Context/StairRailing4";
import axios from "axios";
import { Backend_Url } from './../utils/utils';
import { FaWindowClose } from "react-icons/fa";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverdropdown, setHoverDropdown] = useState(false);
  const [hoverdropdowncatelogue, setHoverDropdownCatelogue] = useState(false);

  const [logourl, setlogourl] = useState("");

  const {
    navbaropenCheckForBelowContainerMargin,
    setnavbaropenCheckForBelowContainerMargin,
  } = useContext(stairrailingcontext);

  let cateloguedownloadlist = [
    {
      name: "Ceiling Shades",
      publicidd: "ceiling_and_shades_oc8lvg",
    },
    {
      name: "Home Decore",
      publicidd: "Decor_hdgpef",
    },
    {
      name: "Doors",
      publicidd: "Doors_bmmvx7",
    },
    {
      name: "Furniture",
      publicidd: "furnitures_ygexku",
    },
    {
      name: "Gate Design",
      publicidd: "Gate_Design_wgjwpa",
    },
    {
      name: "Partition",
      publicidd: "partitions_unsrmk",
    },
    {
      name: "Railing",
      publicidd: "Railings_jhmfok",
    },
    {
      name: "Stair Railing",
      publicidd: "Railing_and_stairs_d9ay3i",
    },
    {
      name: "Stair Steps",
      publicidd: "Stair_Steps_tmfppa",
    },
    {
      name: "Wall Cladding",
      publicidd: "Wall_Cladding_ojumyg",
    },
    {
      name: "Windows",
      publicidd: "Windows_wiyoxa",
    },
  ];

  const fetchurlpdf = async (event, index) => {
    event.preventDefault();
    // const publicid = "wall-clading_j3yzwq";
    const publicid = cateloguedownloadlist[index].publicidd;

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
  };
  // const fetchurllogoimg = async () => {
 
  //   // const publicid = "wall-clading_j3yzwq";
  //   const publicid = "WhatsApp_Image_2025-03-11_at_8.35.34_PM_bcaefw";

  //   try {
  //     const res = await axios.get(
  //       `${Backend_Url}/get-img-url`,
  //       // "http://localhost:8086/api/userEmail/get-img-url",
  //       {
  //         params: { public_id: publicid },
  //       }
  //     );
  //     setlogourl(res.data.url);
  //     // window.open(res.data.url, "_blank"); // Open the PDF automatically
  //   } catch (error) {
  //     console.error("Error fetching the PDF URL:", error);
  //     alert("Failed to fetch the PDF URL. Please try again.");
  //   }
  // };

  // useEffect(() => {
  //   fetchurllogoimg();
  // }, []);

  const toggleMenu = () => {
    // console.log("jjj");

    setIsOpen(!isOpen);
    setnavbaropenCheckForBelowContainerMargin(!isOpen);
    setHoverDropdown(false);
    setHoverDropdownCatelogue(false);
  };

 

  const toggleMenu2andfetchurlpdf = (event, index) => {
    setIsOpen(!isOpen);
    setnavbaropenCheckForBelowContainerMargin(!isOpen);
    setHoverDropdown(false);
    setHoverDropdownCatelogue(false);

    fetchurlpdf(event, index);
  };

  let ourservicehoverdata = [
    {
      name: "Custom Gate Laser Design",
      path: "/Gate-Laser-Cut-Design-4",
    },
    {
      name: "Precision Laser Cutting for Mechanical Parts",
      path: "/laser-cutting-Mechanical-parts-3",
    },
    {
      name: "Professional Laser Cutting Services",
      path: "/laser-cutting-service-1",
    },
    {
      name: "Laser Cut Staircase Railing Designs",
      path: "/StairRailingOurServices",
    },
    {
      name: "Decorative Wall Cladding Laser Cut",
      path: "/WallCladingOurServices",
    },
  ];

  const FUNNN = () => {
    console.log("funnn");
  };

  const [bgcolormobile, setbgcolormobile] = useState(false);
  const [bgcolormobile2, setbgcolormobile2] = useState(false);
  const [bgcolormobile3, setbgcolormobile3] = useState(false);

  return (
    <div>
      {/* Navbar Container */}
      {/* <div className="fixed border border-8 left-0 right-0 top-0 z-1000 bg-gradient-to-r from-blue-500 to-purple-600 p-2 pb-4 md:pb-2 w-[100%]  shadow-lg box-border "> */}
      <div className={`fixed pt-1 pb-1  left-0 right-0 top-0 z-20 max-h-20 bg-black shadow-sm box-border w-full  shadow-gray-600`}>
        {/* Logo and Navigation Section */}

        <div className="w-full  box-border flex justify-between  items-center">
          {/* Logo Section */}
          <NavLink to={"/"}>
            <div className="w-15  mb-1  ml-6 md:w-15 cursor-pointer rounded-full border-4 border-white shadow-lg">
              <img
                className="w-15 md:w-17 rounded-full"
                src={'../logo.jpg'}
                // src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
                alt="Logo"
                title="AMB ENG COMPANY"
              />
            </div>
          </NavLink>

          {/* Navbar Links */}
          <div className=" w-360   items-center   xl:w-full  text-center  ">
            <ul className="hidden h-18   lg:flex lg:max-w-3xl xl:max-w-4xl mx-auto justify-between  text-white items-center">
              {/* Home Link */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "lg:text-xl   md:text-xl  xl:text-xl text-sm font-bold  border-l-5 border-amber-600  bg-white text-black font-sec  shadow-2xs flex items-center pr-7 pl-7 h-12 rounded-xl"
                    : "text-xl  hover:text-yellow-300 transition-all  pb-1 duration-200"
                }
                to="/"
              >
                <li>Home</li>
              </NavLink>

              {/* Our Services Dropdown */}
              {/* <NavLink
                onMouseEnter={() => setHoverDropdown(true)}
                onMouseLeave={() => {setHoverDropdown(false)}}
                className={({ isActive }) =>
                  isActive
                    ? "relative md:text-xl h-20 flex items-center text-sm xl:text-2xl font-bold shadow-2xs pr-2 pl-2   bg-white text-black font-sec  rounded-md"
                    : "relative text-xl h-20 flex items-center hover:text-yellow-300 transition-all duration-300"
                }
                to="/OurServicesClick"
              >
                <div className="flex items-center whitespace-nowrap">
                  Our Services
                  <IoMdArrowDropdown />
                </div>
                {hoverdropdown && (
                  <div className="absolute left-0 top-13 md:top-19 text-sm  w-40 md:w-max mt-1 bg-white text-gray-800 rounded rounded-l-none  shadow-lg z-10">
                    <ul>
                      {ourservicehoverdata.map((p, i) => (
                        <NavLink
                          key={i}
                          className="p-3 border-b font-semibold flex justify-start hover:bg-amber-600 hover:text-white transition-colors duration-300 cursor-pointer"
                          to={p.path}
                        >
                          {p.name}
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                )}
              </NavLink> */}

              {/* Our Services Dropdown */}
              <NavLink
                onMouseEnter={() => setHoverDropdown(true)}
                onMouseLeave={() => setHoverDropdown(false)}
                className={({ isActive }) =>
                  isActive
                    ? "relative md:text-xl  flex items-center border-l-5 border-amber-600  text-sm xl:text-xl font-bold shadow-2xs pr-2 pl-2 bg-white text-black font-sec    h-12 rounded-xl"
                    : "relative text-xl h-12 flex items-center hover:text-yellow-300 transition-all duration-200"
                }
                to="/OurServicesClick"
              >
                <div className="flex items-center whitespace-nowrap">
                  Our Services
                  <IoMdArrowDropdown />
                </div>

                {hoverdropdown && (
                  <div className="
                   text-sm w-40 md:w-max mt-1 bg-white text-gray-800 rounded rounded-l-none shadow-lg fixed top-14">
                  {/* <div className="
                  absolute left-0 top-13 md:top-10
                   text-sm w-40 md:w-max mt-1 bg-white text-gray-800 rounded rounded-l-none shadow-lg z-300 "> */}
                    <ul>
                      {ourservicehoverdata.map((p, i) => (
                        <li key={i}>
                          <NavLink
                            className="p-3 border-b font-semibold flex justify-start hover:bg-amber-600 hover:text-white transition duration-200 cursor-pointer "
                            to={p.path}
                          >
                            {p.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </NavLink>

              {/* About Us Link */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " text-sm md:text-xl xl:text-xl border-l-5 border-amber-600  font-bold flex items-center shadow-2xs pr-2 pl-2 text-black bg-white font-sec h-12 rounded-xl"
                    : "text-xl hover:text-yellow-300 transition-all pl-1 pr-1 lg:pb-1 pb-3 duration-200"
                }
                to="/about-AMB-ENG-Company"
              >
                <li>About Us</li>
              </NavLink>

              {/* Catalogue Download Dropdown */}
              <NavLink
                onMouseEnter={() => setHoverDropdownCatelogue(true)}
                onMouseLeave={() => setHoverDropdownCatelogue(false)}
                className={({ isActive }) =>
                  isActive
                    ? "relative lg:text-xl font-sec border-l-5 border-amber-600  font-bold  shadow-2xs pr-2 pl-2  flex justify-center bg-white text-black   h-12 rounded-xl "
                    : "relative text-xl h-20 flex items-center  hover:text-yellow-300 transition-all duration-200"
                }
                to="/home"
              >
                <li className="inline-flex items-center">
                  Catalogue Download
                  <IoMdArrowDropdown />
                </li>

                {hoverdropdowncatelogue && (
                  <div className="
                  overflow-y-auto h-[68vh]  font-medium text-sm lg:text-xl w-40 border md:w-62 mt-1 border-gray-300 shadow-2xs  bg-white text-gray-800  fixed top-14  ">
                  {/* <div className="absolute h-[78vh] overflow-y-auto top-13 font-semibold md:top-19 left-0 text-sm lg:text-xl w-40 border md:w-67 mt-1 border-gray-300 shadow-2xs  bg-white text-gray-800   z-10"> */}
                    <ul className="space-y-2">
                      {cateloguedownloadlist.map((p, i) => (
                        <li
                          key={i}
                          onClick={(event) => fetchurlpdf(event, i)}
                          className="p-3 pr-10 flex justify-start hover:bg-amber-600 hover:text-white transition-colors duration-200  
                          border-b
                          cursor-pointer"
                        >
                          {p.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </NavLink>

              {/* Contact Link */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "xl:text-2xl md:text-xl border-l-5 border-amber-600  flex items-center  bg-white text-black text-xl font-bold font-sec pb-1  shadow-2xs pr-2 pl-2  h-12 rounded-xl"
                    : "text-xl hover:text-yellow-300 transition-all duration-200  h-12 items-center flex"
                }
                to="/contact"
              >
                <li>Contact</li>
              </NavLink>
              {/* 
              // Blog Link 
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "lg:text-2xl text-xl font-semibold pb-1 bg-gradient-to-r from-blue-900  to-yellow-700 text-white rounded-md"
                    : "text-xl hover:text-yellow-300 transition-all duration-300"
                }
                to="/blog"
              >
                <li>Blog</li>
              </NavLink> */}
            </ul>

            {/* Hamburger Menu for mobile screens */}
            <div className="lg:hidden h-20  flex items-center justify-end text-3xl pr-5">
              <button
                className="cursor-pointer w-max text-white focus:outline-none  transition duration-300 ease-in-out "
                onClick={toggleMenu}
                // onBlur={toggleMenu}
                // onFocus={toggleMenu2}
              >
                {
                  isOpen?
                  <FaWindowClose />

                  :
                  <GiHamburgerMenu />
                }
              </button>
              {/* <button
                className="cursor-pointer w-max text-white focus:outline-none  transition duration-300 ease-in-out "
                onClick={toggleMenu}
                // onBlur={toggleMenu}
                // onFocus={toggleMenu2}
              >
                {
                  isOpen?
                  <FaWindowClose />

                  :
                  <GiHamburgerMenu />
                }
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          
        className={`lg:hidden fixed z-20 bg-gradient-to-br from-gray-700 to-gray-900/80 top-20 p-2 box-border shadow-lg w-full 
         
          `}
 

        >
          <ul className={`flex flex-col items-center space-y-4 text-white   
          `}>
            <li
              className={`w-[97.5vw] text-center ${
                bgcolormobile && "border-l-8 border-amber-600 bg-blue-500/25"
              }`}
            >
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    setbgcolormobile(true);
                    return "text-2xl font-semibold  shadow-2xs pr-2 pl-2 text-white rounded-md ";
                  } else {
                    setbgcolormobile(false);
                    return "text-xl  hover:text-yellow-300 transition-all duration-300";
                  }
                }}
                to="/"
                onClick={() => toggleMenu()}
              >
                Home
              </NavLink>
            </li>





            {/* Our Services Dropdown */}
            <NavLink
              onMouseEnter={() => setHoverDropdown(true)}
              onMouseLeave={() => setHoverDropdown(false)}
              className={({ isActive }) =>
                isActive
                  ? "relative md:text-xl text-xl lg:text-xl font-semibold shadow-2xs pr-2 pl-2   border-l-8 border-amber-600 bg-blue-500/25  text-white rounded-md"
                  : "relative text-xl hover:text-yellow-300 transition-all duration-300"
              }
              to="/OurServicesClick"
            >
              <div
                className="flex items-center whitespace-nowrap"
                onClick={() => setHoverDropdown((prev) => !prev)}
              >
                Our Services
                <IoMdArrowDropdown />
              </div>

              {hoverdropdown && (
                <div className="absolute left-0 top-6 md:top-6 text-sm lg:text-xl w-38 md:w-45 mt-1 bg-white text-gray-800 rounded shadow-lg z-10">
                  <ul>
                    {ourservicehoverdata.map((p, i) => (
                      <NavLink
                        key={i}
                        className="p-3 border-b flex justify-start hover:bg-amber-600 hover:text-white font-bold transition-colors duration-300  cursor-pointer"
                        to={p.path}
                        onClick={() => toggleMenu()}
                      >
                        {p.name}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              )}
            </NavLink>

            {/* Our Services Dropdown */}



           

            <li
              className={`w-[97.5vw] text-center ${
                bgcolormobile2 && "border-l-8 border-amber-600 bg-blue-500/25"
              }`}
            >
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    setbgcolormobile2(true);
                    return "text-2xl font-semibold  shadow-2xs pr-2 pl-2 text-white rounded-md";
                  } else {
                    setbgcolormobile2(false);
                    return "text-xl  hover:text-yellow-300 transition-all duration-300";
                  }
                }}
                to="/about-AMB-ENG-Company"
                onClick={() => toggleMenu()}
              >
                About Us
              </NavLink>
            </li>

            {/* Catalogue Download Dropdown */}
            <NavLink
              onMouseEnter={() => setHoverDropdownCatelogue(true)}
              onMouseLeave={() => setHoverDropdownCatelogue(false)}
              to={"/home"}
              className={({ isActive }) =>
                isActive
                  ? "relative lg:text-xl md:text-2xl text-xl font-semibold border-l-8 border-amber-600 bg-blue-500/25  shadow-2xs pr-2 pl-2   text-white rounded-md"
                  : "relative text-xl hover:text-yellow-300 transition-all duration-300"
              }
            >
              <li
                className="inline-flex items-center"
                onClick={() => setHoverDropdownCatelogue((prev) => !prev)}
              >
                Catalogue Download
                <IoMdArrowDropdown />
              </li>

              {hoverdropdowncatelogue && (
                <div className="absolute h-[45vh] overflow-y-auto left-0 top-6 md:top-5 text-sm lg:text-xl w-58 md:w-69 mt-1  md:mt-2 bg-white text-gray-800 rounded shadow-lg z-2">
                  <ul>
                    {cateloguedownloadlist.map((p, i) => (
                      <li
                        key={i}
                        className="p-3 border-b flex justify-start hover:bg-amber-600 hover:text-white font-bold transition-colors duration-300  cursor-pointer"
                        onClick={(event) => toggleMenu2andfetchurlpdf(event, i)}
                        // onClick={(event) => fetchurlpdf(event, i)}
                      >
                        {p.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </NavLink>

            <li
              className={`w-[97.5vw] text-center ${
                bgcolormobile3 && " border-l-8 border-amber-600 bg-blue-500/25"
              }`}
            >
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    setbgcolormobile3(true);
                    return "text-2xl font-semibold  shadow-2xs pr-2 pl-2 text-white rounded-md";
                  } else {
                    setbgcolormobile3(false);
                    return "text-xl  hover:text-yellow-300 transition-all duration-300";
                  }
                }}
                to="/contact"
                onClick={() => toggleMenu()}
              >
                Contact
              </NavLink>
            </li>

            {/* <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-semibold bg-gradient-to-r from-blue-900 shadow-2xs pr-2 pl-2  to-yellow-700 text-white rounded-md"
                  : "text-xl hover:text-yellow-300 transition-all duration-300"
              }
              to="/blog"
              onClick={() => toggleMenu()}
            >
              <li>Blog</li>
            </NavLink> */}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`${
          navbaropenCheckForBelowContainerMargin ? "pt-0" : "pt-16"
        }`}
      >
        {/* Add your page content here */}
      </div>
    </div>
  );
};

export default Navbar;
