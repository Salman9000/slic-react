import React from "react"
import { Link } from "react-router-dom"

const MainHeader = () => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="main-menu-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logoblue.svg"
                      data-rjs="2"
                      alt="jironis"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-1 col-md-4 col-sm-5 d-md-block d-none"></div>
              <div className="col-xl-8 col-lg-6 col-md-4 col-6 menu-button">
                <div className="menu--inner-area clearfix">
                  <div className="menu-wraper">
                    <nav>
                      <div className="header-menu dosis">
                        <ul>
                          <li className="active">
                            <Link to="/">How It Works</Link>
                          </li>
                          <li>
                            <Link to="/movement">The Movement</Link>
                          </li>
                          <li>
                            <Link to="/createpeergroups">
                              Create Peer Group
                            </Link>
                          </li>
                          <li>
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                          <li>
                            <a href="https://client.slicmovement.com/admin/user">
                              Login
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
