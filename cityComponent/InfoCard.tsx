import { useEffect, useRef, useState, memo } from "react";

/* This example requires Tailwind CSS v2.0+ */
export function InfoCard(props : {title: string, content : string, onClick : (e : any) => void, selected : boolean} ) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  useEffect(() => {
    let elm = ref.current
    function setHoverFn() {
      setHover(true)
    }

    function unSetHoverFn() {
      setHover(false)
    }
    elm.addEventListener("mouseenter", setHoverFn)
    elm.addEventListener("mouseleave", unSetHoverFn)
    elm.addEventListener("click", (e) => {
      props.onClick(e)
    })
    return () => {
      elm.removeEventListener("mouseenter", setHoverFn)
      elm.removeEventListener("mouseleave", unSetHoverFn)
    }
  }, [])
  return (
    <div ref={ref} className={`bg-white overflow-hidden border-[1px] ${props.selected ? "border-indigo-400" : ""} cursor-pointer shadow transition-transform scale-100 hover:shadow-md hover:scale-105 rounded-lg`}>
      <div className="px-4 py-5 sm:p-6 relative">
        <span className={`absolute top-0 mt-2 ml-2 shadow shadow-indigo-500/50 left-0 rounded-full h-2 w-2 ${hover && !props.selected ? "bg-indigo-500" : `${props.selected ? "bg-green-400" : "bg-gray-400"}`}`}></span>
        <h2 className="font-bold text-purple-500">{props.title}</h2>
        <p className="line-clamp-5 max-h-40 h-40 mt-1 text-gray-700">
            {props.content.substr(0, 100)+"..."}
        </p>
        {/* <button
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Read More
        </button> */}
      </div>
    </div>
  );
}


export default memo(InfoCard)