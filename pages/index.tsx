import Head from "next/head";
import MainBanner from "../components/Sections/MainBanner";
import Footer from "../components/Sections/Footer";
import Navbar from "../components/_App/Navbar";
import Subscribe from "../components/Sections/SubscribeForm";
import AboutUs from "../components/Sections/AboutUs";
import ServicesCard from "../components/Sections/ServicesCard";
import LatestBlogPost from "../components/Sections/LatestBlogPost";
import CTA from "../components/Sections/CTA";
import WhatWeDo from "../components/Sections/WhatWeDo";
import CapabilitySection from "../components/Sections/Capability";
import PastWork from "../components/Common/PastWork";
import { createGlobalStyle } from "styled-components";
import { API_URL } from "../config/api";
import CaseStudiesTwo from "../components/Sections/CaseStudiesTwo";
import Partner from "../components/Sections/Partner";
import Pricing from "../components/Sections/PricingSection";
import HowItWork from "../components/Sections/HowItWork";
import OurTeamStyleTwo from "../components/Sections/OurTeamStyleTwo";
import TestimonialStyleOne from "../components/Sections/TestimonialStyleOne";

export default function Home({ site, page, posts }) {
  let GlobalStyleComponent = null;
  GlobalStyleComponent = createGlobalStyle`
  :root {
    --fontFamily: 'Nunito', sans-serif;
    --mainColor: ${site.mainColor || "#fe4c1c"};
    --optionalColor: ${site.optionalColor};
    --whiteColor: #ffffff;
    --blackColor: ${site.blackColor || "#080e32"};
    --fontSize: ${site.fontSize || "16px"};
    --transition: .5s;
    --navLinkColor: #ffffff;
    scroll-behavior: initial;
  }
  
`;
  return (
    <>
      <Head>
        <title>{site?.title}</title>
        {page?.meta?.map((meta) => (
          <meta key={meta.key} property={meta.key} content={meta.value}/>
        ))}
      </Head>
      <GlobalStyleComponent />
      <Navbar />
      {page?.layout?.map((section) => {
        switch (section.__component) {
          case "page-sections.main-banner":
            return <MainBanner data={section} />;
          case "page-sections.about-us":
            return <AboutUs data={section} />;
          case "page-sections.blog-section":
            return <LatestBlogPost data={section} posts={posts} />;
          case "page-sections.capability-section":
            return <CapabilitySection data={section} />;
          case "page-sections.card-section":
            return <ServicesCard data={section} />;
          case "page-sections.case-section":
            return <CaseStudiesTwo data={section} />;
          case "page-sections.cta-section":
            return <CTA data={section} />;
          case "page-sections.footer":
            return <Footer data={section} />;
          case "page-sections.partner-section":
            return <Partner data={section} />;
          case "page-sections.price-section":
            return <Pricing data={section} />;
          case "page-sections.step-section":
            return <HowItWork data={section} />;
          case "page-sections.subscribe-section":
            return <Subscribe data={section} />;
          case "page-sections.team-section":
            return <OurTeamStyleTwo data={section} />;
          case "page-sections.testimonial-section":
            return <TestimonialStyleOne data={section} />;
          case "page-sections.accordion-section":
            return <WhatWeDo data={section}/>
        }
      })}
    </>
  );
}

export async function getServerSideProps() {
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });

  let respData = await fetch(`${API_URL}/home-page`, {
    method: "GET",
  });

  let postResp = await fetch(`${API_URL}/posts?featured=true`, {
    method: "GET"
  })

  if (resp.status === 200 && respData.status === 200) {
    let site = await resp.json();
    let page = await respData.json();
    let posts = []
    if(postResp.status === 200) posts = await postResp.json()

    return {
      props: {
        site,
        page,
        posts
      },
    };
  } else {
    return {
      notFound:true,
      props: {},
    };
  }
}
