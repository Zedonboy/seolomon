import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const BlogTwo = () => {
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="Blog" 
            />

            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container">
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
                                            <span>Jun 15, 2020</span>
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
                                            <span>Jun 16, 2020</span>
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
                                            <span>Jun 17, 2020</span>
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
                                            <img src="/images/blog/blog-img4.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Preparing E-Commerce for the Post-COVID Bounce Back</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src="/images/user3.jpg" alt="image" />
                                        <div className="info">
                                            <h5>David Smith</h5>
                                            <span>Jun 18, 2020</span>
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
                                            <img src="/images/blog/blog-img5.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>The State of Local SEO Industry Report 2020</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src="/images/user2.jpg" alt="image" />
                                        <div className="info">
                                            <h5>Sarah Taylor</h5>
                                            <span>Jun 19, 2020</span>
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
                                            <img src="/images/blog/blog-img6.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Should You Test That? When to Engage in SEO Split Tests</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src="/images/user3.jpg" alt="image" />
                                        <div className="info">
                                            <h5>Sarah Taylor</h5>
                                            <span>Jun 20, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	 
			<Footer />
		</>
    )
}

export default BlogTwo;