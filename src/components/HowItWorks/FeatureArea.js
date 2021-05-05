import React from "react"

const FeatureArea = () => {
  return (
    <section className="pb-110" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-8">
            <div className="section-title text-center">
              <h2>How It Works</h2>
              <a href="createpeergroup.php" className="btn">
                Create Peer Group
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="feature-carousel owl-carousel">
              <div className=" box single-feature-inner text-center">
                <img src="/assets/img/feature/requestpeergroup.png" alt="" />
                <h4 style={{ color: "#ffaa00" }}>Customise</h4>
                <p>
                  Create your own <b>customised process</b> for member admission{" "}
                </p>
              </div>
              <div className="box single-feature-inner text-center">
                <img src="/assets/img/feature/chatgroup.png" alt="" />
                <h4 style={{ color: "#ffaa00" }}>Engage</h4>
                <p>
                  Group chat to <b>interact and create</b> special requests{" "}
                </p>
              </div>
              <div className="box single-feature-inner text-center">
                <img src="/assets/img/feature/swipe.png" alt="" />
                <h4 style={{ color: "#ffaa00" }}>Connect</h4>
                <p>
                  <b>Swipe through</b> to connect with members within the group{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureArea
