import React from "react"
import { graphql, Link } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"

import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"

import TeacherImg1 from "../assets/images/teacher/teacher-img1.jpg"
import TeacherImg2 from "../assets/images/teacher/teacher-img2.jpg"
import TeacherImg3 from "../assets/images/teacher/teacher-img3.jpg"
import TeacherImg4 from "../assets/images/teacher/teacher-img.jpg"
import TeacherImg5 from "../assets/images/teacher/teacher-img5.jpg"
import TeacherImg6 from "../assets/images/teacher/teacher-img6.jpg"

const Teachers = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t('Teachers')} />

      <Navbar />

      <PageBanner pageTitle={<Trans>Teachers</Trans>} />

      {/* <div className="team-area-two ptb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={TeacherImg1} alt="Teacher" />

                <div className="content">
                  <h3><Trans>Zhu Ming Chao</Trans></h3>
                </div>

                <ul className="social-link">
                  <li>
                    <Link
                      to=""
                      onClick={e => e.preventDefault()}
                      className="d-block"
                    >
                      <i className="bx bx-show"></i>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/zmc4664828"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={TeacherImg2} alt="Teacher" />

                <div className="content">
                  <h3><Trans>Wong Chuin Leen</Trans></h3>
                </div>

                <ul className="social-link">
                  <li>
                    <Link
                      to=""
                      onClick={e => e.preventDefault()}
                      className="d-block"
                    >
                      <i className="bx bx-show"></i>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/wong_929"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={TeacherImg3} alt="Teacher" />

                <div className="content">
                  <h3><Trans>Nan Nan</Trans></h3>
                </div>

                <ul className="social-link">
                  <li>
                    <Link
                      to=""
                      onClick={e => e.preventDefault()}
                      className="d-block"
                    >
                      <i className="bx bx-show"></i>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nan_c_nan"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <img src={TeacherImg4} alt="Teacher" />

                <div className="content">
                  <h3><Trans>Zhang Lirong</Trans></h3>
                </div>

                <ul className="social-link">
                  <li>
                    <Link
                      to=""
                      onClick={e => e.preventDefault()}
                      className="d-block"
                    >
                      <i className="bx bx-show"></i>
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="team-slides"
                >
                  <SwiperSlide>
                    <div className="single-team-box m-2">
                      <img src={TeacherImg1} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Zhu Ming Chao</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/zmc4664828"
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                    <div className="single-team-box">
                      <img src={TeacherImg2} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Wong Chuin Leen</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/wong_929"
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                   <div className="single-team-box">
                      <img src={TeacherImg3} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Nan Nan</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/nan_c_nan"
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                   <div className="single-team-box">
                      <img src={TeacherImg4} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Zhang Lirong</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href=""
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                   <div className="single-team-box">
                      <img src={TeacherImg5} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Viriyani Djohan</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href=""
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                   <div className="single-team-box">
                      <img src={TeacherImg6} alt="team-image" />
      
                      <div className="content">
                        <h3><Trans>Guo Fang Cen</Trans></h3>
                      </div>
      
                      <ul className="social-link">
                        <li>
                          <Link
                            to=""
                            onClick={e => e.preventDefault()}
                            className="d-block"
                          >
                            <i className="bx bx-show"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href=""
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </Swiper>

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

export default Teachers
