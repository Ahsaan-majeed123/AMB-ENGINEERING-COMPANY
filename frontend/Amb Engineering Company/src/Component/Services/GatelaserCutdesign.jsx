import React, { useContext, useEffect, useState } from "react";
import Whatsapp_Button from "./../Whatsapp_Button";
import { NavLink, Outlet } from "react-router-dom";
import { gatecontext } from "../Context/gate14";
import { motion } from "framer-motion";
import HelmetLayout from "../Layout/Helmet";
import { stairrailingcontext } from "../Context/StairRailing4";
import ScrollToTop from "../Scrolltop/ScrollToTop";
let gate = [
  {
    title: "Gate Design 0",
    pathn: "gate-design-0",
    img: "https://i.pinimg.com/736x/e2/46/f4/e246f48602126308975a11d671d6c5de.jpg",
    description:
      "This gate design features intricate and elegant metalwork with a combination of curved and straight lines. The geometric patterns are simple yet sophisticated, creating an understated but classic look. Its contemporary aesthetic makes it ideal for modern homes, adding a touch of refinement and strength to your entryway. The bold black finish highlights the gate's sturdy structure, ensuring durability and security. This design can be paired with a variety of home styles, making it versatile and popular for urban properties.",
    category: "Modern, Metalwork",
    date: "March 10, 2019",
  },
  {
    title: "Gate Design 1",
    pathn: "gate-design-1",
    img: "https://i.pinimg.com/736x/0c/81/38/0c8138c129d6129e83616f815d519ba1.jpg",
    description:
      "A beautiful blend of traditional and contemporary elements, this gate design features intricate wrought-iron detailing with swirling patterns and floral motifs. The sophisticated design creates a sense of grandeur and elegance, making it perfect for homes with a vintage or classic style. Its tall structure provides privacy and security, while the detailed craftsmanship adds a decorative element that enhances the overall curb appeal of the property. This design is ideal for homeowners looking for a timeless piece that exudes luxury.",
    category: "Traditional, Wrought Iron",
    date: "December 5, 2021",
  },
  {
    title: "Gate Design 2",
    pathn: "gate-design-2",
    img: "https://th.bing.com/th/id/OIP.Ga389QTpuAvP16vxIC0dWwHaNK?w=500&h=889&rs=1&pid=ImgDetMain",
    description:
      "This design features a bold, contemporary aesthetic with sleek lines and sharp angles. The heavy-duty metal construction ensures security, while the minimalistic design focuses on function over decoration. Its modern, no-nonsense appeal is perfect for those who want a gate that offers maximum protection without compromising on style. Ideal for contemporary homes or properties with industrial elements, this gate balances strength with clean, straightforward design.",
    category: "Industrial, Minimalist",
    date: "January 20, 2023",
  },
  {
    title: "Gate Design 3",
    pathn: "gate-design-3",
    img: "https://i.pinimg.com/736x/5c/72/49/5c7249d965a287e9c65ab5c958c4ef82.jpg",
    description:
      "A striking design, this gate features smooth vertical bars paired with intricate geometric patterns, offering both aesthetic appeal and security. The open spaces between the bars create a sense of openness, while still providing a strong deterrent for intruders. The combination of modern and traditional elements ensures that this gate fits well with a wide range of architectural styles, making it a versatile choice for homeowners seeking both beauty and protection for their property.",
    category: "Geometric, Contemporary",
    date: "July 15, 2020",
  },
  {
    title: "Gate Design 4",
    pathn: "gate-design-4",
    img: "https://th.bing.com/th/id/OIP.NTrsm5G6Ex8Zfh_N9mNaGgHaJ4?w=768&h=1024&rs=1&pid=ImgDetMain",
    description:
      "This design features a sophisticated and regal look, with intricate latticework patterns paired with elegant scrollwork on the upper half. The heavy use of ornamental features gives this gate a classic, vintage appeal, reminiscent of gates seen in historic estates or palaces. The vertical posts provide stability and height, ensuring both security and visual grandeur. A perfect option for larger homes or properties with formal landscaping, this gate creates an immediate impression of luxury and elegance.",
    category: "Classical, Ornamental",
    date: "February 25, 2018",
  },
  {
    title: "Gate Design 5",
    pathn: "gate-design-5",
    img: "https://makerbhawan.com/wp-content/uploads/2023/02/unique-door.jpg",
    description:
      "This gate design stands out with its unique use of vertical and horizontal metal panels that offer a sleek, modern aesthetic. The design is simple but striking, with clean lines and a minimalistic approach. The gate is highly durable and offers excellent privacy and security for contemporary homes. The metallic finish gives it an industrial feel while maintaining a refined elegance. Ideal for modern homes or properties in urban settings, this gate combines security and style effortlessly.",
    category: "Modern, Minimalist",
    date: "November 17, 2022",
  },
  {
    title: "Gate Design 6",
    pathn: "gate-design-6",
    img: "https://i.pinimg.com/736x/3c/31/e6/3c31e663188ddb55e5f653b8e5889f24.jpg",
    description:
      "A beautifully intricate design, this gate features detailed metalwork with floral patterns intertwined throughout. The craftsmanship is highlighted by the use of curving lines and ornamental features that create a sense of elegance and artistry. The mix of functional design with aesthetic beauty makes this gate a great choice for homes looking to add sophistication and charm. This type of gate is best suited for properties with traditional or artistic styles, where beauty and protection are equally important.",
    category: "Ornamental, Artistic",

    date: "August 22, 2019",
  },
  {
    title: "Gate Design 7",
    pathn: "gate-design-7",
    img: "https://th.bing.com/th/id/OIP.-c36zZOOj4n8gRYc8P-DTQHaJ4?w=1152&h=1536&rs=1&pid=ImgDetMain",
    description:
      "A bold and striking gate design, this features a large, symmetrical structure with cross-bars and a strong, rectangular frame. The simple yet powerful design offers a feeling of security and strength while maintaining a sense of balance. The solid design with sharp lines and angles provides durability and maximum protection, making it perfect for properties that require a high level of security. This gate works well for more utilitarian or rural properties, offering both practical protection and a no-frills aesthetic.",
    category: "Industrial, Security",
    date: "April 10, 2021",
  },
  {
    title: "Gate Design 8",
    pathn: "gate-design-8",
    img: "https://th.bing.com/th/id/R.21e9e50912e782e086e6910f39c11c55?rik=uAkAiouvuUv%2fSg&pid=ImgRaw&r=0",
    description:
      "This beautiful gate design combines the elegance of scrolling ironwork with modern lines. The ornate design is complemented by a high level of craftsmanship, creating a sense of luxury and refinement. The gate is ideal for homeowners looking to make a statement with an eye-catching feature at their entrance. Perfect for grand homes or properties with a touch of classical charm, this gate offers both beauty and security, standing out as a true piece of artistry in your landscape.",
    category: "Classic, Ornate Ironwork",
    date: "October 8, 2017",
  },
  {
    title: "Gate Design 9",
    pathn: "gate-design-9",
    img: "https://i.pinimg.com/736x/08/4f/d2/084fd266f4f0439483b1c2c13d25ff3c.jpg",
    description:
      "A sleek, minimalist gate design, this features clean lines and a modern aesthetic that blends seamlessly into contemporary architectural styles. The design is simple yet visually appealing, with an emphasis on strength and durability. Ideal for properties that require an unobtrusive, modern entrance, this gate is both functional and stylish, offering maximum privacy and protection. It works well for urban and suburban homes looking to embrace simplicity without sacrificing security or quality.",
    category: "Minimalist, Contemporary",
    date: "May 12, 2020",
  },
  {
    title: "Gate Design 10",
    pathn: "gate-design-10",
    img: "https://makerbhawan.com/wp-content/uploads/2023/05/designer-metal-cutting-front-gate.jpg",
    description:
      "A contemporary take on traditional wrought iron gates, this design features artistic metal cutting with intricate patterns. The sophisticated and modern design adds an element of luxury to any property. The perforated patterns allow for light and air flow, while maintaining privacy and security. This gate is perfect for homeowners who desire a gate that is both functional and visually stunning. Ideal for properties that need a distinctive and upscale entrance, this design offers both beauty and durability.",
    category: "Artistic, Designer",
    date: "June 18, 2022",
  },
  {
    title: "Gate Design 11",
    pathn: "gate-design-11",
    img: "https://i.pinimg.com/736x/f4/23/9d/f4239d6c3ec43febd62f313af1f81341.jpg",
    description:
      "Inspired by Arabian architecture, this gate design features intricate geometric patterns and ornate details that evoke a sense of grandeur and sophistication. The intricate metalwork offers both beauty and security, with a design that draws from historical traditions. Perfect for properties that embrace cultural influences or traditional designs, this gate is an excellent choice for those looking to add a unique, timeless feature to their home’s exterior. It combines artistic flair with functional durability.",
    category: "Cultural, Ornamental",
    date: "July 30, 2023",
  },
  {
    title: "Gate Design 12",
    pathn: "gate-design-12",
    img: "https://th.bing.com/th/id/R.f58e908887c81b385ecdbaa0b790f9e1?rik=NhVaLpJA53v%2bdg&riu=http%3a%2f%2ffreevector.us%2fwp-content%2fuploads%2f2020%2f05%2f27-1.jpg&ehk=issiy%2frujge6hiX%2fxMIw4ZRmX%2bX6LZBK6lUo2wX3UEQ%3d&risl=&pid=ImgRaw&r=0",
    description:
      "This gate design is a beautiful example of modern abstract art combined with functional security. Featuring bold geometric shapes and clean lines, it offers a unique aesthetic that complements contemporary architecture. The lack of ornamental detail makes it an ideal choice for homeowners who want a gate that serves as both a functional barrier and a modern art piece. Perfect for minimalist and modern homes, this gate adds a sleek, stylish touch to any property’s exterior.",
    category: "Abstract, Modern",
    date: "September 14, 2024",
  },
];

