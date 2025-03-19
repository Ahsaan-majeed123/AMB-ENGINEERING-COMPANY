import React, { useContext, useEffect } from "react";
import Whatsapp_Button from "./../Whatsapp_Button";
import { NavLink, Outlet } from "react-router-dom";
import { gatecontext } from "../Context/gate14";
import { motion } from "framer-motion";
import HelmetLayout from "../Layout/Helmet";
import { ReactTyped } from "react-typed";
import { stairrailingcontext } from "../Context/StairRailing4";
import FAQ from "../FAQ/FAQ";
let stair = [
  {
    title: "Stair Design 0",
    pathn: "gate-design-0",
    img: "https://th.bing.com/th/id/OIP.7cuzBEICI62aqm7vfbK92wHaG8?rs=1&pid=ImgDetMain",
    description:
      "This gate design features intricate and elegant metalwork with a combination of curved and straight lines. The geometric patterns are simple yet sophisticated, creating an understated but classic look. Its contemporary aesthetic makes it ideal for modern homes, adding a touch of refinement and strength to your entryway. The bold black finish highlights the gate's sturdy structure, ensuring durability and security. This design can be paired with a variety of home styles, making it versatile and popular for urban properties.",
    category: "Modern, Metalwork",
    date: "March 10, 2019",
  },
  {
    title: "Stair Design 1",
    pathn: "gate-design-1",
    img: "https://cuttingmaster.com/wp-content/uploads/2022/03/stair-grill-720x750.jpg",
    description:
      "A beautiful blend of traditional and contemporary elements, this gate design features intricate wrought-iron detailing with swirling patterns and floral motifs. The sophisticated design creates a sense of grandeur and elegance, making it perfect for homes with a vintage or classic style. Its tall structure provides privacy and security, while the detailed craftsmanship adds a decorative element that enhances the overall curb appeal of the property. This design is ideal for homeowners looking for a timeless piece that exudes luxury.",
    category: "Traditional, Wrought Iron",
    date: "December 5, 2021",
  },
  {
    title: "Stair Design 2",
    pathn: "gate-design-2",
    img: "https://5.imimg.com/data5/ANDROID/Default/2022/12/DZ/VY/ZQ/18231269/product-jpeg-1000x1000.jpg",
    description:
      "This design features a bold, contemporary aesthetic with sleek lines and sharp angles. The heavy-duty metal construction ensures security, while the minimalistic design focuses on function over decoration. Its modern, no-nonsense appeal is perfect for those who want a gate that offers maximum protection without compromising on style. Ideal for contemporary homes or properties with industrial elements, this gate balances strength with clean, straightforward design.",
    category: "Industrial, Minimalist",
    date: "January 20, 2023",
  },
  {
    title: "Stair Design 3",
    pathn: "gate-design-3",
    img: "https://5.imimg.com/data5/TG/PO/KD/SELLER-30442451/staircase-railing-laser-cutting-service-1000x1000.jpeg",
    description:
      "A striking design, this gate features smooth vertical bars paired with intricate geometric patterns, offering both aesthetic appeal and security. The open spaces between the bars create a sense of openness, while still providing a strong deterrent for intruders. The combination of modern and traditional elements ensures that this gate fits well with a wide range of architectural styles, making it a versatile choice for homeowners seeking both beauty and protection for their property.",
    category: "Geometric, Contemporary",
    date: "July 15, 2020",
  },
];

const StairRailingOurServices = () => {
  // const {gate14,setgate14} = useContext(gatecontext)

  const stringtorender = [
    "  Laser-cut stair railings offer <br/> <span class='text-yellow-500 bg-white border'> precision style</span><span class='text-black bg-white'> and strength</span>  <br>  for your home...",
  ];

  useEffect(() => {
    // console.log("gate: ",gate);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // setgate14(gate)
  }, []);

  const {
    navbaropenCheckForBelowContainerMargin,
    setnavbaropenCheckForBelowContainerMargin,
  } = useContext(stairrailingcontext);
  return (
    <HelmetLayout title="Stair Designs - Laser Cut" canonicalUrl={"https://www.ambengineers.com/StairRailingOurServices"} >
      <div
        className={`bg-gray-100 ${
          navbaropenCheckForBelowContainerMargin ? "mt-17" : "mt-0"
        }  `}
        // className={`bg-gray-100 ${
        //   navbaropenCheckForBelowContainerMargin ? "mt-0" : "mt-4"
        // }  `}
      >
        <div className="relative h-[45vh] sm:h-[55vh] w-full  overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.CbskbHez8Z4revslYF_FqgHaF9?rs=1&pid=ImgDetMain"
            alt="Stair Railing Design"
            className="object-fill w-full h-full "
          />

          <div className="absolute font-sec top-1/3 lg:left-1/3 left-1/8  text-center overflow-hidden ">
            <motion.div
              className="mt-1 text-white text-2xl sm:text-4xl font-bold w-max mx-auto leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <ReactTyped
                strings={stringtorender}
                typeSpeed={15}
                backSpeed={20}
                loop
                backDelay={2000}
                showCursor={false}
                className=""
              />
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl pt-5 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
              className="text-4xl font-extrabold text-yellow-600 mb-4"
            >
              Stair Railing Design with Laser Cutting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
              className="text-xl text-gray-500 font-robo text-justify"
            >
             <p>We specialize in <strong>high-quality custom stair railing designs</strong> created with advanced <em>laser cutting techniques</em>. Whether you’re looking for a <strong>sleek, modern design</strong> or <em>intricate detailing</em>, our laser cutting process ensures <span>precision</span> and a flawless finish every time. Our state-of-the-art equipment offers exceptional <u>accuracy</u>, allowing us to produce stair railings that perfectly complement your architectural style. With the flexibility to create both simple and ornate designs, we provide tailored solutions that meet your specific needs. Laser cutting provides significant advantages over traditional methods, including <strong>cost-effectiveness</strong>, faster production times, and intricate design capabilities. It’s the perfect solution for those seeking durable, high-quality stair railings at an affordable price. Let us help you bring your vision to life with our advanced laser cutting technology, delivering beautiful, long-lasting stair railing designs tailored to your preferences.</p>

            </motion.p>
          </div>
          <Whatsapp_Button message="I visited from your Stair Railing All Services Page!" />

          {/* Grid for Gate Designs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stair.map((product, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 "
                >
                  {/* {`/Gate-Laser-Cut-Design-4/gate-design-${index}`} */}

                  <NavLink
                    to={`/Stair-Laser-Cut-Design-4/stair-design-${index}`}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-64 object-fill rounded-t-lg cursor-pointer border-9 border-gray-300 rounded "
                    />

                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {product.title.split(" ").slice(0, -1).join(" ")}{" "}
                        {parseInt(product.title.split(" ").pop()) + 1}
                        {/* {item.title.split(" ").slice(0, -1).join(" ")} 
                  {
                     parseInt(item.title.split(" ").pop())+1
                  } */}
                      </h3>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>

          <FAQ />
        </div>

        {/* <Outlet/>  when nested component show app.jsx nested route define */}
      </div>
    </HelmetLayout>
  );
};

export default StairRailingOurServices;
