import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import StudentAwardsImg from "../../assets/images/student-awards.jpg"
import StudentAwardsImg2 from "../../assets/images/student-awards2.jpg"
import Stars1 from "../../assets/images/stars/stars1.webp"
import Stars2 from "../../assets/images/stars/stars2.webp"
import Stars3 from "../../assets/images/stars/stars3.webp"
import Stars4 from "../../assets/images/stars/stars4.webp"
import Stars5 from "../../assets/images/stars/stars5.webp"
import Shape15 from "../../assets/images/shape/shape15.png"

const StudentAwards = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                modules={[Pagination, Autoplay]}
                className="testimonials-slides"
              >
                <SwiperSlide>
                  <div className="about-img">
                    <img src={Stars1} alt="About" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="about-img">
                    <img src={Stars2} alt="About" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="about-img">
                    <img src={Stars3} alt="About" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="about-img">
                    <img src={Stars4} alt="About" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="about-img">
                    <img src={Stars5} alt="About" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="text">
                  <span className="sub-title"><Trans>StudentAwards CTA</Trans></span>
                  <h2><Trans>StudentAwards CTA Long</Trans></h2>
                  <p><Trans>StudentAwards Desc</Trans></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape15">
          <img src={Shape15} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default StudentAwards
