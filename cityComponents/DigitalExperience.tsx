import React from 'react';
import Link from 'next/link';

interface CardFeature {
    image:  any
    title: string
    desc: string
    actionLink:string
}
interface FeatureSection {
    text1: string
    text2: string
    children: CardFeature[]
}
const ServicesStyleOne = (props : {data:FeatureSection}) => {
    return (
        <div className="services-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>{props?.data?.text1}</span>
                    <h2>{props?.data?.text2}</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    {props?.data?.children?.map(v => (
                         <div className="col-lg-4 col-md-6">
                         <div className="single-services">
                             <div className="image">
                                 <Link href={v?.actionLink || ""}>
                                     <a>
                                         <img src={v?.image?.url} alt="image" />
                                     </a>
                                 </Link>
                             </div>
                             <h3>
                                 <Link href={v?.actionLink || ""}>
                                     <a>{v?.title}</a>
                                 </Link>
                             </h3>
                             <p>{v?.desc}</p>
 
                             <Link href={v?.actionLink || ""}>
                                 <a className="services-btn">
                                     Read More <i className='bx bx-chevrons-right'></i>
                                 </a>
                             </Link>
                         </div>
                     </div>
                    ))}
                </div>
            </div>

            <div className="default-shape">
                <div className="shape1">
                    <img src="/city/images/default-shape/default-shape1.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/city/images/default-shape/default-shape2.png" alt="image" />
                </div>
                <div className="shape3">
                    <img src="/city/images/default-shape/default-shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/city/images/default-shape/default-shape4.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default ServicesStyleOne;