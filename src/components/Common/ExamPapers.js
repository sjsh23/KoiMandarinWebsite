import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"

import Shape9 from "../../assets/images/shape/shape9.png"
import Shape10 from "../../assets/images/shape/shape10.png"
import Shape11 from "../../assets/images/shape/shape11.png"
import Shape12 from "../../assets/images/shape/shape12.png"

const ExamPapers = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-content">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Trans>ExamPapers CTA</Trans>
            </span>

            <h2
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Trans>ExamPapers CTA Long</Trans>
            </h2>
          </div>
        </div>

        <div className="container-fluid">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
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
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="portfolio-slides"
          >
          </Swiper>
        </div>

        <div className="shape9">
          <img src={Shape9} alt="Shape" />
        </div>
        <div className="shape10">
          <img src={Shape10} alt="Shape" />
        </div>
        <div className="shape11">
          <img src={Shape11} alt="Shape" />
        </div>
        <div className="shape12">
          <img src={Shape12} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default ExamPapers
