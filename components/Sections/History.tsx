import React from "react";

interface StepItem {
  text1: string
  text2: string
  cover: any
  title: string
  desc:string
}

interface IAdvancedStepSection {
  text1: string;
  text2: string;
  children: StepItem[];
}
const OurHistory = (props: { data: IAdvancedStepSection }) => {
  return (
    <div className="history-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
        </div>

        <ol className="timeline history-timeline">
          {props?.data?.children?.map((v) => (
            <li className="timeline-block">
              <div className="timeline-date">
                <span>{v?.text1}</span>
                {v?.text2}
                {/* <sup>th</sup> */}
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>{v?.title}</h3>
                      <p>
                        {v?.desc}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={v?.cover?.url} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default OurHistory;
