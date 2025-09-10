import * as React from "react"
import CourseInterestForm from "../components/Register/CourseInterestForm"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import { Trans, useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import PageBanner from "../components/Common/PageBanner"


const Register = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar/>

    <main style={{ padding: "2rem", maxWidth: "800px", margin: "50px auto" }}>
      
      <CourseInterestForm />
    </main>
      <Footer/>
    </Layout>
    
  )
  
}
// export default function RegisterPage() {
//   return (
//     <Layout>
//       <Navbar/>
//     <main style={{ padding: "2rem", maxWidth: "800px", margin: "50px auto" }}>
      
//       <CourseInterestForm />
//     </main>
//       <Footer/>
//     </Layout>
//   )
// }

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
export default Register
