import Layout from "../../cityComponents/_App/Layout";
import Navbar from "../../cityComponents/_App/Navbar";
import Footer from "../../components/Sections/Footer";
import MainBanner from "../../cityComponents/MainBanner";
import Features from "../../cityComponents/Features";
import DigitalExp from "../../cityComponents/DigitalExperience";
import Comparison from "../../cityComponents/Comparison";
import WriteUp from "../../cityComponents/WriteUp";
import VideoSection from "../../cityComponents/VideoSection";
import Industries from "../../cityComponents/Industries";
import Comparator from "../../cityComponents/Comparator";
import Subscribe from "../../components/Sections/SubscribeForm"
import { API_URL } from "../../config/api";

import Head from "next/head";

export default function City({ page, site }) {
  return (
    <Layout>
      <Head>
        <title>{page?.cityName}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={`Seolo is in ${page?.cityName}`} />
        <meta
          name="og:title"
          property="og:title"
          content={`Seolo is in ${page?.cityName}`}
        ></meta>
        <meta
          name="twitter:card"
          content={`Seolo is in ${page?.cityName}`}
        ></meta>
      </Head>
      <Navbar cityName={page?.cityName} />
      <MainBanner header={page?.header} />
      <Comparator
        data={{
          text1: page?.CompareSection?.text1,
          text2: page?.CompareSection?.text2,
          text3: page?.CompareSection?.text3,
          compares: page?.compares,
        }}
        mapStuff={page?.mapSection}
      />

      <Features data={page?.AltFeatureSection} />
      <DigitalExp data={page?.featuresSection}/>
      <WriteUp content={page?.writeUp} />
      {/* <VideoSection /> */}
      {/* <Industries /> */}
      <Subscribe data={{
        text1: "Let's Rank your Business",
        text2: "Stay up to date with the latest SEOLO updates!",
        text3: "Don't Delay. Sign Up Today!",
        actionText: "Request Access",
        gradientEnd:"white",
        gradientStart:"white"
      }}/>
      <Footer data={site} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let slug = ctx.params.slug;
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });
  if (!slug)
    return {
      notFound: true,
      props: {},
    };

  let respData = await fetch(`${API_URL}/cities?slug=${slug}`, {
    method: "GET",
  });

  // let postResp = await fetch(`${API_URL}/posts?featured=true`, {
  //   method: "GET",
  // });

  if (respData.status === 200 && resp.status === 200) {
    let pageArr = await respData.json();
    let site = await resp.json()
    if (pageArr && pageArr.length > 0) {
      let page = pageArr[0];
      return {
        props: {
          page,
          site
        },
      };
    } else
      return {
        notFound: true,
        props: {},
      };

    //console.log(page)
  } else {
    return {
      notFound: true,
      props: {},
    };
  }
}
