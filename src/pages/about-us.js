import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import AboutContent from "../components/AboutUs/AboutContent"
import WhyChooseUs from "../components/AboutUs/WhyChooseUs"
import OurTeachers from "../components/Common/OurTeachers"
import Footer from "../components/App/Footer"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t('About Us')} />

      <Navbar />

      <PageBanner pageTitle={<Trans>About Us</Trans>} />

      <AboutContent />

      <WhyChooseUs />

      <OurTeachers />

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

export default AboutUs
