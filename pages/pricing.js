import Head from "next/head";
import MainBanner from "../components/Sections/MainBanner";
import PageBanner from "../components/Sections/PageBanner"
import Subscribe from "../components/Sections/SubscribeForm";
import AboutUs from "../components/Sections/AboutUs";
import ServicesCard from "../components/Sections/ServicesCard";
import LatestBlogPost from "../components/Sections/LatestBlogPost";
import CTA from "../components/Sections/CTA";
import WhatWeDo from "../components/Sections/WhatWeDo";
import CapabilitySection from "../components/Sections/Capability";

import { createGlobalStyle } from "styled-components";
import { API_URL } from "../config/api";
import CaseStudiesTwo from "../components/Sections/CaseStudiesTwo";
import Partner from "../components/Sections/Partner";
import Pricing from "../components/Sections/PricingSection";
import HowItWork from "../components/Sections/HowItWork";
import OurTeamStyleTwo from "../components/Sections/OurTeamStyleTwo";
import TestimonialStyleOne from "../components/Sections/TestimonialStyleOne";
import Layout from '../components/_App/Layout';
import InfoSection from "../components/Sections/InfoSection";
import RInfoSection from "../components/Sections/ReverseInfoSection";
import SingleServices from "../components/Sections/ServiceSection";
import ASingleServices from "../components/Sections/AdvancedServiceSection";
import RichContentSection from "../components/Sections/RichContent";
import VideoInfoSection from "../components/Sections/VideoInfoSection";
import VideoCaseStudiesTwo from "../components/Sections/VideoCardSection";
import History from "../components/Sections/History"
export default function PricingPage({ site, page, posts }) {
  let GlobalStyleComponent = null;
  GlobalStyleComponent = createGlobalStyle`
  :root {
    --fontFamily: 'Nunito', sans-serif;
    --mainColor: ${site?.mainColor || "#fe4c1c"};
    --optionalColor: ${site?.optionalColor};
    --whiteColor: #ffffff;
    --blackColor: ${site?.blackColor || "#080e32"};
    --fontSize: ${site?.fontSize || "16px"};
    --transition: .5s;
    --navLinkColor: #ffffff;
    scroll-behavior: initial;
  }
  
`;
  return (
    <Layout siteData={site}>
      <Head>
        <title></title>
        {page?.meta?.map((meta) => (
          <meta property={meta.property} content={meta.content}/>
        ))}
      </Head>
      <GlobalStyleComponent />
      
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
          case "page-sections.info-section":
            return <InfoSection data={section}/>
          case "page-sections.rinfo-section":
            return <RInfoSection data={section}/>
          case "page-sections.service-section":
            return <SingleServices data={section}/>
          case "page-sections.advanced-service-section":
            return <ASingleServices data={section}/>
          case "page-sections.page-banner":
            return <PageBanner data={section}/>
          case "page-sections.rich-content-section":
            return <RichContentSection data={section}/>
          case "page-sections.video-info-section":
            return <VideoInfoSection data={section}/>
          case "page-sections.video-card-section":
            return <VideoCaseStudiesTwo data={section}/>
          case "page-sections.advanced-step-section":
            return <History data={section}/>
        }
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });

  let respData = await fetch(`${API_URL}/pricing-page`, {
    method: "GET",
  });

  let postResp = await fetch(`${API_URL}/posts?featured=true`, {
    method: "GET",
  });

  if (resp.status === 200 && respData.status === 200) {
    let site = await resp.json();
    let page = await respData.json();
    let posts = [];
    if (postResp.status === 200) posts = await postResp.json();

    return {
      props: {
        site,
        page,
        posts,
      },
    };
  } else {
    return {
      notFound: true,
      props: {},
    };
  }
}
