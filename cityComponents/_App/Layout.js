import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
       
        <link rel="canonical" href="https://renex-react.envytheme.com/"></link>
        <link rel="stylesheet" href="/fontawesome/css/regular.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/brands.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/solid.min.css" />
        <link rel="stylesheet" href="/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/city/css/style.css" />
        <link rel="stylesheet" href="/city/css/responsive.css" />
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
