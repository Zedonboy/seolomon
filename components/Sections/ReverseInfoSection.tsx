import React from 'react';
import Link from 'next/link';
interface InfoSection {
    cover: any,
    title: string,
    preText: string,
    secondaryText:string,
    actionBtnLink:string,
    actionBtnText:string
}
const RInfoSection = (props : {data : InfoSection}) => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">{props?.data?.preText}</span>
                            <h2>{props?.data?.title}</h2>
                            <p>{props?.data?.secondaryText}</p>
                            
                            <Link href={props?.data?.actionBtnLink || ""}>
                                <a className="default-btn">{props?.data?.actionBtnText}</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img className="rounded-xl overflow-hidden" src={props?.data?.cover?.url} alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
        </div>
    )
}

export default RInfoSection;