import React from 'react';
interface Feature{
    title:string
    desc:string
}
interface ServiceSection{
    title : string
    preText:string
    secondaryText:string
    children: Feature[]
    cover:any
}
const SingleServices = (props : {data : ServiceSection}) => {
    return (
            <div className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">{props?.data?.preText}</span>
                                <h2>{props?.data?.title}</h2>
                                <p>{props?.data?.secondaryText}</p>
                                {props?.data?.children?.map(v => (
                                    <div className="features-text">
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                </div>
                                ))}
                                
                                
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={props?.data?.cover?.url} alt="image" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
    )
}

export default SingleServices;