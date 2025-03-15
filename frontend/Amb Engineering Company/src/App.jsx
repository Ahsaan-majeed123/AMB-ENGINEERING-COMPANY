import React, { useContext, useEffect } from "react";
import Navbar from "./Component/Layout/Navbar";
import Footer from "./Component/Layout/Footer";
import { Route, Routes } from "react-router";
import Home from "./Component/Home/Home";
import LaserCuttingService from "./Component/Services/LaserCuttingService";
import Contact from "./Component/Contact/Contact";
import MechanicalPartsLaserCutting from "./Component/Services/MechanicalPartsLaserCutting";
import GatelaserCutdesign from "./Component/Services/GatelaserCutdesign";
import AboutUS from "./Component/Aboutus/AboutUS";
import Gatedesign from "./Component/Gatedesign14/Gatedesign";
import { gatecontext } from "./Component/Context/gate14";
import StairRailingOurServices from "./Component/Services/StairRailingOurservices";
import { stairrailingcontext } from "./Component/Context/StairRailing4";
import Stairdesign from "./Component/StairDesign4/StairDesign4";
import WallCladdingOurServices from "./Component/Services/WallCladdingOurServices";
import { WallCladding8context } from "./Component/Context/wallClading8";
import Wallcladingdesign from "./Component/WallCladingdesign8/Wallcladingdesign8";
import OurServicesClick from "./Component/Services/OurServicesClick";

