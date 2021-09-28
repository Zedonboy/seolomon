import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const MainBanner = (props) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="main-banner p-0">
        <div className="h-[24px] md:h-0"></div>
        <div className="main-banner-item item-two pt-0">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content py-2">
                      <h1>{props?.header?.headerText}</h1>
                      <p>
                        {props?.header?.subHead}
                      </p>
                      {/* <div className="banner-btn">
                        <Link href="/contact-1">
                          <a className="default-btn">Where?</a>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      style={{
                        backgroundImage: `url(${props?.header?.videoCover?.url})`,
                      }}
                      className="about-image-warp rounded-3xl overflow-hidden h-[500px] image-three"
                    >
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i class="fas fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner-shape">
          <div className="shape-4">
            <img src="/city/images/banner/banner-shape-2.png" alt="image" />
          </div>
          <div className="shape-5">
            <img src="/city/images/banner/banner-shape-2.png" alt="image" />
          </div>
          <div className="shape-6">
            <img src="/city/images/banner/banner-shape-3.png" alt="image" />
          </div>
          <div className="shape-7">
            <img src="/city/images/banner/banner-shape-4.png" alt="image" />
          </div>
          <div className="shape-8">
            <img src="/city/images/banner/banner-shape-5.png" alt="image" />
          </div>
        </div>
      </div>
      <ModalVideo
        channel="custom"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        url={props?.header?.video?.url}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default MainBanner;
