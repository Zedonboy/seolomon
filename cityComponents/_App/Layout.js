import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Renex - React Next SEO Marketing Agency Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Renex - React Next SEO Marketing Agency Template"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Renex - React Next SEO Marketing Agency Template"
        ></meta>
        <meta
          name="twitter:card"
          content="Renex - React Next SEO Marketing Agency Template"
        ></meta>
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
