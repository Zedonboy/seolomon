import React from 'react';
import Link from 'next/link';

const CapabilitySection = () => {
    return (
        <div className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">What are we capable of doing?</span>
                                <h2>Our API scales to your bussiness needs</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>376</h3>
                                            <p>Written Contents</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>56</h3>
                                            <p>Written Topics</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>0.01%</h3>
                                            <p>Content Error</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link href="/about-us-1">
                                    <a className="default-btn">More About Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-6 col-md-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CapabilitySection;