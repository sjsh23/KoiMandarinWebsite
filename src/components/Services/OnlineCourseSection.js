import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import MandarinCourseVideo from "../../assets/videos/online-course-video-ratio.mp4"
import poster1 from "../../assets/images/online-class/online-class-poster1.webp"
import poster2 from "../../assets/images/online-class/online-class-poster2.webp"

const posters = [poster1, poster2]

const AboutSection = () => {
  return (
    <>
      <div className="about-area pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT SIDE - VIDEO */}
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-img"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <video
                  src={MandarinCourseVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", borderRadius: "10px" }}
                />  
              </div>
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="text">
                  <span className="sub-title"><Trans>OurServices Online CTA</Trans></span>
                  <h2><Trans>OurServices Online Page Title</Trans></h2>
                  <p><Trans>OurServices Online Page Desc</Trans></p>

                  <ul className="features-list">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <li><i className="bx bx-group"></i> <Trans>Small Groups</Trans></li>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <li><i className="bx bx-user"></i> <Trans>Private</Trans></li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POSTER SWIPER SECTION */}
      <div className="poster-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <h2 className="text-center mb-4">
            <Trans>OurServices Online Posters</Trans>
          </h2>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay, Navigation]}
            className="poster-swiper"
          >
            {posters.map((poster, i) => (
              <SwiperSlide key={i}>
                <div className="poster-slide">
                  <img src={poster} alt={`poster-${i}`} className="poster-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Minimal CSS */}
      <style jsx>{`
  .poster-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .poster-img {
    width: 100%;
    max-width: 500px; /* prevents poster from being too big on large screens */
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }

  .poster-swiper {
    padding-bottom: 40px;
  }

  .poster-swiper .swiper-pagination {
    bottom: 0px !important;
  }

  .poster-swiper .swiper-button-prev,
  .poster-swiper .swiper-button-next {
    color: #000;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .poster-img {
      max-width: 100%; /* take full width on smaller screens */
    }
  }
`}</style>

    </>
  )
}

export default AboutSection
