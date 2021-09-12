import React, { useEffect } from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Navbar from "../_App/NavbarStyleFour";

import Footer from "../Sections/Footer.tsx";
const Layout = ({ children, siteData }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-NZVMQ77QHP');
  }, [])
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
        <link rel="canonical" href="https://seolo.ai/"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZVMQ77QHP"></script>
      </Head>
      <Navbar data={siteData}/>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Footer data={siteData}/>
    </>
  );
};

export default Layout;
