import React from 'react';
import Link from 'next/link';

interface Case {
text1:string
text2:string
link:string
}
interface CaseStudies {
    text1 : string
    text2 : string
    text3 : string
    children : Case[]

}
const CaseStudiesTwo = (props : {data : CaseStudies}) => {
    return (
        <div className="portfolio-area section-title-center pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{props.data.text1}</span>
                    <h2>{props.data.text2}</h2>
                    <p>{props.data.text3}</p>
                </div>

                <div className="row">
                    {props.data.children.map(v => (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <Link href="/single-portfolio">
                                <a className="image d-block">
                                    <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />
                                </a>
                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link href={v.link}>
                                        <a>{v.text1}</a>
                                    </Link>
                                </h3>
                                <span>{v.text2}</span>

                                <Link href={v.link}>
                                    <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesTwo;