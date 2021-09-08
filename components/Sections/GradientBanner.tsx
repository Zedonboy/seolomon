import React from "react";

interface IGradientBanner {
  text1 : string
  text2 : string
  actionBtnText : string
  actionBtnLink : string
  cover : any
}
const MainBanner = (props : {data : IGradientBanner}) => {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="banner-area-content">
          <h1>{props?.data?.text1}</h1>
          <p>
            {props?.data?.text2}
          </p>

          <div className="row justify-center">
            {/* <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="website" placeholder="Your Website URL" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div> */}
            <div className="form-group">
              <a href={props?.data?.actionBtnLink || ""} className="default-btn flex">
                {props?.data?.actionBtnText}
              </a>
            </div>
          </div>
          <img src={props?.data?.cover?.url} alt="image" />
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
  );
};

export default MainBanner;
