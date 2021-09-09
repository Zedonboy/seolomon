import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface InfoSection {
  cover: any;
  title: string;
  preText: string;
  secondaryText: string;
}

interface StepSection {
  steps: InfoSection[];
}

const xOffset = 1000;
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

let arr = [
  {
    cover: { url: "/images/blog/blog-img1.jpg" },
    title: "Bioma",
    preText: "Step 1",
    secondaryText: "bvhjvhfbvfdbvjhfbd fnvjfnvfdnvjfnd fdvfbvfjvbjfdvnbfvn",
  },
  {
    cover: { url:  "/images/blog/blog-img2.jpg" },
    title: "Vera",
    preText: "Step 2",
    secondaryText: "bvhjvhfbvfdbvjhfbd fdvfbvfjvbjfdvnbfvn",
  },
  {
    cover: { url:  "/images/blog/blog-img3.jpg" },
    title: "Veafra",
    preText: "Step 3",
    secondaryText: "bvhjvhfbvfdbvjhfbd fnvjfnvfdnvjfnd fdvfbvfjvbjfdvnbfvn",
  },
];
const InfoSection = (props: { data: StepSection }) => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  useEffect(() => {
    if(props?.data?.steps?.length === 0) return
    let td = setTimeout(() => {
      if (currentPage === props?.data?.steps?.length - 1) {
        setPage(0, undefined);
      } else setPage(currentPage + 1, undefined);
    }, 6000);

    return () => clearTimeout(td);
  }, [currentPage]);
  function setPage(newPage, newDirection) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }
  if(!props?.data?.steps) return null 
  return (
    <div className="project-start-area ptb-100 md:max-h-[100vh] overflow-hidden">
      <div className="container">
        <AnimatePresence custom={direction}>
          <motion.div
          key={currentPage}
            variants={variants}
            initial="enter"
            animate="active"
            exit="exit"
            // transition={{
            //     x: { type: "spring", stiffness: 300, damping: 30 },
            //     opacity: { duration: 0.2 }
            //   }}
            custom={direction}
            className="row align-items-center  overflow-hidden"
          >
            <div
              className="col-lg-6 col-md-12"
            >
              <div className="project-start-image rounded-3xl overflow-hidden">
                <img
                  className="rounded-xl"
                  src={props.data.steps[currentPage].cover.url}
                  alt="image"
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
            >
              <div className="project-start-content">
                <span className="sub-title">{props?.data?.steps[currentPage].preText}</span>
                <h2>{props?.data?.steps[currentPage].title}</h2>
                <p>{props?.data?.steps[currentPage].secondaryText}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* <div className="shape2">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape5">
        <img src="/images/shape/shape5.png" alt="image" />
      </div>
      <div className="shape6">
        <img src="/images/shape/shape6.png" alt="image" />
      </div>
      <div className="shape7">
        <img src="/images/shape/shape7.png" alt="image" />
      </div>
      <div className="shape13">
        <img src="/images/shape/shape13.png" alt="image" />
      </div> */}
    </div>
  );
};

export default InfoSection;
