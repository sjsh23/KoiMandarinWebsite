import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import MainBanner from "../components/Home/MainBanner"
import Features from "../components/Home/Features"
import AboutSection from "../components/Home/AboutSection"
import WhyChooseUs from "../components/Common/WhyChooseUs"
import BooksToSale from "../components/Common/BooksToSale"
import OurTeachers from "../components/Common/OurTeachers"
import StudentAwards from "../components/Common/StudentAwards"
import Footer from "../components/App/Footer"
import ExamPapers from "../components/Common/ExamPapers"
import Popup from "../components/Common/StudyTourPopup"

const HomeOne = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t('Home')} />

      <Popup/>

      <Navbar />

      <MainBanner />

      <Features />

      <AboutSection />

      <WhyChooseUs />

      <StudentAwards />

      {/* <ExamPapers /> */}

      <BooksToSale />

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

export default HomeOne
