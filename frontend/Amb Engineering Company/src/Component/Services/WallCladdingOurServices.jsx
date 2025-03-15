import React, { useContext, useEffect, useState } from "react";
import Whatsapp_Button from "./../Whatsapp_Button";
import { NavLink, Outlet } from "react-router-dom";
import { gatecontext } from "../Context/gate14";
import { delay, motion } from "framer-motion";
import HelmetLayout from "../Layout/Helmet";
import { ReactTyped } from "react-typed";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";

let wallclading = [
  {
    title: "wallclading Design 0",
    pathn: "wallclading-design-0",
    img: "https://th.bing.com/th/id/OIP.pa2gNFabH2gLxc_NE6uCzwHaFj?rs=1&pid=ImgDetMain",
    description:
      "This wall cladding design blends smooth, flowing lines with a minimalist touch, creating a striking yet understated aesthetic. The use of vertical panels adds texture and depth to the wall while maintaining an open and airy feel. The black metal finish provides a modern, timeless appeal that fits perfectly with contemporary interiors. This design is ideal for homeowners seeking an elegant and functional solution for modern or minimalist spaces, offering both durability and beauty.",
    category: "Modern, Minimalist, Contemporary",
    date: "March 10, 2019",
  },
  {
    title: "wallclading Design 1",
    pathn: "wallclading-design-1",
    img: "https://am-lasercutting.com/wp-content/uploads/2023/02/wall-cladding5.jpg",
    description:
      "This elegant wall cladding design features intricate patterns and ornamental detailing that combine traditional and contemporary elements. The decorative patterns enhance the wall's aesthetic appeal, while the textured finish adds depth and character. The design's luxurious look makes it ideal for classic homes, luxury spaces, or accent walls. Its combination of fine craftsmanship and timeless beauty offers a perfect addition to any room, adding sophistication and charm with a functional edge.",
    category: "Traditional, Elegant, Wrought Iron",
    date: "December 5, 2021",
  },
  {
    title: "wallclading Design 2",
    pathn: "wallclading-design-2",
    img: "https://am-lasercutting.com/wp-content/uploads/2023/02/wall-cladding-960x720.jpg",
    description:
      "This modern wall cladding design features a sleek, industrial aesthetic with sharp lines and a minimalist approach. The simple yet strong structure of the panels ensures durability, making it a perfect choice for urban lofts or modern homes. The black metal finish creates a bold statement, and the clean lines emphasize functionality and style. This design is ideal for those looking for a minimalistic, contemporary look that complements both industrial and modern decor.",
    category: "Industrial, Minimalist, Modern",
    date: "January 20, 2023",
  },
  {
    title: "wallclading Design 3",
    pathn: "wallclading-design-3",
    img: "https://th.bing.com/th/id/OIP.DBQd6xacuqj9SnyAipKdiAHaHa?rs=1&pid=ImgDetMain",
    description:
      "This wall cladding design integrates geometric patterns with smooth, vertical panels, offering a stylish and balanced look. The open spaces between the panels allow light to flow freely, creating an airy and spacious feel. The geometric lines bring a contemporary touch, making it suitable for both modern and transitional spaces. This durable design provides both functionality and a modern flair, making it a great choice for homeowners looking to enhance their room's aesthetic while maintaining practicality.",
    category: "Geometric, Contemporary, Artistic",
    date: "July 15, 2020",
  },
  {
    title: "wallclading Design 4",
    pathn: "wallclading-design-4",
    img: "https://am-lasercutting.com/wp-content/uploads/2023/02/wall-cladding4-960x720.jpg",
    description:
      "This wall cladding design incorporates geometric shapes and sleek, vertical panels that enhance the modern feel of any space. The design allows natural light to pass through the gaps, creating an open and airy atmosphere. The combination of clean lines and the geometric flair adds a dynamic yet balanced aesthetic to the wall. Ideal for contemporary spaces, this design offers both artistic appeal and structural durability, making it a fantastic choice for homeowners who value elegance and function.",
    category: "Geometric, Contemporary, Artistic",
    date: "March 25, 2022",
  },
  {
    title: "wallclading Design 5",
    pathn: "wallclading-design-5",
    img: "https://cpimg.tistatic.com/07418412/b/4/Laser-Cut-Aluminum-Wall-Cladding.jpg",
    description:
      "This laser-cut aluminum wall cladding design combines intricate patterns with functional elegance. The detailed designs bring a refined and artistic look to the space, while the aluminum material offers long-lasting durability. The interplay of light and shadow created by the cut-outs adds depth to the wall, making it an eye-catching feature in any room. Perfect for both modern and artistic spaces, this design adds sophistication and practicality, serving as both a decorative and protective feature.",
    category: "Artistic, Geometric, Modern",
    date: "April 10, 2022",
  },
  {
    title: "wallclading Design 6",
    pathn: "wallclading-design-6",
    img: "https://th.bing.com/th/id/R.bb088f195142ae35a7a82e9debccc256?rik=OIe2T5wED%2bex9A&riu=http%3a%2f%2fpic.made-in-china.com%2f6f3j00aCPTFUIGFRgD%2fLaser-Cut-Screen-for-Wall-Cladding.jpg&ehk=vC55RX0WQVj%2bXR3KAwA7VOd22GsDFSdKeUfz8w4wHhU%3d&risl=&pid=ImgRaw&r=0",
    description:
      "This unique wall cladding design uses smooth vertical panels combined with modern laser-cut patterns to create a balanced, sophisticated look. The panels allow light to filter through, enhancing the overall sense of space. The clean lines and contemporary design make it an excellent choice for minimalist interiors. It serves as both a functional wall treatment and an aesthetic feature, offering a contemporary solution for homeowners who appreciate modern elegance and the beauty of intricate design.",
    category: "Geometric, Contemporary, Modern",
    date: "June 12, 2021",
  },
  {
    title: "wallclading Design 7",
    pathn: "wallclading-design-7",
    img: "https://th.bing.com/th/id/OIP.7abzXwJQSDpxu5u77uUcdQHaHa?rs=1&pid=ImgDetMain",
    description:
      "This laser-cut wall cladding design uses bold, geometric patterns that create a visually striking focal point for any room. The vertical panels add a sense of height and openness to the space, while the intricate design adds texture and interest. The design is perfect for both modern and transitional interiors, providing a balance between artistry and function. The sturdy material ensures long-lasting durability, making it a practical yet stylish option for a wide range of interior design styles.",
    category: "Geometric, Contemporary, Artistic",
    date: "July 15, 2020",
  },
  {
    title: "wallclading Design 8",
    pathn: "wallclading-design-8",
    img: "https://lasercut.world/wp-content/uploads/2023/06/Yossef_Capture_the_essence_of_a_green_aluminum_laser-cut_wall_c_69cdb9bb-38ce-4ac4-bf44-72f763ab9a3c-1024x1024.webp",
    description:
      "This unique green laser-cut aluminum wall cladding design is both striking and artistic. The pattern adds an intricate layer of texture and beauty to any space, while the vertical panels allow light to filter through, enhancing the airy feel of the room. The combination of geometric design and natural color makes this cladding a perfect choice for eco-friendly or nature-inspired interiors. It's ideal for homeowners who want to incorporate a unique, creative touch into their walls while maintaining a clean, modern aesthetic.",
    category: "Geometric, Contemporary, Artistic",
    date: "June 25, 2023",
  },
];

