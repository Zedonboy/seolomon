import React, { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

interface Slide {
    text : string
}
interface IBanner {
  text1: string;
  text2: string;
  text3: string;
  textColor: string
  slides : Slide[]
  actionBtnText: string;
  actionBtnLink: string;
}

const MainBanner = (props: { data: IBanner }) => {
  const [currSlide, setSlide] = useState(0);
  const cb = useCallback(() => {
    if (currSlide === (props?.data?.slides?.length || 0) - 1) {
      setSlide(-1);
      setTimeout(() => {
          setSlide(0)
      }, 500)
    } else {
      let v = currSlide + 1;
      setSlide(v);
    }
  }, [currSlide]);
  useEffect(() => {
    let fd = setTimeout(cb, 2000);
    return () => clearTimeout(fd);
  }, [currSlide]);
  return (
    <div className="banner-area">
      <div className="container">
        <div className="main-banner-content">
          <span className="sub-title">{props?.data?.text1}</span>
          <h1>{props?.data?.text2}</h1>
          <div className="overflow-hidden h-16">
            {props?.data?.slides?.map((v, i) => (
              <Transition
                show={i === currSlide}
                as={Fragment}
                enter="transition-opacity opacity-0 delay-500 duration-[400ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition transform duration-[400ms]"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                  <div className="w-full h-full">
                  <h2 style={{
                      color: props?.data?.textColor
                  }}>{v?.text}</h2>
                  </div>
                
              </Transition>
            ))}
          </div>
          <Link href={props?.data?.actionBtnLink || ""}>
            <a className="default-btn">{props?.data?.actionBtnText}</a>
          </Link>
        </div>
      </div>

      <div className="shape2">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape4">
        <img src="/images/shape/shape4.png" alt="image" />
      </div>
      <div className="shape5">
        <img src="/images/shape/shape5.png" alt="image" />
      </div>
      <div className="shape6">
        <img src="/images/shape/shape6.png" alt="image" />
      </div>
      <div className="shape7">
        <img src="/images/shape/shape7.png" alt="image" />
      </div>
      <div className="shape8">
        <img src="/images/shape/shape8.png" alt="image" />
      </div>
    </div>
  );
};

export default MainBanner;
