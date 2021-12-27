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

const people = [
  { col1: "AI Tech", col2: "Seolo uses state-of-the-art language AI, augmented with use case specific best practices & templates", col3: "GPT-J", col4: "GPT-3", col5: "Deep Mind" },
  { col1: "Output quality", col2: "Seolo provides a much better, professional-quality output that requires minimal to no editing", col3: "9.5/10", col4: "8/10", col5: "7/10" },
  {col1: "Editor", col2: "Seolo offers a simple doc-style editor for distraction-free long-form writing. Perfect for blogs, articles, essays, and more", col3: "yes", col4: "no", col5: "no" },
  // More people...
  {col1: "Monthly price", col2:"Rytr is one of the most affordable, value for money tools especially with the offered quality and features", col3: "$29", col4: "$600", col5: "$900"}
];

export default function Comparison(props: { data: IComparison }) {
  return (
    <section className="flex w-full flex-col items-center px-4">
      <h2 className="text-base font-semibold text-center tracking-wider text-green-600 uppercase">
        {props?.data?.text1}
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-center text-gray-900 tracking-tight sm:text-4xl">
        {props?.data?.text2}
      </p>
      <p className="mt-5 max-w-prose mx-auto text-center text-xl text-gray-500">
        {props?.data?.text3}
      </p>
      <div className="flex overflow-auto w-full mt-2 md:justify-center">
        <table className="table-auto md:w-full">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Features
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Comment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-bold text-xl text-green-400 uppercase tracking-wider"
              >
                Seolo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company X
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company Y
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, personIdx) => (
              <tr
                key={personIdx}
                className={personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {person.col1}
                </td>
                <td className="px-6 py-4 min-w-[16rem] text-sm text-gray-500">
                  {person.col2}
                </td>
                <td className="px-6 py-4 text-green-500 text-lg">
                  {person.col3}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {person.col4}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {person.col5}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full table-auto divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quality
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company X
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company X
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company X
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
