import React from "react";
import { Helmet } from "react-helmet";

const HelmetLayout = ({
  children, // This is the 'children' prop.
  title = "Amb Engineering Company",
  description = "In this company you can cut piece from Laser Cutting Machine",
  keywords = "laser cutting,amb engineering,fiber laser cut,gate design laser cut",
  author = "Farhan Majeed",
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div>
        {
            children
        }
      </div>
    </>
  );
};

export default HelmetLayout;
