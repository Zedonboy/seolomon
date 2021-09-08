import { useEffect, useState } from "react";
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

interface Testimonial {
  name: string;
  occupation: string;
  profile: any;
  message: string;
}

interface ITestimonialSection {
  text1: string;
  text2: string;
  children: Testimonial[];
}

function skipper(arr = [], count = 0, rslt = [[], [], []]) {
  if (arr.length === 0) {
    return rslt;
  }
  let elm = arr.pop();
  if (count > 2) {
    rslt[0].push(elm);
    return skipper(arr, 0, rslt);
  } else {
    rslt[count].push(elm);
    return skipper(arr, count + 1, rslt);
  }
}

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  navText: [
    "<i class='flaticon-back'></i>",
    "<i class='flaticon-chevron'></i>",
  ],
};

const TestimonialStyleTwo = (props: { data: ITestimonialSection }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="feedback-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="feedback-image">
              <img src="/images/feedback-img1.jpg" alt="image" />
              <img src="/images/feedback-img2.jpg" alt="image" />
              <img src="/images/feedback-img3.jpg" alt="image" />
              <img src="/images/feedback-img4.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="feedback-content">
              <span className="sub-title">{props?.data?.text1}</span>
              <h2>{props?.data?.text2}</h2>

              {display ? (
                <OwlCarousel
                  //@ts-ignore
                  className="feedback-slides owl-carousel owl-theme"
                  {...options}
                >
                  {props?.data?.children?.map((v) => (
                    <div className="single-feedback-item">
                      <p>
                        {v?.message}
                      </p>

                      <div className="client-info">
                        <div className="d-flex align-items-center">
                          <img src={v?.profile?.url} alt="image" />
                          <div className="title">
                            <h3>{v?.name}</h3>
                            <span>{v?.occupation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </div>
  );
};

export default TestimonialStyleTwo;
