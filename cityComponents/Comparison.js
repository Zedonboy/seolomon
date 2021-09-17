import React from 'react';
import Link from 'next/link';

const PriceTable = () => {
    return (
        <div className="pricing-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Pricing Plans</span>
                    <h2>The Best Solutions for Our Clients</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-box top-1">
                            <div className="pricing-header">
                                <h3>Basic Plan</h3>
                            </div>

                            <div className="price">
                                $24
                            </div>

                            <ul className="pricing-features">
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Audits 
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Management
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Copywriting
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Link Building
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Site Migration
                                </li>
                                <li>
                                    <i className='bx bx-x'></i>
                                    Video Camplaigns
                                </li>
                                <li>
                                    <i className='bx bx-x'></i>
                                    Unlimited SEO Keywords
                                </li>
                            </ul>

                            <div className="pricing-btn">
                                <Link href="/contact-1">
                                    <a className="default-btn">
                                        Get Started
                                    </a>
                                </Link>
                            </div>

                            <div className="pricing-shape">
                                <img src="/images/pricing-shape.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <h3>Standard Plan</h3>
                            </div>

                            <div className="price">
                                $59
                            </div>

                            <ul className="pricing-features">
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Audits
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Management
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Copywriting
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Link Building
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Site Migration
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Video Camplaigns
                                </li>
                                <li>
                                    <i className='bx bx-x'></i>
                                    Unlimited SEO Keywords
                                </li>
                            </ul>

                            <div className="pricing-btn">
                                <Link href="/contact-1">
                                    <a className="default-btn">
                                        Get Started
                                    </a>
                                </Link>
                            </div>

                            <div className="pricing-shape">
                                <img src="/images/pricing-shape.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-box top-2">
                            <div className="pricing-header">
                                <h3>Premium Plan</h3>
                            </div>

                            <div className="price">
                                $89
                            </div>

                            <ul className="pricing-features">
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Audits
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Management
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    SEO Copywriting
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Link Building
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Site Migration
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Video Camplaigns
                                </li>
                                <li>
                                    <i className='bx bx-check'></i>
                                    Unlimited SEO Keywords
                                </li>
                            </ul>
                            
                            <div className="pricing-btn">
                                <Link href="/contact-1">
                                    <a className="default-btn">
                                        Get Started
                                    </a>
                                </Link>
                            </div>

                            <div className="pricing-shape">
                                <img src="/images/pricing-shape.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceTable;