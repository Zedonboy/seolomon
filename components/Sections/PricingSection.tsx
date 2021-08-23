import React from 'react';
import Link from 'next/link';

interface Price {
    planName:string
    text1:string
    text2:string
    text3:string
    text4:string
    price:string
    duration:string
    actionBtnText:string
    actionLink:string
}

interface IPriceSection {
    text1:string
    text2:string
    text3:string
    children:Price[]
}

const Pricing = (props : {data : IPriceSection}) => {
    return (
        <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{props?.data?.text1}</span>
                    <h2>{props?.data?.text2}</h2>
                    <p>{props?.data?.text3}</p>
                </div>

                <div className="row">
                    {props?.data?.children?.map(v => (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                <div className="icon">
                                    <i className="flaticon-paper-plane"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                    </div>
                                </div>
                                <h3>{v?.planName}</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>{v?.text1}</li>
                                    <li>{v?.text2}</li>
                                    <li>{v?.text3}</li>
                                    <li>{v?.text4}</li>
                                    
                                </ul>
                            </div>

                            <div className="price">
                                ${v?.price}
                                <span>Per {v?.duration}</span>
                            </div>

                            <Link href={v?.actionLink}>
                                <a className="default-btn">{v?.actionBtnText}</a>
                            </Link>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing;