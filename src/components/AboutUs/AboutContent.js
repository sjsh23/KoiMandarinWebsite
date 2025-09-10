import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import AboutImg2 from "../../assets/images/about-img2.jpg"

const AboutContent = () => {
  return (
    <>
      <div className="about-area ptb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-content">
                <img src={AboutImg2} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title"><Trans>About Us</Trans></span>
                  <h2><Trans>About Content CTA</Trans></h2>
                  <p><Trans>About Content</Trans></p>
                  <p><Trans>About Content 2</Trans></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent
