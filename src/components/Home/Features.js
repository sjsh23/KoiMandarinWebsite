import React from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

const Features = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"><Trans>OurServices CTA</Trans></span>
            <h2><Trans>OurServices CTA Long</Trans></h2>
            <p><Trans>OurServices Desc</Trans></p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-conversation"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/services/mandarin-course"><Trans>OurServices Mandarin CTA</Trans></Link>
                </h3>

                <p><Trans>OurServices Mandarin Desc</Trans></p>

                <Link to="/services/mandarin-course" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  <Trans>Learn More</Trans> <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-keywords"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/services/study-abroad"><Trans>OurServices StudyAbroad CTA</Trans></Link>
                </h3>

                <p><Trans>OurServices StudyAbroad Desc</Trans></p>

                <Link to="/services/study-abroad" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  <Trans>Learn More</Trans> <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-paper-plane"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/services/study-tour"><Trans>OurServices StudyTour CTA</Trans></Link>
                </h3>

                <p><Trans>OurServices StudyTour Desc</Trans></p>

                <Link to="/services/study-tour" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  <Trans>Learn More</Trans> <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-paper-plane"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/services/study-tour"><Trans>Services OnlineClass CTA</Trans></Link>
                </h3>

                <p><Trans>Services OnlineClass Desc</Trans></p>

                <Link to="/services/online-course" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  <Trans>Learn More</Trans> <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
