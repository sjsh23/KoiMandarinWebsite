import React from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import AboutImg1 from "../../assets/images/about-img1.jpg"

const AboutSection = () => {
  return (
    <>
      <div className="about-area overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src={AboutImg1} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="content">
                  <span className="sub-title"><Trans>About Us</Trans></span>
                  <h2><Trans>About CTA Long</Trans></h2>
                  <p><Trans>About Desc</Trans></p>
                  <p><Trans>About Desc 2</Trans></p>

                  <Link to="/about-us" className="default-btn">
                    <Trans>More About Us</Trans>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
