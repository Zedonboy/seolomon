import React from 'react';

const MainBanner = () => {
    return (
        <div className="banner-wrapper-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-content">
                            <div className="content">
                                <span className="sub-title">Growth Your Business</span>
                                <h1>Hungry for content that Ranks?</h1>
                                <p>
                                SEOLO is an <span className="font-bold text-[#FE4C1C]">Artificial Intelligence</span> platform that generates <span className="font-bold text-[#FE4C1C]">Search Engine Optimized</span> contents with the same expertise that a human SEO-consultant has. This will <span className="font-bold text-[#FE4C1C]">Drive Traffic</span> to your website and convert that traffic into leads or sales.
                                </p>
                                
                                <form>
                                    <div className="row">
                                        <div className="col-lg-9 col-md-8">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Website URL" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 offset-lg-0 offset-md-4">
                                            <button type="submit" className="default-btn">Start Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-image">
                            {/* <img src="/images/banner-img.png" alt="banner image" /> */}
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="/images/shape/shape1.png" alt="image" /></div>
            {/* <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div> */}
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape/shape4.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
            <div className="shape14"><img src="/images/shape/shape14.png" alt="image" /></div>
        </div>
    )
}

export default MainBanner;