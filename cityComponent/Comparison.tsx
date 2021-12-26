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
  { name: 'Speed', title: '30%', role: '30%', email: '30%' },
  { name: 'Cost', title: '$50', role: '$70', email: '$79' },
  // More people...
]

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
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
        </div>
      </div>      
    </section>
  );
}
