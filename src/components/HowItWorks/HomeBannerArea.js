import React from "react"

const HomeBannerArea = () => {
  return (
    <div className="banner-area-inner">
      <div className="banner-inner-area banner-area1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-6 col-xl-6">
              <div className="banner-text-inner">
                <div className="banner-shape-wrap">
                  <div className="banner-shape-inner">
                    <img
                      src="/assets/img/banner/shape1.png"
                      alt=""
                      className="shape shape1 rotate3d"
                    />
                    <img
                      src="/assets/img/banner/shape2.png"
                      alt=""
                      className="shape shape2 rotate3d"
                    />
                    <img
                      src="/assets/img/banner/shape3.png"
                      alt=""
                      className="shape shape3 rotate-2d"
                    />
                    <img
                      src="/assets/img/banner/shape4.png"
                      alt=""
                      className="shape shape4 rotate3d"
                    />
                    <img
                      src="/assets/img/banner/shape5.png"
                      alt=""
                      className="shape shape7 rotate2d"
                    />
                    <img
                      src="/assets/img/banner/shape6.png"
                      alt=""
                      className="shape shape6 rotate-2d"
                    />
                  </div>
                </div>

                <h1>The S.L.I.C Movement</h1>
                <p className="tagline">Connecting Peers.</p>
                <p className="downloadnow">
                  Coming Soon to App Store and Google Play!
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-3 offse-xl-2">
              <div className="banner-image">
                <img src="/assets/img/banner/phonebanner5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBannerArea
