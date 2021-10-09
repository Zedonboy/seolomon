import React from "react";
import Link from "next/link";

interface FeatureNode {
    icon: string
    title: string
    actionLink: string
    desc : string
}
interface IAltFeature {
  text1: string;
  text2: string;
  children: FeatureNode[];
}
const Features = (props: { data: IAltFeature }) => {
  return (
    <div className="features-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-width">
          <span>{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <div className="bar"></div>
        </div>

        <div className="row justify-content-center">
          {props?.data?.children?.map((v, i) => (
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <div className="icon">
                  <i className={v?.icon || ""}></i>
                </div>
                <h3>
                  <Link href={v?.actionLink || ""}>
                    <a>{v?.title}</a>
                  </Link>
                </h3>
                <p>
                  {v?.desc}
                </p>

                <div className="number">
                  <span>{i + 1}</span>
                </div>

                <div className="shape">
                  <img
                    src="/city/images/features-shape/features-shape-1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Features;
