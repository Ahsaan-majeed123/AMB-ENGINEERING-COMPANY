import React, { useState } from "react"; // Import useState
import { createContext } from "react";

// Create context
const WallCladding8context = createContext();

const Wallclading8context = ({ children }) => {
    
  const [wallclading8, setwallclading8] = useState([]);

  return (
    <WallCladding8context.Provider value={{ wallclading8, setwallclading8}}>
      {children} {/* Render the children components */}
    </WallCladding8context.Provider>
  );
};

export { Wallclading8context, WallCladding8context };
