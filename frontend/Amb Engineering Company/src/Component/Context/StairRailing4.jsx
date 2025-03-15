import React, { useState } from "react"; // Import useState
import { createContext } from "react";

// Create context
const stairrailingcontext = createContext();

const Stair4context = ({ children }) => {
    
  const [stair4, setstair4] = useState([]);

  const [navbaropenCheckForBelowContainerMargin, setnavbaropenCheckForBelowContainerMargin] = useState(false)


  return (
    <stairrailingcontext.Provider value={{ stair4, setstair4, navbaropenCheckForBelowContainerMargin, setnavbaropenCheckForBelowContainerMargin }}>
      {children} {/* Render the children components */}
    </stairrailingcontext.Provider>
  );
};

export { Stair4context, stairrailingcontext };
