import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What Topic can Seolomon Write on</span>
                    <h2>What can Seolomon do?</h2>
                    <p>Seolomon can write contents for any industry</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/single-services">
                                    <a>Law Firm in Boston</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <Link href="/single-services">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-keywords"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/single-services">
                                    <a>Tutoring Agency</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/single-services">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-content-management"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/single-services">
                                    <a>Plumbing in San Francisco</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/single-services">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;