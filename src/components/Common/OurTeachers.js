import React from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import TeacherImg1 from "../../assets/images/teacher/teacher-img1.jpg"
import TeacherImg2 from "../../assets/images/teacher/teacher-img2.jpg"
import TeacherImg3 from "../../assets/images/teacher/teacher-img3.jpg"
import TeacherImg4 from "../../assets/images/teacher/teacher-img.jpg"
import TeacherImg5 from "../../assets/images/teacher/teacher-img5.jpg"
import TeacherImg6 from "../../assets/images/teacher/teacher-img6.jpg"
import Shape17 from "../../assets/images/shape/shape17.png"

const OurTeachers = () => {
  return (
    <>
      <div className="team-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"><Trans>OurTeam CTA</Trans></span>
            <h2><Trans>OurTeam CTA Long</Trans></h2>
            <p><Trans>OurTeam Desc</Trans></p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
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
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="team-slides"
          >
            <SwiperSlide>
              <div className="single-team-box">
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
          </Swiper>
        </div>

        <div className="shape17">
          <img src={Shape17} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default OurTeachers