const App = () => {

  let gate = [
    {
        title: "Gate Design 0",
        pathn:"gate-design-0",
        img: "https://i.pinimg.com/736x/e2/46/f4/e246f48602126308975a11d671d6c5de.jpg",
        description: "This gate design features intricate and elegant metalwork with a combination of curved and straight lines. The geometric patterns are simple yet sophisticated, creating an understated but classic look. Its contemporary aesthetic makes it ideal for modern homes, adding a touch of refinement and strength to your entryway. The bold black finish highlights the gate's sturdy structure, ensuring durability and security. This design can be paired with a variety of home styles, making it versatile and popular for urban properties.",
        category: "Modern, Metalwork",
        date: "March 10, 2019"
    },
    {
        title: "Gate Design 1",
        pathn:"gate-design-1",
        img: "https://i.pinimg.com/736x/0c/81/38/0c8138c129d6129e83616f815d519ba1.jpg",
        description: "A beautiful blend of traditional and contemporary elements, this gate design features intricate wrought-iron detailing with swirling patterns and floral motifs. The sophisticated design creates a sense of grandeur and elegance, making it perfect for homes with a vintage or classic style. Its tall structure provides privacy and security, while the detailed craftsmanship adds a decorative element that enhances the overall curb appeal of the property. This design is ideal for homeowners looking for a timeless piece that exudes luxury.",
        category: "Traditional, Wrought Iron",
        date: "December 5, 2021"
    },
    {
        title: "Gate Design 2",
        pathn:"gate-design-2",
        img: "https://th.bing.com/th/id/OIP.Ga389QTpuAvP16vxIC0dWwHaNK?w=500&h=889&rs=1&pid=ImgDetMain",
        description: "This design features a bold, contemporary aesthetic with sleek lines and sharp angles. The heavy-duty metal construction ensures security, while the minimalistic design focuses on function over decoration. Its modern, no-nonsense appeal is perfect for those who want a gate that offers maximum protection without compromising on style. Ideal for contemporary homes or properties with industrial elements, this gate balances strength with clean, straightforward design.",
        category: "Industrial, Minimalist",
        date: "January 20, 2023"
    },
    {
        title: "Gate Design 3",
        pathn:"gate-design-3",
        img: "https://i.pinimg.com/736x/5c/72/49/5c7249d965a287e9c65ab5c958c4ef82.jpg",
        description: "A striking design, this gate features smooth vertical bars paired with intricate geometric patterns, offering both aesthetic appeal and security. The open spaces between the bars create a sense of openness, while still providing a strong deterrent for intruders. The combination of modern and traditional elements ensures that this gate fits well with a wide range of architectural styles, making it a versatile choice for homeowners seeking both beauty and protection for their property.",
        category: "Geometric, Contemporary",
        date: "July 15, 2020"
    },
    {
        title: "Gate Design 4",
        pathn:"gate-design-4",
        img: "https://th.bing.com/th/id/OIP.NTrsm5G6Ex8Zfh_N9mNaGgHaJ4?w=768&h=1024&rs=1&pid=ImgDetMain",
        description: "This design features a sophisticated and regal look, with intricate latticework patterns paired with elegant scrollwork on the upper half. The heavy use of ornamental features gives this gate a classic, vintage appeal, reminiscent of gates seen in historic estates or palaces. The vertical posts provide stability and height, ensuring both security and visual grandeur. A perfect option for larger homes or properties with formal landscaping, this gate creates an immediate impression of luxury and elegance.",
        category: "Classical, Ornamental",
        date: "February 25, 2018"
    },
    {
        title: "Gate Design 5",
        pathn:"gate-design-5",
        img: "https://makerbhawan.com/wp-content/uploads/2023/02/unique-door.jpg",
        description: "This gate design stands out with its unique use of vertical and horizontal metal panels that offer a sleek, modern aesthetic. The design is simple but striking, with clean lines and a minimalistic approach. The gate is highly durable and offers excellent privacy and security for contemporary homes. The metallic finish gives it an industrial feel while maintaining a refined elegance. Ideal for modern homes or properties in urban settings, this gate combines security and style effortlessly.",
        category: "Modern, Minimalist",
        date: "November 17, 2022"
    },
    {
        title: "Gate Design 6",
        pathn:"gate-design-6",
        img: "https://i.pinimg.com/736x/3c/31/e6/3c31e663188ddb55e5f653b8e5889f24.jpg",
        description: "A beautifully intricate design, this gate features detailed metalwork with floral patterns intertwined throughout. The craftsmanship is highlighted by the use of curving lines and ornamental features that create a sense of elegance and artistry. The mix of functional design with aesthetic beauty makes this gate a great choice for homes looking to add sophistication and charm. This type of gate is best suited for properties with traditional or artistic styles, where beauty and protection are equally important.",
        category: "Ornamental, Artistic",
        date: "August 22, 2019"
    },
    {
        title: "Gate Design 7",
        pathn:"gate-design-7",
        img: "https://th.bing.com/th/id/OIP.-c36zZOOj4n8gRYc8P-DTQHaJ4?w=1152&h=1536&rs=1&pid=ImgDetMain",
        description: "A bold and striking gate design, this features a large, symmetrical structure with cross-bars and a strong, rectangular frame. The simple yet powerful design offers a feeling of security and strength while maintaining a sense of balance. The solid design with sharp lines and angles provides durability and maximum protection, making it perfect for properties that require a high level of security. This gate works well for more utilitarian or rural properties, offering both practical protection and a no-frills aesthetic.",
        category: "Industrial, Security",
        date: "April 10, 2021"
    },
    {
        title: "Gate Design 8",
        pathn:"gate-design-8",
        img: "https://th.bing.com/th/id/R.21e9e50912e782e086e6910f39c11c55?rik=uAkAiouvuUv%2fSg&pid=ImgRaw&r=0",
        description: "This beautiful gate design combines the elegance of scrolling ironwork with modern lines. The ornate design is complemented by a high level of craftsmanship, creating a sense of luxury and refinement. The gate is ideal for homeowners looking to make a statement with an eye-catching feature at their entrance. Perfect for grand homes or properties with a touch of classical charm, this gate offers both beauty and security, standing out as a true piece of artistry in your landscape.",
        category: "Classic, Ornate Ironwork",
        date: "October 8, 2017"
    },
    {
        title: "Gate Design 9",
        pathn:"gate-design-9",
        img: "https://i.pinimg.com/736x/08/4f/d2/084fd266f4f0439483b1c2c13d25ff3c.jpg",
        description: "A sleek, minimalist gate design, this features clean lines and a modern aesthetic that blends seamlessly into contemporary architectural styles. The design is simple yet visually appealing, with an emphasis on strength and durability. Ideal for properties that require an unobtrusive, modern entrance, this gate is both functional and stylish, offering maximum privacy and protection. It works well for urban and suburban homes looking to embrace simplicity without sacrificing security or quality.",
        category: "Minimalist, Contemporary",
        date: "May 12, 2020"
    },
    {
        title: "Gate Design 10",
        pathn:"gate-design-10",
        img: "https://makerbhawan.com/wp-content/uploads/2023/05/designer-metal-cutting-front-gate.jpg",
        description: "A contemporary take on traditional wrought iron gates, this design features artistic metal cutting with intricate patterns. The sophisticated and modern design adds an element of luxury to any property. The perforated patterns allow for light and air flow, while maintaining privacy and security. This gate is perfect for homeowners who desire a gate that is both functional and visually stunning. Ideal for properties that need a distinctive and upscale entrance, this design offers both beauty and durability.",
        category: "Artistic, Designer",
        date: "June 18, 2022"
    },
    {
        title: "Gate Design 11",
        pathn:"gate-design-11",
        img: "https://i.pinimg.com/736x/f4/23/9d/f4239d6c3ec43febd62f313af1f81341.jpg",
        description: "Inspired by Arabian architecture, this gate design features intricate geometric patterns and ornate details that evoke a sense of grandeur and sophistication. The intricate metalwork offers both beauty and security, with a design that draws from historical traditions. Perfect for properties that embrace cultural influences or traditional designs, this gate is an excellent choice for those looking to add a unique, timeless feature to their home’s exterior. It combines artistic flair with functional durability.",
        category: "Cultural, Ornamental",
        date: "July 30, 2023"
    },
    {
        title: "Gate Design 12",
        pathn:"gate-design-12",
        img: "https://th.bing.com/th/id/R.f58e908887c81b385ecdbaa0b790f9e1?rik=NhVaLpJA53v%2bdg&riu=http%3a%2f%2ffreevector.us%2fwp-content%2fuploads%2f2020%2f05%2f27-1.jpg&ehk=issiy%2frujge6hiX%2fxMIw4ZRmX%2bX6LZBK6lUo2wX3UEQ%3d&risl=&pid=ImgRaw&r=0",
        description: "This gate design is a beautiful example of modern abstract art combined with functional security. Featuring bold geometric shapes and clean lines, it offers a unique aesthetic that complements contemporary architecture. The lack of ornamental detail makes it an ideal choice for homeowners who want a gate that serves as both a functional barrier and a modern art piece. Perfect for minimalist and modern homes, this gate adds a sleek, stylish touch to any property’s exterior.",
        category: "Abstract, Modern",
        date: "September 14, 2024"
    }
];


  const { gate14, setgate14 } = useContext(gatecontext);







  let stair = [
    {
      title: "Stair Railing Design 0",
      pathn: "stair-design-0",
      img: "https://th.bing.com/th/id/OIP.7cuzBEICI62aqm7vfbK92wHaG8?rs=1&pid=ImgDetMain",
      description:
        "This stair railing design features a combination of smooth curves and straight lines, with clean edges and a minimalistic approach. The thin, vertical bars create a sense of openness and airiness, making it suitable for modern and contemporary homes. The use of black metal gives the design a bold, timeless feel, while the simple geometric lines emphasize its sophistication. This design provides a secure barrier without overpowering the surrounding space, making it perfect for homes with an understated, modern aesthetic.",
      category: "Modern, Minimalist, Contemporary",
      date: "March 10, 2019",
    },
    {
      title: "Stair Railing Design 1",
      pathn: "stair-design-1",
      img: "https://cuttingmaster.com/wp-content/uploads/2022/03/stair-grill-720x750.jpg",
      description:
        "This stair railing design blends traditional and contemporary elements, with intricate wrought-iron detailing and swirling floral motifs. The ornate patterns create a sense of grandeur and elegance, making it ideal for classic or vintage-style homes. The design features a tall structure that provides both privacy and security, while the detailed metalwork adds an artistic touch that elevates the overall aesthetic of the staircase. Its graceful curves and intricate design make it a perfect choice for homeowners who want a timeless and luxurious look for their property.",
      category: "Traditional, Wrought Iron, Elegant",
      date: "December 5, 2021",
    },
    {
      title: "Stair Railing Design 2",
      pathn: "stair-design-2",
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/12/DZ/VY/ZQ/18231269/product-jpeg-1000x1000.jpg",
      description:
        "This modern stair railing design features a minimalist and industrial aesthetic, characterized by sleek, sharp lines and a simple yet sturdy metal construction. The design prioritizes functionality while maintaining a clean, uncluttered look. The minimalist approach is perfect for those looking to achieve a contemporary, industrial look in their home. The black metal bars provide durability and strength, offering security while complementing a modern design that works well in loft-style or urban homes. This design is ideal for those who appreciate simplicity without compromising on quality.",
      category: "Industrial, Minimalist, Modern",
      date: "January 20, 2023",
    },
    {
      title: "Stair Railing Design 3",
      pathn: "stair-design-3",
      img: "https://5.imimg.com/data5/TG/PO/KD/SELLER-30442451/staircase-railing-laser-cutting-service-1000x1000.jpeg",
      description:
        "This stair railing design incorporates smooth vertical bars paired with intricate geometric patterns, creating a harmonious balance between functionality and visual appeal. The open spaces between the bars allow light to pass through, creating a sense of openness and airiness. The geometric designs add an element of artistic flair, making it suitable for both contemporary and transitional homes. This design provides security while enhancing the overall aesthetic of the staircase, offering a modern and stylish touch to any space. It is an excellent choice for homeowners seeking a unique and elegant railing design.",
      category: "Geometric, Contemporary, Artistic",
      date: "July 15, 2020",
    }
  ];


  const { stair4, setstair4 } = useContext(stairrailingcontext);

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
  
  
  




const { wallclading8, setwallclading8} = useContext(WallCladding8context);


  useEffect(() => {
    setgate14(gate)
    setstair4(stair)
    setwallclading8(wallclading)
  }, [])
  


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/laser-cutting-service-1"
          element={<LaserCuttingService />}
        />
        <Route
          path="/laser-cutting-Mechanical-parts-3"
          element={<MechanicalPartsLaserCutting />}
        />

      
        <Route
          path="/Gate-Laser-Cut-Design-4"
          element={<GatelaserCutdesign />}
        />
        <Route
          path="/home"
          element={<Home />}
        />


        <Route
          path="/OurServicesClick"
          element={<OurServicesClick />}
        />

        {gate14.map((p, i) => {
          return (
            <Route key={i}
              path={`/Gate-Laser-Cut-Design-4/gate-design-${i}`}
              element={<Gatedesign />}
            />
          );
        })}


        <Route path="/StairRailingOurServices" element={<StairRailingOurServices />} />

        {stair4.map((p, i) => {
          return (
            <Route key={i}
              path={`/Stair-Laser-Cut-Design-4/stair-design-${i}`}
              element={<Stairdesign />}
            />
          );
        })}







        <Route path="/WallCladingOurServices" element={<WallCladdingOurServices />} />

        {wallclading8.map((p, i) => {
          return (
            <Route key={i}
              path={`/Wallclading-Laser-Cut-Design-8/Wallclading-design-${i}`}
              element={<Wallcladingdesign />}
            />
          );
        })}







        <Route path="/contact" element={<Contact />} />



        <Route path="/about-AMB-ENG-Company" element={<AboutUS />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
