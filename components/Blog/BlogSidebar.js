import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit"><i className="bx bx-search-alt"></i></button>
                </form>
            </div>

            <div className="widget widget_dibiz_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <div className="item">
                    <Link href="/single-blog-1">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 10, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/single-blog-1">
                                <a>The Data Surrounding Higher Education</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="/single-blog-1">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 21, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/single-blog-1">
                                <a>Conversion Rate the Sales Funnel Optimization</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="/single-blog-1">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 30, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/single-blog-1">
                                <a>Business Data is changing the world’s Energy</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>

            {/* <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li><a href="#">Design <span className="post-count">(03)</span></a></li>
                    <li><a href="#">Lifestyle <span className="post-count">(05)</span></a></li>
                    <li><a href="#">Script <span className="post-count">(10)</span></a></li>
                    <li><a href="#">Device <span className="post-count">(08)</span></a></li>
                    <li><a href="#">Tips <span className="post-count">(01)</span></a></li>
                </ul>
            </div> */}

            {/* <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <a href="#">Business <span className="tag-link-count">(3)</span></a>
                    <a href="#">Design <span className="tag-link-count">(3)</span></a>
                    <a href="#">Aike <span className="tag-link-count">(2)</span></a>
                    <a href="#">Fashion <span className="tag-link-count">(2)</span></a>
                    <a href="#">Travel <span className="tag-link-count">(1)</span></a>
                    <a href="#">Smart <span className="tag-link-count">(1)</span></a>
                    <a href="#">Marketing <span className="tag-link-count">(1)</span></a>
                    <a href="#">Tips <span className="tag-link-count">(2)</span></a>
                </div>
            </div> */}

            {/* <div className="widget widget_instagram">
                <ul>
                    <li>
                        <div className="box">
                            <img src="/images/team/team-img1.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img2.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img3.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img4.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img5.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img6.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img7.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img8.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/images/team/team-img9.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <a href="#" target="_blank" className="link-btn"></a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default BlogSidebar;