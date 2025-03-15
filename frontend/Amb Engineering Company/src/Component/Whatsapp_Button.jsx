import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const Whatsapp_Button = ({message}) => {
  return (
   <>
    {/* WhatsApp Button */}
         <a
           href={`https://wa.me/923044681357?text=Assalam-u-Alaikum ${message}?`}
           target="_blank"
           rel="noopener noreferrer"
           aria-label="WhatsApp Now"
         >
           <div
             className="fixed z-22 bottom-13 right-10 cursor-pointer bg-white p-2 text-5xl text-green-500 border rounded-full w-max border-green-500 border-6 hover:text-green-600 hover:bg-gray-200 transition-colors duration-300"
             title="WhatsApp Me"
           >
             <IoLogoWhatsapp />
           </div>
         </a>
   </>
  )
}

export default Whatsapp_Button