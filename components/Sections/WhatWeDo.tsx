import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

interface IAcccordionItem {
    title:string
    content: string
}
interface IAccordionSection{
    text1 : string
    text2 : string
    text3: string
    children: IAcccordionItem[]
}
const WhatWeDo = (props : {data : IAccordionSection}) => {
    return (
        <div className="what-we-do-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content">
                            <span className="sub-title">{props.data.text1}</span>
                            <h2>{props.data.text2}</h2>
                            <p>{props.data.text3}</p>
                            
                            <div className="skills-item">
                                {/* <div className="skills-header">
                                    <h4 className="skills-title">Digital Marketing & SEO</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">95%</div>
                                    </div>
                                </div> */}
                                {/* <div className="skills-bar">
                                    <div className="bar-inner"><div className="bar progress-line" data-width="95"></div></div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content-accordion">
                            <Accordion allowZeroExpanded preExpanded={['0']}>
                                {props.data.children.map((v,i) => (
                                     <AccordionItem uuid={i.toString()}>
                                     <AccordionItemHeading>
                                         <AccordionItemButton>
                                             <span>
                                                 {v.title}
                                             </span>
                                         </AccordionItemButton>
                                     </AccordionItemHeading>
                                     <AccordionItemPanel>
                                         <p>{v.content}</p>
                                     </AccordionItemPanel>
                                 </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;