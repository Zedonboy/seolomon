import { useRef, useState } from "react";
import InfoCard from "./InfoCard";

interface FeatureNode {
  icon: string;
  title: string;
  actionLink: string;
  desc: string;
}
interface IAltFeature {
  text1: string;
  text2: string;
  text3: string;
  children: FeatureNode[];
}
export default function CardSection(props: { data: IAltFeature }) {
  const [desc, setDesc] = useState(null);
  const [expand, setExpand] = useState(false);
  const [cardNum, setCardNum] = useState(-1);
  const ref = useRef();
  return (
    <section id="xv" ref={ref} className="w-full flex flex-col items-center">
      <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
        {props?.data?.text1}
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        {props?.data?.text2}
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {props?.data?.text3}
      </p>
      <section
        
        className={`transition-all duration-700 prose lg:prose-lg ${
          expand ? "h-auto" : "h-0"
        } overflow-hidden px-4 my-4`}
      >
        <p className="">{desc}</p>
        <button
          onClick={(e) => {
            setExpand(false);
            setDesc(null);
          }}
          type="button"
          className="block mx-auto items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </section>
      <section className="grid grid-cols-1 mt-8 gap-12 md:grid-cols-4 px-16 w-full">
        {props.data?.children?.map((n, i) => (
          <InfoCard
            selected={i === cardNum}
            title={n.title}
            content={n.desc}
            onClick={(e) => {
              setDesc(n.desc);
              setExpand(true);
              setCardNum(i);
              let elm = ref?.current
              //@ts-ignore
              elm?.scrollIntoView({
                behavior: "smooth"
              })
            }}
          />
        ))}
      </section>
    </section>
  );
}
