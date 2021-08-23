import React from 'react';

interface Step {
    name: string
    detail:string
}
interface StepsSection {
    text1:string
    text2:string
    text3:string
    children:Step[]
}
const HowItWork = (props : {data : StepsSection}) => {
    return (
        <div className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">{props?.data?.text1}</span>
                            <h2>{props?.data?.text1}</h2>
                            <p>{props?.data?.text2}</p>
                            <div className="inner-box">
                                {props?.data?.children.map((v,idx) => (
                                     <div className="single-item">
                                     <div className="count-box">
                                         {function(){
                                             let step = idx + 1
                                             if(step > 9) return step
                                             else return `0${step}`
                                         }()}
                                     </div>
                                     <h3>{v?.name}</h3>
                                     <p>{v?.detail}</p>
                                 </div>
                                ))}                           
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src="/images/how-its-work.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork;