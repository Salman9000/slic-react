import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbg">
        <img src="/assets/img/footer-bg.png" alt="" />
      </div>
      <div className="footer-top pt-120 pb-110">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="/assets/img/logoblue.svg" alt="" />
                  </a>
                </div>
                <p>Connecting Peers.</p>
                <div className="footer-social-area">
                  <ul className="social-icons social-icons-light nav">
                    <li>
                      <a
                        href="https://www.facebook.com/slicmovement"
                        target="_blank"
                      >
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/slicmovement"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/slicmovement/"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Extra Links</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="index.html">How It Works</a>
                      </li>
                      <li>
                        <a href="themovement.html">The Movement</a>
                      </li>
                      <li>
                        <a href="createpeergroup.php">Create Peer Group</a>
                      </li>
                      <li>
                        <a href="contactus.php">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="link-right">
                    <ul>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="terms.html">Terms</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>© copyright 2021 by S.L.I.C</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
