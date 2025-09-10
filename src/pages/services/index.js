import React from "react"
import { Link, graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../../components/App/Layout"
import SEO from "../../components/App/SEO"
import Navbar from "../../components/App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/App/Footer"

const Services = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t('Services')} />

      <Navbar />

      <PageBanner pageTitle={<Trans>Services</Trans>} />

      <div className="featured-services-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Trans>Learn More</Trans>
                  <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Trans>Learn More</Trans>
                  <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                  <Trans>Learn More</Trans>
                  <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Services
