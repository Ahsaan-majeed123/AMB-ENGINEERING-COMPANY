import React from "react";
import { Helmet } from "react-helmet";

const HelmetLayout = ({
  children, // This is the 'children' prop.
  title = "Amb Engineering Company",
  description = "In this company you can cut piece from Laser Cutting Machine",
  keywords = "laser cutting,amb engineering,fiber laser cut,gate design laser cut",
  author = "Farhan Majeed",
  ogImage = "https://images.pexels.com/photos/29988963/pexels-photo-29988963/free-photo-of-industrial-laser-cutter-in-factory-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Add a default og:image
  ogUrl = "https://www.ambengineers.com", // Add a default og:url
  // ogUrl = "https://amb-engineering-company.vercel.app", // Add a default og:url
  canonicalUrl = "" // Add canonical URL prop
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

       

       {/* Canonical Tag */}
       {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div>{children}</div>
    </>
  );
};

export default HelmetLayout;
