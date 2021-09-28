import { useRouter } from 'next/router'
import { useState } from 'react';
interface CitySearcher {
    text1:string
    text2:string
    searchPlaceholder:string
}
export default function CitySearch(props : {data : CitySearcher}) {
    const [city, setCity] = useState("")
    const router = useRouter()
  return (
    <div className="bg-gray-100 p-8 md:p-12 flex justify-center items-center">
      <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
        <div>
          <h1 className="text-center font-bold text-white text-4xl">
            {props?.data?.text1}
            <p className="mx-auto font-normal text-white text-base my-6 max-w-lg">
              {props?.data?.text2}
            </p>
            <div className="sm:flex mx-auto md:w-1/2 w-full items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
              onChange={e => {
                  setCity(e.target.value)
              }}
                className="text-base text-gray-800 flex-grow outline-none px-2 "
                type="text"
                placeholder={props?.data?.searchPlaceholder}
              />
              <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button
                  onClick={(e) => {
                      router.push(`/city/${city}`)
                  }}
                  className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"
                >
                  Search
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
