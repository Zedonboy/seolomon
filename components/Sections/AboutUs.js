import React from 'react';

const AboutSection = () => {
    return (
        <div className="about-area pb-100">
            <div className="container py-12">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/images/how_is_that_possible.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>How is this even possible</h2>
                                <p>Seolomon has been trained on billions of industry specific web content. He now knows what your thinking and what your audience wants to know</p>
                                
                                <ul className="features-list">
                                    <li className="flex items-center"><i className="flaticon-speed"></i><p> Trained by smartest mind in the A.I industry</p></li>
                                    <li className="flex items-center"><i className="flaticon-speed"></i> <p>Trained to be jack of trade, master of all</p></li>
                                    <li className="flex items-center"><i className="flaticon-speed"></i> <p>Trained with 3 billion parameters</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;