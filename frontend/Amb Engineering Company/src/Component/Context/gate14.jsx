import React, { useState } from "react"; // Import useState
import { createContext } from "react";

// Create context
const gatecontext = createContext();

const Gate14context = ({ children }) => {
    
  const [gate14, setgate14] = useState([]);

  return (
    <gatecontext.Provider value={{ gate14, setgate14 }}>
      {children} {/* Render the children components */}
    </gatecontext.Provider>
  );
};

export { Gate14context, gatecontext };
