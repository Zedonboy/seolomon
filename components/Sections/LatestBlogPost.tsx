import React from "react";
import Link from "next/link";

interface Author {
  name: string
  profile: any
}
interface Posts {
  content: string;
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  cover: any;
  author: Author
  created_at:string
}
interface BlocSection {
  text1: string;
  text2: string;
  text3: string;
  bgColor:string
}
const LatestBlogPost = (props: { data: BlocSection; posts: Posts[] }) => {
  return (
    <div style={{
      backgroundColor: props?.data?.bgColor || "white"
    }} className="blog-area bg-f9f9f9 pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <p>{props?.data?.text3}</p>
        </div>

        <div className="row">
          {props?.posts?.map((v) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href={`/post/${v?.slug || ""}`}>
                    <a className="d-block">
                      <img src={v?.cover?.url} alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href={`/post/${v?.slug || ""}`}>
                      <a>{v?.title}</a>
                    </Link>
                  </h3>
                  <div className="d-flex align-items-center">
                    <img src={v?.author?.profile?.url} alt="image" />
                    <div className="info">
                      <h5>{v?.author?.name}</h5>
                      <span>{function(){
                        let date = new Date(v?.created_at)
                        let dateList = date.toDateString().split(" ")
                        dateList.pop()
                        return dateList.join(" ")
                      }()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPost;
