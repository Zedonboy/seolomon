import React from "react";
import PageBanner from "../../components/Sections/PageBanner";
import Link from "next/link";
import Layout from "../../components/_App/Layout";
import {API_URL} from "../../config/api"

const BlogPage = ({ site, page, posts, pageCount }) => {
  return (
    <Layout siteData={site}>
      <PageBanner data={{pageName : "Blog"}} />

      <div className="blog-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="row">
            {posts?.map((v) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="image">
                    <Link href={`/post/${v?.slug}` || ""}>
                      <a className="d-block">
                        <img src={v?.cover?.url} alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h3>
                      <Link href={`/post/${v?.slug}` || ""}>
                        <a>{v?.title}</a>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center">
                      <img src={v?.author?.profile?.url} alt="image" />
                      <div className="info">
                        <h5>{v?.author?.name}</h5>
                        <span>
                          {(function () {
                            let date = new Date(v?.created_at);
                            let dateList = date.toDateString().split(" ");
                            dateList.pop();
                            return dateList.join(" ");
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </a>
                {(function () {
                  let arr = [];
                  for (let index = 1; index <= pageCount; index++) {
                    arr.push(
                      <a href={`/blog/${index}`} className="page-numbers">
                        {index}
                      </a>
                    );
                  }

                  return arr
                })()}
                {/* <span className="page-numbers current" aria-current="page">
                  1
                </span>

                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a> */}
                <a href="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
export async function getServerSideProps() {
  let resp = await fetch(`${API_URL}/site`, {
    method: "GET",
  });

  let respData = await fetch(`${API_URL}/blog-page`, {
    method: "GET",
  });

  if (resp.status === 200 && respData.status === 200) {
    let site = await resp.json();
    let page = await respData.json();
    let postResp = await fetch(
      `${API_URL}/posts?_limit=${page?.cardsCount || 9}`,
      {
        method: "GET",
      }
    );
    let postCountResp = await fetch(`${API_URL}/posts/count`, {
      method: "GET",
    });
    let cardNumber = page?.cardsCount || 9;
    let dbPostCount = await postCountResp.json();
    dbPostCount = parseInt(dbPostCount);
    let pageCount = 0;

    let x = dbPostCount / cardNumber;
    pageCount = parseInt(x);
    if (x > pageCount) {
      pageCount += 1;
    }

    let posts = [];
    if (postResp.status === 200) posts = await postResp.json();

    return {
      props: {
        site,
        page,
        posts,
        pageCount
      },
    };
  } else {
    return {
      notFound: true,
      props: {},
    };
  }
}
