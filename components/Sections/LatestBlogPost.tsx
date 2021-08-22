import React from 'react';
import Link from 'next/link';

interface Posts {

}
interface BlocSection {
    text1:string
    text2:string
    text3:string
}
const LatestBlogPost = (props : {data: BlocSection, posts : any}) => {
    return (
        <div className="blog-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{props.data.text1}</span>
                    <h2>{props.data.text2}</h2>
                    <p>
                        {props.data.text3}
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>Digital Marketing Agency Blogs You Should Read</a>
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src="/images/user1.jpg" alt="image" />
                                    <div className="info">
                                        <h5>David Smith</h5>
                                        <span>Jun 21, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>Digital Marketing Strategies for Lead Generation</a>
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src="/images/user2.jpg" alt="image" />
                                    <div className="info">
                                        <h5>Sarah Taylor</h5>
                                        <span>Jun 20, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link href="/single-blog-1">
                                    <a className="d-block">
                                        <img src="/images/blog/blog-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/single-blog-1">
                                        <a>Agencies Can Successfully Recover From COVID?</a>
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src="/images/user3.jpg" alt="image" />
                                    <div className="info">
                                        <h5>Steven Gibson</h5>
                                        <span>Jun 19, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost;