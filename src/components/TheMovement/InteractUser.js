import React from "react"

const InteractUser = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-sm-7">
            <div className="user-interact-image">
              <img src="/assets/img/feature/user-interact.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-sm-5">
            <div className="user-interact-inner">
              <h2>Breaking Echo Chambers</h2>
              <p>
                SLIC builds new connections and provides an avenue for learning
                new things or bringing in new perspectives. Unlike other
                platforms, we randomize the suggestions we make to help users in
                exploring the broad range of subjects that they can learn from
                others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractUser
