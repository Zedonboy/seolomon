import CompareCard from "./CompareCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface QualityItems {
  company_score: string;
  quality: string;
  seolo_score: string;
}
export interface ComparisonItem {
  company_name: string;
  children: QualityItems[];
  company_logo: any;
}
interface IComparison {
  text1: string;
  text2: string;
  text3: string;
  compares: ComparisonItem[];
}

export default function Comparison(props: { data: IComparison }) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
        {props?.data?.text1}
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        {props?.data?.text2}
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {props?.data?.text3}
      </p>
      <section className="w-full px-8 grid gap-4 grid-cols-1 md:grid-cols-5">
        <div className="py-2">
          <div className=" bg-gradient-to-br from-teal-200 to-cyan-600 text-white h-80 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 flex flex-col h-full items-center justify-between">
              <div>
                <img className="h-12 w-12" />
              </div>
              <div>
                <p className="font-bold">Time</p>
                <p className="font-light text-2xl">0.4%</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div
        id="compare"
          style={{
            scrollbarWidth: "none",
          }}
          className="md:col-span-3 w-full py-2 flex overflow-auto"
        >
          {props?.data?.compares?.map((c) => (
            <div className="w-full md:w-1/4 px-2 flex-shrink-0">
              <CompareCard data={c} />
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-1 items-center w-20 h-full">
          <div className="flex space-x-1 items-center">
            <button onClick={e => {
              let elm = document.getElementById("compare")
              elm.scrollBy({
                top: 0,
                left: -300,
                behavior: "smooth"
              })
            }} className="p-2 rounded bg-indigo-100 text-indigo-700">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={e => {
              let elm = document.getElementById("compare")
              elm.scrollBy({
                top: 0,
                left: 300,
                behavior: "smooth"
              })
            }} className="p-2 rounded bg-indigo-100 text-indigo-700">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
