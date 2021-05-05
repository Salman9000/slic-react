import React from "react"

const CounterUpArea = () => {
  return (
    <section className="border-top pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-md-12">
            <h2>
              Building meaningful connections <br />
              by{" "}
            </h2>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="single-counter text-center">
              <div className="single-author-imge2">
                <img
                  style={{ height: "180px", width: "180px" }}
                  src="/assets/img/feature/section2img1.svg"
                  alt=""
                />
              </div>
              <p className="padding">
                Facilitating one-on-one connections within your established and
                trusted network
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-counter text-center">
              <div className="single-author-imge2">
                <img
                  style={{ height: "180px", width: "180px" }}
                  src="/assets/img/feature/section2img2.svg"
                  alt=""
                />
              </div>
              <p className="padding">
                Featuring a user-friendly, tried and tested UI to make
                connections
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-counter text-center">
              <div className="single-author-imge2">
                <img
                  style={{ height: "180px", width: "180px" }}
                  src="/assets/img/feature/section2img3.svg"
                  alt=""
                />
              </div>
              <p className="padding">
                Offering a no-risk signup - we will not charge you until
                connections are built!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CounterUpArea
