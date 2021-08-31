import React from "react";

interface Feature {
  title: string;
}
interface AServiceSection {
  title: string;
  preText: string;
  secondaryText: string;
  children: Feature[];
  cover: any;
}
const ASingleServices = (props: { data: AServiceSection }) => {
  return (
    <>
      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={props?.data?.cover?.url} alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">{props?.data?.preText}</span>
                <h2>{props?.data?.title}</h2>
                <p>{props?.data?.secondaryText}</p>
                <ul className="features-list">
                  {props?.data?.children?.map((v) => (
                    <li>
                      <span>
                        <i className="bx bx-check"></i> {v.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ASingleServices;
