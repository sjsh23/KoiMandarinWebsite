import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../../components/App/Layout"
import SEO from "../../components/App/SEO"
import Navbar from "../../components/App/Navbar"
import MandarinCourseSection from "../../components/Services/MandarinCourseSection"
import Footer from "../../components/App/Footer"
import PageBanner from "../../components/Common/PageBanner"
import OnlineCourseSection from "../../components/Services/OnlineCourseSection"

const OnlineCourse = () => {
  const { t } = useTranslation()

  const title = `${t('Services')} - ${t('OurServices Mandarin CTA')}`

  return (
    <Layout>
      <SEO title={title} />

      <Navbar />

      <PageBanner pageTitle={<Trans>OurServices Mandarin CTA</Trans>} />

      <OnlineCourseSection />

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

export default OnlineCourse
