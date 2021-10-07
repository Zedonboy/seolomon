import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" className="pinterest" target="_blank">
                                            <i className='bx bxl-pinterest-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-instagram-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Important Links</h3>
        
                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-2">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-2">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-2">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-2">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-1">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Featured Services</h3>
        
                                <ul className="quick-links">
                                    <li>
                                        <Link href="/services-details">
                                            <a>IT Management</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Support Engineer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>Website Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-details">
                                            <a>App Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Information</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Phone</span>
                                        <a href="tel:882569756">882-569-756</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>Email</span>
                                        <a href="mailto:hello@renex.com">hello@renex.com</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>Address</span>
                                        <a href="https://www.google.com/maps/@51.5287718,-0.2416804,11z" target="_blank">50 Nortambiya, UK.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy; {currentYear} Seolo.ai
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;