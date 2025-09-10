import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t('Contact')} />

      <Navbar />

      <PageBanner pageTitle={<Trans>Contact</Trans>} />

      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3><Trans>Our Address</Trans></h3>
                <p>Rukan Ekslusif Bukit Golf Mediterania Blok G no 39, RT.7/RW.2, Kamal Muara, Jakarta Utara, Daerah Khusus Ibukota Jakarta</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3><Trans>Contact</Trans></h3>
                <p>
                  <Trans>Mobile</Trans>: <a href="tel:+6282210886629">(+62) 822 - 1088 - 6629</a>
                </p>
                <p>
                  <Trans>E-mail</Trans>: <a href="mailto:admin@koi-mandarin.com">admin@koi-mandarin.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3><Trans>Operating Hours</Trans></h3>
                <p><Trans>Monday - Friday</Trans>: 10:00 - 19:00</p>
                <p><Trans>Saturday</Trans>: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="map">
        <iframe style={{border:0}} loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrc4SIwAdai4RqeKhwVg68HQ&key=AIzaSyBT1lGbbslfi1ug0XylgGLqqXolvPWdcEU"></iframe>
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

export default Contact
