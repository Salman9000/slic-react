import React from "react"

const PageTitle = () => {
  return (
    <div
      className="page-title-wrap"
      style={{
        backgroundImage: `url("/assets/img/themovement-01.png")`,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title-content text-center">
              <h1 className="h2">The Movement</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
