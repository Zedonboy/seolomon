import { ComparisonItem } from "./Comparison";

/* This example requires Tailwind CSS v2.0+ */
export default function CompareCard(props : {data : ComparisonItem} ) {
  return (
    <div className="bg-white h-80 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6 flex flex-col h-full items-center justify-between">
        <div>
          <img className="h-12 w-12" src={props?.data?.company_logo?.url}/>
        </div>
        {props?.data?.children?.map(v => (
           <div className="my-2">
           <p className="font-bold">{v?.quality}</p>
           <p className="font-light text-2xl">{v?.company_score}</p>
         </div>
        ))}
       <div></div>
      </div>
    </div>
  );
}
