import React from 'react';

interface IAboutSection {
    text1:string
    text2:string
    img:any
    feature1:string
    feature2:string
    feature3:string
}
const AboutSection = (props : {data : IAboutSection}) => {
    return (
        <div className="about-area pb-100">
            <div className="container py-12">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={props?.data?.img?.url} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>{props?.data?.text1}</h2>
                                <p>{props?.data?.text2}</p>
                                
                                <ul className="features-list">
                                    {/* {props?.data?.children?.map(v =)} */}
                                    <li className="flex items-center"><i className="flaticon-speed"></i><p>{props?.data?.feature1}</p></li>
                                    <li className="flex items-center"><i className="flaticon-speed"></i> <p>{props?.data?.feature2}</p></li>
                                    <li className="flex items-center"><i className="flaticon-speed"></i> <p>{props?.data?.feature3}</p></li>
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