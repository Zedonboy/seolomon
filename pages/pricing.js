import Layout from "../components/_App/Layout";
import Head from "next/head";

import MainBanner from "../components/Sections/MainBanner";

import Subscribe from "../components/Sections/SubscribeForm";
import AboutUs from "../components/Sections/AboutUs";
import ServicesCard from "../components/Sections/ServicesCard";
import LatestBlogPost from "../components/Sections/LatestBlogPost";
import CTA from "../components/Sections/CTA";
import WhatWeDo from "../components/Sections/WhatWeDo";
import CapabilitySection from "../components/Sections/Capability";
// import PastWork from "../components/Common/PastWork";
import { API_URL } from "../config/api";
import CaseStudiesTwo from "../components/Sections/CaseStudiesTwo";
import Partner from "../components/Sections/Partner";
import Pricing from "../components/Sections/PricingSection";
import HowItWork from "../components/Sections/HowItWork";
import OurTeamStyleTwo from "../components/Sections/OurTeamStyleTwo";
import TestimonialStyleOne from "../components/Sections/TestimonialStyleOne";
import PageBanner from "../components/Common/PageBanner";
export default function PricingPage({ site, page, posts }) {
  return (
    <Layout siteData={site}>
      <Head>
        <title>{page?.title}</title>
        {page?.meta?.map((meta) => (
          <meta property={meta.property} content={meta.content} />
        ))}
      </Head>
      <PageBanner pageTitle="Pricing" />
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
