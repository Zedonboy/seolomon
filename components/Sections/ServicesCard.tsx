import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
interface ICard {
  icon: string;
  link: string;
  title: string;
  secondaryText: string;
}
interface ICardSection {
  text1: string;
  text2: string;
  text3: string;
  bgColor: string;
  children: ICard[];
}

const item = {
  show: (index) => {
    return {
      opacity: 1,
      transition: {
        delay: index * 0.6,
        duration: 1,
      }
    };
  }
};

const ServicesCard = (props: { data: ICardSection }) => {
  const control = useAnimation();
  const ref = useRef()
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            control.start("show");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.8],
      }
    );
    
    if(ref.current){
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []);
  return (
    <div
    ref={ref}
      style={{
        backgroundColor: props?.data?.bgColor || "white",
      }}
      className="services-area bg-f9f9f9 pt-100 pb-70"
    >
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <p>{props?.data?.text3}</p>
        </div>

        <motion.div animate={control} className="row">
          {props?.data?.children?.map((v, i) => (
            <motion.div
            custom={i}
              variants={item}
              className="col-lg-4 col-md-6 col-sm-6 opacity-0"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className={v?.icon || "far fa-lightbulb"}></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                  <Link href={v?.link || "link"}>
                    <a>{v?.title}</a>
                  </Link>
                </h3>
                <p>{v?.secondaryText}</p>

                {/* <Link href={v?.link || ""}>
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCard;
