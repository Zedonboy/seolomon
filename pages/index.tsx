//@ts-nocheck
import Head from "next/head";
import AF from "../cityComponent/AlternatingFeature";
import BlogSection from "../cityComponent/BlogSection";
import Features from "../cityComponent/Feature";
import Footer from "../cityComponent/Footer";
import Hero from "../cityComponent/Hero";
import LogoClouds from "../cityComponent/LogoCloud";
import MakeUsDiff from "../cityComponent/MakeUsDiff";
import Newsletter from "../cityComponent/Newsletter";
import { API_URL } from "../config/api";

export default function Index({cityPosts}) {
  return (
    <>
    <Head>
        <title>Seolo.ai</title>
    </Head>
    <Hero data={{
      headerText: "We boost your sales with",
      coloredText: "SEO!",
      subHead: "We bla bla bla"
    }}/>
    <Features/>
    <AF/>
    <MakeUsDiff/>
    <Newsletter/>
    <BlogSection post={cityPosts} />
    <LogoClouds/>
    <Footer/>
    </>
  )
}
export async function getServerSideProps() {
  let cityPostResp = await fetch(`${API_URL}/posts?featured=true`, {
    method: "GET",
  });

  let cityPosts = []
  if(cityPostResp.ok){
    cityPosts = await cityPostResp.json()
  }

  return {
    props : {
      cityPosts
    }
  }
}