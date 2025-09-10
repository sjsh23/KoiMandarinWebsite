import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../../components/App/Layout"
import SEO from "../../components/App/SEO"
import Navbar from "../../components/App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/App/Footer"

import StudyAbroadBg from "../../assets/images/beijing-summer-palace.jpg"
import StudyAbroadImg1 from "../../assets/images/study-abroad/study-abroad-img1.jpg"
import StudyAbroadImg2 from "../../assets/images/study-abroad/study-abroad-img2.jpg"
import StudyAbroadImg3 from "../../assets/images/study-abroad/study-abroad-img3.jpg"
import BackgroundSection from "../../components/Common/BackgroundSection"

const StudyAbroad = () => {
  const { t } = useTranslation()
  const title = `${t('Services')} - ${t('OurServices StudyAbroad CTA')}`

  return (
    <Layout>
      <SEO title={title} />
      <Navbar />
      {/* <PageBanner pageTitle={<Trans>OurServices StudyAbroad CTA</Trans>} /> */}
      <BackgroundSection image={StudyAbroadBg} height="500px" style={{
     // pushes text down
        boxSizing: "border-box"
      }}>
        <h1 className="display-4 fw-bold">
          <Trans>OurServices StudyAbroad CTA</Trans>
        </h1>
        {/* <p className="lead">
          <Trans>OurServices StudyAbroad Page Title</Trans>
        </p> */}
      </BackgroundSection>

      <div className="about-area ptb-100">
        <div className="container">

          {/* SECTION 1 - Image Left, Text Right */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="700">
              <img src={StudyAbroadImg1} alt="Study Abroad" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="700">
              <span className="sub-title"><Trans>OurServices StudyAbroad Page Title</Trans></span>
              <h3><Trans>OurServices StudyAbroad Page CTA</Trans></h3>
              <p><Trans>OurServices StudyAbroad Page Desc</Trans></p>
              <p><Trans>OurServices StudyAbroad Desc Long</Trans></p>
            </div>
          </div>

          {/* SECTION 2 - Text Left, Image Right */}
          <div className="row align-items-center flex-row-reverse mb-5">
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="700">
              <img src={StudyAbroadImg2} alt="Study Abroad" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="700">
              <h3><Trans>OurServices StudyAbroad Reason Title</Trans></h3>
              <ul className="features-list">
                {[...Array(10)].map((_, i) => (
                  <li key={i}>
                    <i className="bx bx-badge-check"></i>
                    <Trans>{`OurServices StudyAbroad Reason${i+1}`}</Trans>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECTION 3 - Image Left, Text Right */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="700">
              <img src={StudyAbroadImg3} alt="Study Abroad" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="700">
              <p><Trans>OurServices StudyAbroad Page Desc Final</Trans></p>
              <h4><Trans>OurServices StudyAbroad Page Coming Soon</Trans></h4>
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

export default StudyAbroad
