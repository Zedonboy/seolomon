import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner p-0">
            <div className="main-banner-item item-two pt-0">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content py-2">
                                        <h1>We Provide Digital Marketing Solutions</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="banner-btn">
                                            <Link href="/contact-1">
                                                <a className="default-btn">Get Started</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-banner-image">
                                        <img style={{
                                            display:"block"
                                        }} src="/city/images/banner/banner-image-2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner-shape">
                <div className="shape-4">
                    <img src="/city/images/banner/banner-shape-2.png" alt="image" />
                </div>
                <div className="shape-5">
                    <img src="/city/images/banner/banner-shape-2.png" alt="image" />
                </div>
                <div className="shape-6">
                    <img src="/city/images/banner/banner-shape-3.png" alt="image" />
                </div>
                <div className="shape-7">
                    <img src="/city/images/banner/banner-shape-4.png" alt="image" />
                </div>
                <div className="shape-8">
                    <img src="/city/images/banner/banner-shape-5.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;