import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { Gate14context } from "./Component/Context/gate14";
import { Stair4context } from "./Component/Context/StairRailing4";
import { Wallclading8context } from "./Component/Context/wallClading8";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}

    <Wallclading8context>



    <Stair4context>


    <Gate14context>
      <App />
    </Gate14context>

    </Stair4context>
    </Wallclading8context>

    {/* </StrictMode>, */}
  </BrowserRouter>
);
