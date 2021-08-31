import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Navbar from "../_App/Navbar";
import Footer from "../Sections/Footer.tsx";
const Layout = ({ children, siteData }) => {
  return (
    <>
      <Head>
        <title>{siteData?.title || "Seolo"}</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="/fontawesome/css/regular.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/brands.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/solid.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/fontawesome.min.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://seolo.ca/"></link>
      </Head>
      <Navbar data={siteData}/>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Footer data={siteData}/>
    </>
  );
};

export default Layout;
