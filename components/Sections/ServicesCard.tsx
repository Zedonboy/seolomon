import React from 'react';
import Link from 'next/link';

interface ICard {
    icon:string
    link:string
    title:string
    secondaryText:string
}
interface ICardSection {
    text1:string
    text2:string
    text3:string
    bgColor:string
    children: ICard[]
}
const ServicesCard = (props : {data : ICardSection}) => {
    return (
        <div style={{
            backgroundColor:props?.data?.bgColor || "white"
        }} className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{props?.data?.text1}</span>
                    <h2>{props?.data?.text2}</h2>
                    <p>{props?.data?.text3}</p>
                </div>

                <div className="row">
                    {props?.data?.children?.map(v => (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className={v?.icon || "far fa-lightbulb"}></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href={v?.link || "link"}>
                                    <a>{v?.title}</a>
                                </Link>
                            </h3>
                            <p>{v?.secondaryText}</p>

                            {/* <Link href={v?.link || ""}>
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link> */}
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;