import React from 'react';
import Link from 'next/link';

interface IBanner {
    text1 : string
    text2 : string
    text3 : string
    actionBtnText: string
    actionBtnLink : string
}
const MainBanner = (props : {data : IBanner}) => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="main-banner-content main-banner">
                    <span className="sub-title">{props?.data?.text1}</span>
                    <h1>{props?.data?.text2}</h1>
                    <p>{props?.data?.text3}</p>

                    <Link href={props?.data?.actionBtnLink || ""}>
                        <a className="default-btn">{props?.data?.actionBtnText}</a>
                    </Link>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape/shape4.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
        </div>
    )
}

export default MainBanner;