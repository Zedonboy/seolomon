import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
    width: "0px",
    height: "0px",
  },

  active: {
    opacity: 1,
    width: "100%",
    height: "auto",
  },
};
interface FeatureNode {
  icon: string;
  title: string;
  actionLink: string;
  desc: string;
}
interface IAltFeature {
  text1: string;
  text2: string;
  children: FeatureNode[];
}
const Features = (props: { data: IAltFeature }) => {
  let [showMoreText, setShowMoreText] = useState("");
  let [currIndex, setCurrIndex] = useState(-1);
  let showMoreDomRef = useRef();
  let animationControls = [...Array(props?.data?.children?.length || 0)].map(
    (_) => {
      return useAnimation();
    }
  );

  let showMoreController = useAnimation();
  return (
    <div className="features-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-width">
          <span>{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <div className="bar"></div>
        </div>
        <motion.div
          variants={variant}
          initial="initial"
          ref={showMoreDomRef}
          animate={showMoreController}
          className={`p-2 md:p-8 border rounded border-[#FF4557]`}
        >
          <p className="font-light text-xl text-center">{showMoreText}</p>
          <button
            onClick={(e) => {
              let control = animationControls[currIndex];
              showMoreController.start("initial").then((d) => {
                control.start({
                  //@ts-ignore
                  y: 0,
                  //@ts-ignore
                  x: 0,
                  opacity: 1,
                });
              });
            }}
            className="default-btn"
          >
            Close
          </button>
        </motion.div>
        <div className="row justify-content-center">
          {props?.data?.children?.map((v, i) => (
            <motion.div
              animate={animationControls[i]}
              onClick={(e) => {
                let control = animationControls[i];
                if (!showMoreDomRef) return;
                
                //@ts-ignore
                let rect = showMoreDomRef.current.getBoundingClientRect();
                let top = rect.top + window.scrollY
                let lft = rect.left + window.scrollX
                //@ts-ignore
                let cardRect = e.target.getBoundingClientRect()
                let cardTop = cardRect.top + window.scrollY
                let cardLeft = cardRect.left + window.scrollX
                let animTop = cardTop - top
                let animLeft = -(cardLeft - lft)
               
                control
                  .start({
                    opacity: 0,
                    //@ts-ignore
                    y: -animTop,

                    //@ts-ignore
                    x: animLeft,
                  })
                  .then((dt) => {
                    setShowMoreText(v?.desc);
                    showMoreController.start("initial");
                    if(currIndex !== -1 &&currIndex !== i) {
                      let control = animationControls[currIndex];
                      control.start({
                        opacity: 1,
                        x: 0,
                        y: 0
                      })
                    }
                    setCurrIndex(i);
                    showMoreController.start("active");
                    //setAcivateShowMore(true)
                  });
              }}
              className={`col-lg-3 col-md-6 relative`}
            >
              <div className="single-features md:h-80">
                <div className="icon">
                  <i className={v?.icon || ""}></i>
                </div>
                <h3>
                  <Link href={v?.actionLink || ""}>
                    <a>{v?.title}</a>
                  </Link>
                </h3>
                <p>{function(){
                  if(!v?.desc) return
                  let substr = v?.desc.substring(0,160)
                  let textLngth = v?.desc?.length || -1
                  if(textLngth > 160){
                    return substr + "..."
                  } else return substr
                }()
                }</p>

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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
