import React from 'react';

interface Partner {
    logo:any
}
interface PartnerSection {
    children : Partner[]
}
const Partner = (props : {data : PartnerSection}) => {
    return (
        <div className="partner-area bg-f9f9f9 ptb-70">
            <div className="container">
                <div className="row align-items-center justify-content-md-center">
                    {props?.data?.children.map(v => (
                        <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={v?.logo?.url} alt="image" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partner;