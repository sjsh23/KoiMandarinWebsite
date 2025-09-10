import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import MandarinCourseImg from "../../assets/images/mandarin-course-img.jpg"

const AboutSection = () => {
  return (
    <>
      <div className="about-area pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-img"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src={MandarinCourseImg} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="text">
                  <span className="sub-title"><Trans>OurServices Mandarin CTA</Trans></span>
                  <h2><Trans>OurServices Mandarin Page Title</Trans></h2>
                  <p><Trans>OurServices Mandarin Page Desc</Trans></p>

                  <ul className="features-list">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <li><i className="bx bx-group"></i> <Trans>Small Groups</Trans></li>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <li><i className="bx bx-user"></i> <Trans>Private</Trans></li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="flaticon-jigsaw"></i>
                    <div className="circles-box">
                      <div className="circle-one"></div>
                    </div>
                  </div>
                  <h3><Trans>Student</Trans></h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li><Trans>OurServices Mandarin Student Feature1</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature2</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature3</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature4</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature5</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature6</Trans></li>
                    <li><Trans>OurServices Mandarin Student Feature7</Trans></li>
                  </ul>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="flaticon-competitor"></i>
                    <div className="circles-box">
                      <div className="circle-one"></div>
                    </div>
                  </div>
                  <h3><Trans>Adult</Trans></h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li><Trans>OurServices Mandarin Adult Feature1</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature2</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature3</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature4</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature5</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature6</Trans></li>
                    <li><Trans>OurServices Mandarin Adult Feature7</Trans></li>
                  </ul>
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
