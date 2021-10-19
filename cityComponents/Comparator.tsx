import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MapComponent, { IMapSection } from "./MapComponent";

interface IInfo {
  author: string;
  message: string;
}
interface QualityItems {
  company_score: string;
  quality: string;
  seolo_score: string;
}
interface ComparisonItem {
  company_name: string;
  children: QualityItems[];
  info: IInfo[];
}
interface IComparison {
  text1: string;
  text2: string;
  text3: string;
  compares: ComparisonItem[];
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

export default function (props: { data: IComparison; mapStuff: IMapSection }) {
  const [comparison, setComparison] = useState(0);
  const [currentInfo, setCurrentInfo] = useState(0);
  return (
    <div className="w-full flex flex-col p-4">
      <div className="section-title">
        <span className="sub-title">{props?.data?.text1}</span>
        <h2>{props?.data?.text2}</h2>
        <p>{props?.data?.text3}</p>
      </div>
      <div className="w-full flex flex-wrap px-0 md:px-8">
        <div className="w-full md:w-0 h-[70vh] md:hidden flex flex-col bg-[#FE4C1C] p-4">
          <div className="w-full overflow-auto">
            <ul className="flex mb-0">
              {props?.data?.compares?.map((v, i) => (
                <li
                  className={`hover:text-blue-400 rounded-t-md flex px-2 py-2 ${
                    i === comparison ? "bg-white" : ""
                  }`}
                >
                  <button
                    onClick={(e) => {
                      setComparison(i);
                    }}
                  >
                    {v?.company_name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full px-0 md:px-4 bg-white rounded-lg">
            <AnimatePresence>
              <motion.div
                key={comparison}
                initial="initial"
                animate="active"
                exit="exit"
                variants={slideVariant}
                className="relative h-full p-2"
              >
                <div className="w-full my-2 p-1 flex justify-between items-center">
                  <p className="m-0 text-xs">Comparison</p>
                  <p className="m-0 font-bold text-[#FE4C1C] text-xs">Seolo</p>
                  <p className="m-0 text-xs text-gray-600">
                    {props?.data?.compares[comparison]?.company_name}
                  </p>
                </div>
                {props?.data?.compares[comparison]?.children?.map((v) => (
                  <div className="flex my-2 justify-between items-center">
                    <p className="m-0">{v?.quality}</p>
                    <p className="font-bold text-[#FE4C1C] m-0">
                      {v?.seolo_score}
                    </p>

                    <p className="m-0 font-bold">{v?.company_score}</p>
                  </div>
                ))}
               <AnimatePresence>
                  <div className="absolute bottom-0 w-full overflow-hidden">
                    <motion.div
                      initial="initial"
                      animate="active"
                      exit="exit"
                      variants={slideVariant}
                      key={currentInfo}
                      className="bg-indigo-50 border border-indigo-900 text-indigo-900 p-2 m-2"
                    >
                      <p className="text-left text-4xl m-0 absolute font-bold">
                        "
                      </p>
                      <p className="italic text-sm mt-4 font-light">
                        {
                          props?.data?.compares[comparison]?.info[currentInfo]?.message
                        }
                      </p>
                      <p className="text-right font-bold">
                        {
                          props?.data?.compares[comparison]?.info[currentInfo]?.author
                        }
                      </p>
                    </motion.div>
                    <div className="w-full p-4 flex space-x-2 justify-center">
                      {props?.data?.compares[comparison]?.info?.map((v, i) => (
                        <button
                          onClick={(e) => {
                            setCurrentInfo(i);
                          }}
                          className={`${
                            i === currentInfo ? "bg-blue-700" : "bg-blue-300"
                          } h-2 w-2 rounded-full`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[70vh] hidden md:flex bg-[#FE4C1C] rounded-3xl p-4">
          <div className="w-1/3 py-6">
            <ul className="flex flex-col">
              {props?.data?.compares?.map((v, i) => (
                <li
                  className={`hover:text-blue-400 rounded-l-md flex px-2 py-2 ${
                    i === comparison ? "bg-white text-gray-700" : "text-white"
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
                className="relative h-full"
              >
                <div className="w-full my-2 flex justify-between items-center">
                  <p className="m-0 text-xl">Comparison</p>
                  <p className="m-0 font-bold text-[#FE4C1C] text-2xl">Seolo</p>
                  <p className="m-0 text-xl text-gray-500">
                    {props?.data?.compares[comparison]?.company_name}
                  </p>
                </div>
                {props?.data?.compares[comparison]?.children?.map((v) => (
                  <div className="flex my-2 justify-between items-center">
                    <span className="m-0">{v?.quality}</span>
                    <span className="font-bold text-[#FE4C1C] m-0">
                      {v?.seolo_score}
                    </span>

                    <p className="m-0 text-gray-500">{v?.company_score}</p>
                  </div>
                ))}
                <AnimatePresence>
                  <div className="absolute bottom-0 w-full overflow-hidden">
                    <motion.div
                      initial="initial"
                      animate="active"
                      exit="exit"
                      variants={slideVariant}
                      key={currentInfo}
                      className="bg-indigo-50 border border-indigo-900 text-indigo-900 p-2"
                    >
                      <p className="text-left text-4xl m-0 absolute font-bold">
                        "
                      </p>
                      <p className="italic text-sm mt-4 font-light">
                        {
                          props?.data?.compares[comparison]?.info[currentInfo]?.message
                        }
                      </p>
                      <p className="text-right font-bold">
                        {
                          props?.data?.compares[comparison]?.info[currentInfo]?.author
                        }
                      </p>
                    </motion.div>
                    <div className="w-full p-4 flex space-x-2 justify-center">
                      {props?.data?.compares[comparison]?.info?.map((v, i) => (
                        <button
                          onClick={(e) => {
                            setCurrentInfo(i);
                          }}
                          className={`${
                            i === currentInfo ? "bg-blue-700" : "bg-blue-300"
                          } h-2 w-2 rounded-full`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 rounded-3xl overflow-hidden">
          <MapComponent data={props.mapStuff} />
        </div>
      </div>
    </div>
  );
}
