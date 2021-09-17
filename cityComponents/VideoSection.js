import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const AboutContent = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div style={{
                backgroundImage:"url(/city/images/about/about-5.jpg)"
              }} className="about-image-warp image-three">
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

            <div className="col-lg-6">
              <div className="about-content warp">
                <span>About Us</span>
                <h3>
                  We Help Companies to Generate Leads and Increase in Sales
                </h3>
                <div className="bar"></div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Online Presence</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Marketing Strategy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Promote local Sale</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="about-btn">
                  <Link href="/about-2">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default AboutContent;
