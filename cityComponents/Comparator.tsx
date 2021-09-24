import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface QualityItems {
  company_score: string
  quality: string
  seolo_score: string
}
interface ComparisonItem {
  company_name: string
  children: QualityItems[]
}
interface IComparison{
  text1 :string
  text2 : string
  text3 : string
  compares :ComparisonItem[] 
}
let slideVariant = {
  initial: {
    opacity: 0,
  },

  active: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
  },
};

export default function (props : {data : IComparison}) {
  const [comparison, setComparison] = useState(0);
  return (
    <div className="container w-full flex flex-col items-center p-12">
        <div className="section-title">
          <span className="sub-title">{props?.data?.text1}</span>
          <h2>{props?.data?.text2}</h2>
          <p>{props?.data?.text3}</p>
        </div>

      <div className="w-2/3 h-[70vh] flex bg-gray-200 p-4">
        <div className="w-1/3 py-6">
          <ul className="flex flex-col">
            {props?.data?.compares?.map((v, i) => (
              <li
                className={`hover:text-blue-400 rounded-l-md flex px-2 py-2 ${
                  i === comparison ? "bg-white" : ""
                }`}
              >
                <button
                  onClick={(e) => {
                    setComparison(i);
                  }}
                >
                  {v.company_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 h-full p-4 bg-white rounded-lg">
          <AnimatePresence>
            <motion.div
              key={comparison}
              initial="initial"
              animate="active"
              exit="exit"
              variants={slideVariant}
            >
              <div className="w-full my-2 flex justify-between items-center">
                <p className="m-0 text-2xl">Seolo</p>
                <p className="m-0 font-bold text-green-400 text-4xl">Vs</p>
                <p className="m-0 text-2xl">{props?.data?.compares[comparison]?.company_name}</p>
              </div>
              {props?.data?.compares[comparison]?.children?.map((v) => (
                <div className="flex my-2 justify-between items-center">
                  <p className="font-bold m-0">{v.seolo_score}</p>
                  <p className="m-0">{v.quality}</p>
                  <p className="m-0 font-bold">{v.company_score}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