const WallCladdingOurServices = () => {
  // const {gate14,setgate14} = useContext(gatecontext)

  const stringtorender = [
    "Laser-cut wall cladding adds <br/> <span class='text-yellow-500 font-bold border  bg-amber-50 '> elegance </span> <span class='text-black bg-gray-50 '> durability </span> <br> and <span class='text-white font-bold'> timeless beauty </span> to your space...",
  ];

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
    <HelmetLayout title="Wall Cladding Designs - Laser Cut">
      <div
        // className={`bg-gray-100 md:mt-5 mt-3    py-0 md:py-13 `}
        className={`bg-gray-100 ${
          navbaropenCheckForBelowContainerMargin ? "mt-0" : "mt-4"
        } `}
      >
        <div className="relative h-[54vh] w-full  overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/2187c1_3115ac2d003c4c68b6c074df0e18ab18~mv2.jpg/v1/fill/w_560,h_373,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Elite%20Youth%20and%20Family%20Services%20-%20Salvaged%20APS%20Concrete%20Panels%20Entry%20(1).jpg"
            alt="Stair Railing Design"
            className="object-fill w-full h-full "
          />

          <div className="absolute top-1/3 md:left-1/6 sm:left-1/7 lg:left-1/4 xl:left-1/3 left-1/19  text-center overflow-hidden  ">
            <motion.div
              className="mt-1 text-white text-2xl  bg-gray-400/75 rounded-sm sm:text-3xl md:text-3xl lg:text-4xl leading-relaxed font-bold w-max mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, delay: 0.4, y: 0 }}
              transition={{ duration: 1 }}
            >
              <ReactTyped
                strings={stringtorender}
                typeSpeed={15}
                backSpeed={20}
                loop
                backDelay={3000}
                showCursor={false}
                className="font-extrabold"
              />
            </motion.div>
          </div>
        </div>

        {showScrolltoTop && <ScrollToTop />}

        <div className="max-w-7xl pt-5 mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
              className="text-4xl font-extrabold text-yellow-600 mb-4"
            >
              Wall Cladding Design with Laser Cutting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
              className="text-xl text-gray-700"
            >
              <p>
                We specialize in{" "}
                <strong>high-quality custom wall cladding designs</strong>{" "}
                crafted with cutting-edge <em>laser cutting techniques</em>.
                Whether you're seeking a{" "}
                <strong>sleek, contemporary look</strong> or{" "}
                <em>intricate detailing</em>, our laser cutting process ensures{" "}
                <span>precision</span> and a flawless
                finish every time. Our advanced equipment provides exceptional{" "}
                <u>accuracy</u>, enabling us to create wall cladding that
                enhances your space’s aesthetic, whether you prefer minimalist
                or ornate styles.
              </p>

              <p>
                Laser cutting offers significant benefits over traditional
                methods, including <strong>cost-efficiency</strong>, faster
                production times, and the ability to create complex designs with
                ease. It’s the ideal choice for those looking for durable,
                high-quality wall cladding at competitive prices. Allow us to
                bring your vision to life with our laser cutting technology,
                delivering stunning and long-lasting wall cladding solutions
                that are tailored to your design preferences.
              </p>
            </motion.p>
          </div>
          <Whatsapp_Button message="I Visited Your Wall Cladding Page!" />

          {/* Grid for Gate Designs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wallclading.map((product, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 "
                >
                  {/* {`/Gate-Laser-Cut-Design-4/gate-design-${index}`} */}

                  <NavLink
                    to={`/Wallclading-Laser-Cut-Design-8/Wallclading-design-${index}`}
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
        </div>

        {/* <Outlet/>  when nested component show app.jsx nested route define */}
      </div>
    </HelmetLayout>
  );
};

export default WallCladdingOurServices;
