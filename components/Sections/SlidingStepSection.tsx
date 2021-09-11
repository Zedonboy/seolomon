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
  enter:{
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
  exit:{
    opacity: 0,
  }
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
  const [currentPage, setCurrentPage] = useState(0);

  if(!props?.data?.steps) return null 
  return (
    <div className="project-start-area ptb-100 md:max-h-[100vh] overflow-hidden">
      <div className="w-full container justify-around items-center py-8 flex">
        <button onClick={e => {
          if(currentPage === 0){
            setCurrentPage(props.data.steps.length - 1)
          } else {
            setCurrentPage(currentPage - 1)
          }
        }} className="rounded-md border-2 hover:bg-blue-700 hover:text-white border-blue-700 px-6 text-blue-700 py-1">Prev</button>
        <div className="flex space-x-1">
          {props.data.steps.map((v,i) => (
            <button onClick={e => {
              setCurrentPage(i)
            }} className={`w-2 h-2 rounded-full ${i === currentPage ? "bg-blue-700" : "bg-blue-100"}`}></button>
          ))}
        </div>
        <button onClick={e => {
          if(currentPage === (props.data.steps.length - 1)){
            setCurrentPage(0)
          } else {
            setCurrentPage(currentPage + 1)
          }
        }} className="rounded-md border-2 border-blue-700 px-6 hover:bg-blue-700 hover:text-white text-blue-700 py-1">Next</button>
      </div>
      <div className="container">
        <AnimatePresence>
          <motion.div
          key={currentPage}
            variants={variants}
            initial="enter"
            animate="active"
            exit="exit"
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