const GatelaserCutdesign = () => {
  // const {gate14,setgate14} = useContext(gatecontext)
  useEffect(() => {
    // console.log("gate: ",gate);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // setgate14(gate)
  }, []);


  const {navbaropenCheckForBelowContainerMargin, setnavbaropenCheckForBelowContainerMargin} = useContext(stairrailingcontext)




  const [showScrolltoTop, setshowScrolltoTop] = useState(false)
        
      
      
      useEffect(() => {
      
          const handlescroll = ()=>{
            if (window.scrollY>350) {
              setshowScrolltoTop(true)
            }
            else
            {
              setshowScrolltoTop(false)
            }
          }
      
          window.addEventListener("scroll",handlescroll)
      
          return ()=>{
            window.removeEventListener("scroll",handlescroll)
          }
      
        }, [])


    


  return (
    <HelmetLayout title="Gate Designs - Laser Cut" >

    <div className={`$md:mt-5 mt-3 py-5 md:py-20 bg-gray-100   `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
            className="sm:text-5xl text-4xl font-extrabold text-yellow-600 mb-4"
          >
            Laser-Cut Gate Designs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
            className="text-xl text-gray-600 font-sec text-justify"
          >
           At <strong>AMB Engineering Company</strong>, we specialize in laser cutting gate designs with precision and high quality. Our services include crafting intricate metal gates, mosque gates, and custom designs, all using advanced laser cutting technology. This method provides clean, accurate cuts, making it ideal for creating complex designs quickly and efficiently.

Laser cutting ensures cost-effective production, reduced waste, and the ability to handle various materials. Whether for residential or industrial use, our team delivers personalized gate designs that meet your specific needs, all while maintaining the highest standards of quality and durability.
          </motion.div>
        </div>
        <Whatsapp_Button message="I visit Your Gate Design with Laser Cutting Page!" />

        
        {
          showScrolltoTop&&<ScrollToTop/>
          }

        {/* Grid for Gate Designs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gate.map((product, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 "
              >
                <NavLink to={`/Gate-Laser-Cut-Design-4/gate-design-${index}`}>
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

export default GatelaserCutdesign;
