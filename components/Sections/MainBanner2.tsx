import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

interface Slider {
  text1: string;
  text2: string;
  text3: string;
  cover: any
  actionBtnText: string
  actionBtnLink : string
}
interface IMainBanner {
  slides: Slider[];
}
const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  navText: [
    "<i class='flaticon-back'></i>",
    "<i class='flaticon-chevron'></i>",
  ],
};

const MainBanner = (props: { data: IMainBanner }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      {display ? (
        <OwlCarousel
        //@ts-ignore
          className="home-slides-two owl-carousel owl-theme"
          {...options}
        >
          {props?.data?.slides?.map((v) => (
            <div className="banner-section">
              <div className="container">
                <div className="home-content">
                  <img src={v?.cover?.url} alt="image" />
                  <span className="sub-title">{v?.text1}</span>
                  <h1>{v?.text2}</h1>
                  <p>
                    {v?.text3}
                  </p>

                  <Link href={v?.actionBtnLink || ""}>
                    <a className="default-btn">{v?.actionBtnText}</a>
                  </Link>
                </div>
              </div>

              <div className="shape2">
                <img src="/images/shape/shape2.png" alt="image" />
              </div>
              <div className="shape3">
                <img src="/images/shape/shape3.png" alt="image" />
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
              <div className="shape13">
                <img src="/images/shape/shape13.png" alt="image" />
              </div>
              <div className="shape8">
                <img src="/images/shape/shape8.png" alt="image" />
              </div>
            </div>
          ))}

          
        </OwlCarousel>
      ) : (
        ""
      )}
    </>
  );
};

export default MainBanner;
