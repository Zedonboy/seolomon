import React from 'react';
import Link from 'next/link';

// this FooterSection is now SiteData Type
interface FooterSection {
    logo:any
    footerText:string
    footerLogo:any
    address: string
    phone:string
    email:string
}
const Footer = (props : {data : FooterSection}) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img className="h-[4rem]" src={props?.data?.footerLogo?.url} alt="logo" />
                                </a>
                            </Link>
                            <p>{props?.data?.footerText}</p>
                            <ul className="social-link">
                                <li>
                                    <a href="https://www.facebook.com/" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us-1">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-1">
                                        <a>Portfolio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Resources</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/team-1">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-1">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    {props?.data?.address}
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href={`tel:${props?.data?.phone || "00"}`}>{props?.data?.phone}</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href={`mailto:${props?.data?.email || "human@example.com"}`}>{props?.data?.email}</a>
                                </li>
                                {/* <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+55 785 4578964</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                       

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;