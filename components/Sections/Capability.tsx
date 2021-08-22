import React from 'react';
import Link from 'next/link';

interface ICapability {
    icon : string
    number: string
    text1 : string
}
interface ICapabilitySection {
    text1:string
    text2:string
    text3:string
    btnText:string
    btnLink: string
    children : ICapability[]
}
const CapabilitySection = (props : {
    data : ICapabilitySection
}) => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/images/about-img2.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">{props.data.text1}</span>
                                <h2>{props.data.text2}</h2>
                                <p>{props.data.text3}</p>
                                
                                <ul className="funfacts-list">
                                    {props.data.children.map(v => (
                                         <li>
                                         <div className="list">
                                             <i className={v.icon}></i>
                                             <h3>{v.number}</h3>
                                             <p>{v.text1}</p>
                                         </div>
                                     </li>
                                    ))}
                                </ul>

                                <Link href={props.data.btnLink}>
                                    <a className="default-btn">{props.data.btnText}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape15">
                <img src="/images/shape/shape15.png" alt="image" />
            </div>
        </div>
    )
}

export default CapabilitySection;