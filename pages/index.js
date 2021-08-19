import Head from "next/head";
import MainBanner from "../components/Sections/MainBanner";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Subscribe from "../components/Common/SubscribeForm";
import AboutUs from "../components/Sections/AboutUs";
import ServicesCard from "../components/Common/ServicesCard";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import CTA from "../components/Common/CTA";
import WhatWeDo from "../components/Common/WhatWeDo";
import CapabilitySection from "../components/Common/Capability";
import PastWork from "../components/Common/PastWork";
import { createGlobalStyle } from "styled-components";
import { API_URL } from "../config/api";

export default function Home({ site }) {
  let GlobalStyleComponent = null;
  if (site) {
    GlobalStyleComponent = createGlobalStyle`
  html {
    --fontFamily: 'Nunito', sans-serif;
    --mainColor: ${site.mainColor || "#fe4c1c"}
    --optionalColor: #4b5280;
    --whiteColor: #ffffff;
    --blackColor: ${site.blackColor || "#080e32"};
    --fontSize: 16px;
    --transition: .5s;
    --navLinkColor: #ffffff;
    scroll-behavior: initial;
  }
`;
  }else {
    GlobalStyleComponent = createGlobalStyle`
    html {
      --fontFamily: 'Nunito', sans-serif;
      --mainColor: #fe4c1c;
      --optionalColor: #4b5280;
      --whiteColor: #ffffff;
      --blackColor: #080e32;
      --fontSize: 16px;
      --transition: .5s;
      --navLinkColor: #ffffff;
      scroll-behavior: initial;
    }
    `
  }
  return (
    <>
    <GlobalStyleComponent/>
      <Navbar />
      <MainBanner />
      <ServicesCard />
      <AboutUs />
      <CTA />
      <WhatWeDo />
      <CapabilitySection />
      <PastWork />
      <LatestBlogPost />
      <Subscribe />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });

  if (resp.status == 200) {
    let site = await resp.json();
    return {
      props: {
        site,
      },
    };
  } else {
    return {
      props : {}
    }
  }
}
