import Head from "next/head";
import AF from "../../cityComponent/AlternatingFeature";
import BlogSection from "../../cityComponent/BlogSection";
import CardSection from "../../cityComponent/CardSection";
import Comparison from "../../cityComponent/Comparison";
import Faq from "../../cityComponent/Faq";
import Features from "../../cityComponent/Feature";
import Footer from "../../cityComponent/Footer";
import Hero from "../../cityComponent/Hero";
import MakeUsDiff from "../../cityComponent/MakeUsDiff";
import Newsletter from "../../cityComponent/Newsletter";
import Pricing from "../../cityComponent/Pricing";
import Testimonial from "../../cityComponent/Testimonial";
import WriteUp from "../../cityComponent/WriteUp";
import { API_URL } from "../../config/api";


export default function CityPage({ page, cityPosts }) {
  return (
    <>
    <Head>
      <title>{page?.title}</title>
      {page?.meta?.map(m => (
        <meta property={m?.property} content={m?.content}/>
      ))}
    </Head>
      <Hero data={page?.header} />
      <Features />
      <AF />
      <MakeUsDiff data={page?.make_us_different}/>
      <CardSection data={page?.AltFeatureSection} />
      <Newsletter />
      <Comparison data={{
        text1: page?.CompareSection?.text1,
        text2: page?.CompareSection?.text2,
        text3: page?.CompareSection?.text3,
        compares: page?.compares
      }} />

      <WriteUp data={page?.WriteSection}/>
      <BlogSection post={cityPosts} />
      <Pricing/>
      <Testimonial data={page?.reviews}/>
      <Faq data={page?.faq}/>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  let slug = ctx.params.slug;
  // let resp = await fetch(`${API_URL}/site`, {
  //   method: "GET",
  // });
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

  if (respData.status === 200) {
    let pageArr = await respData.json();
    if (pageArr && pageArr.length > 0) {
      let page = pageArr[0];
      let cityPosts = []
      let cityPostResp = await fetch(`${API_URL}/posts?city.id=${page.id}`, {
        method: "GET",
      });

      if(cityPostResp.ok) {
        cityPosts = await cityPostResp.json()
      }
      // console.log(page);
      return {
        props: {
          page,
          cityPosts
        },
      };
    } else
      return {
        notFound: true,
        props: {},
      };
  } else {
    return {
      notFound: true,
      props: {},
    };
  }
}
