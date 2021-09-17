import React from "react";
import PageBanner from "../../components/Sections/PageBanner";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import Layout from "../../components/_App/Layout";
import { API_URL } from "../../config/api";

const BlogDetails = ({ site, post }) => {
  return (
    <Layout siteData={site}>
      <PageBanner data={{ pageName: "Seolomon Blog" }} />

      <div className="blog-details-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={post?.cover?.url} alt="image" />
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                  className="article-content"
                >
                  {/* <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-folder-open'></i>
                                                <span>Category</span>
                                                <a href="#">Fashion</a>
                                            </li>
                                            <li>
                                                <i className='bx bx-group'></i>
                                                <span>View</span>
                                                813,454
                                            </li>
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                <span>Last Updated</span>
                                                Jun 21, 2020
                                            </li>
                                        </ul>
                                    </div> */}
                </div>

                {/* <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className='bx bx-purchase-tag'></i></span>
                                        <a href="#">Fashion</a>
                                        <a href="#">Games<var showdown  = require('showdown')/a>
                                        <a href="#">Travel</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                            <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        </ul>
                                    </div>
                                </div> */}

                <div className="article-author">
                  <div className="author-profile-header"></div>
                  <div className="author-profile">
                    <div className="author-profile-title">
                      <img
                        src={post?.author?.profile?.url}
                        className="shadow-sm"
                        alt="image"
                      />
                      <h4>{post?.author?.name}</h4>
                      {/* <span className="d-block">Photographer, Author, Writer</span>
                                            <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p> */}
                    </div>
                  </div>
                </div>

                {/* <div className="dibiz-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img src="/images/blog/blog-img2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>
            
                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Digital Marketing Strategies for Lead Generation</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 20, 2020</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">Agencies Can Successfully Recover From COVID?</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 19, 2020</span>
                                                    </span>
                                                </span>
            
                                                <span className="image-next">
                                                    <img src="/images/blog/blog-img3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

                {/* <BlogComments />  */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="blog-right-sidebar">{/* <BlogSidebar /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
