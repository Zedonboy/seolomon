import React from "react";
import PageBanner from "../../components/Sections/PageBanner";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import Layout from "../../components/_App/Layout";
import { API_URL } from "../../config/api";
import Footer from "../../cityComponent/Footer";
import Navbar from "../../cityComponent/Navbar";
import WriteUp from "../../cityComponent/WriteUp";

const BlogDetails = ({ site, post }) => {
  return (
    <>
    <Navbar/>
    <WriteUp data={{
        text1: post?.title,
        text2: post?.author?.name,
        text3: null,
        content: post?.content
    }}/>
    <Footer/>
    </>
  );
};

export async function getServerSideProps(ctx) {
  let slug = ctx.params.slug;
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });

  let postData = await fetch(`${API_URL}/posts?slug=${slug}`, {
    method: "GET",
  });

  if (resp.status === 200 && postData.status === 200) {
    let site = await resp.json();
    let [post] = await postData.json();
    if (!post)
      return {
        notFound: true,
      };
    return {
      props: {
        site,
        post,
      },
    };
  } else
    return {
      notFound: true,
    };
}
export default BlogDetails;
