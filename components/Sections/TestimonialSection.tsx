import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  profile: any;
  message: string;
}

interface ITestimonialSection {
  text1: string;
  text2: string;
  children: Testimonial[];
}

function skipper(arr = [], count = 0, rslt = [[], [], []]) {
  if (arr.length === 0) {
    return rslt;
  }
  let elm = arr.pop();
  if (count > 2) {
    rslt[0].push(elm);
    return skipper(arr, 0, rslt);
  } else {
    rslt[count].push(elm);
    return skipper(arr, count + 1, rslt);
  }
}

export default function TestimonialSection(props: {
  data: ITestimonialSection;
}) {
  let [z, setZ] = useState([])
  useEffect(() => {
    let z = skipper(props?.data?.children);
    setZ(z)
  }, [])
  return (
    <div>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                {props?.data?.text1}
              </h1>
              <h3 className="text-xl mb-5 font-light">{props?.data?.text2}</h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                {z[0]?.map((v, i) => (
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={v?.profile?.url} alt="profile_phot" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {v?.name}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        {v?.message}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-3 md:w-1/3">
                {z[1]?.map((v, i) => (
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={v?.profile?.url} alt="profile_phot" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {v?.name}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        {v?.message}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-3 md:w-1/3">
                {z[2]?.map((v, i) => (
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={v?.profile?.url} alt="profile_phot" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {v?.name}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        {v?.message}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

