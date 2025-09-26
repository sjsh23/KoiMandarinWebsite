import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"

import BannerImg from "../../assets/images/banner-img1.jpg"
import BannerImage3 from "../../assets/images/banner-img3.jpg"
import KoiVideo from "../../assets/videos/study-abroad.mp4"
import TeacherVideo from "../../assets/videos/koi-homepage-1.mp4"
import OnlineClassVideo from "../../assets/videos/online-class.mp4"

import Shape2 from "../../assets/images/shape/shape2.png"
import Shape3 from "../../assets/images/shape/shape3.png"
import Shape4 from "../../assets/images/shape/shape4.png"
import Shape5 from "../../assets/images/shape/shape5.png"
import Shape6 from "../../assets/images/shape/shape6.png"
import Shape7 from "../../assets/images/shape/shape7.png"
import Shape8 from "../../assets/images/shape/shape8.png"

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="home-wrapper-area">
        <div className="container-fluid">
        <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="home-slides"
          >
            <SwiperSlide>
              <div className="single-banner-item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                      <span 
                        className="sub-title"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <Trans>MainBanner CTA</Trans>
                      </span>

                      <h1
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      ><Trans>MainBanner CTA Long</Trans></h1>

                      <p
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                      >
                        <Trans>MainBanner Desc</Trans>
                      </p>

                      <div 
                        className="btn-box"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                      >
                        <div className="d-flex align-items-center">
                          <Link to="/contact" className="default-btn">
                            <Trans>Schedule a class</Trans>
                          </Link>

                          <div onClick={() => setOpen(true)} className="video-btn">
                            <i className="flaticon-play-button"></i> <Trans>Watch Video</Trans>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-12">
                    <div 
                      className="banner-image"
                      data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                    >
                      <img src={BannerImg} alt="Mandarin Course"/>
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-md-12">
        <div 
          className="banner-image"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="600"
          
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              marginRight: "100px"
            }}
          >
            <source src={TeacherVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-banner-item mb-4" style={{ backgroundColor: "#fff", minHeight: "100%"}}>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                      <span className="sub-title"><Trans>OurServices StudyTour CTA</Trans></span>
                      <h1><Trans>OurServices StudyTour Page Title</Trans></h1>
                      <p><Trans>OurServices StudyTour Desc Long</Trans></p>

                      <div className="btn-box">
                        <div className="d-flex align-items-center">
                          <Link to="/services/study-tour" className="default-btn">
                            <Trans>Learn More</Trans>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-12">
                    <div className="banner-image m-2">
                      <img src={BannerImage3} alt="Study Tour in China" />
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-md-12">
        <div 
          className="banner-image"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="600"
          
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              
            }}
          >
            <source src={KoiVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
  <div className="single-banner-item d-flex align-items-center">
    <div className="row align-items-center">
      
      {/* LEFT SIDE - TEXT */}
      <div className="col-lg-6 col-md-12">
        <div className="banner-content">
          <span 
            className="sub-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Trans>OurServices OnlineClass CTA</Trans>
          </span>

          <h1
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Trans>OurServices OnlineClass Title</Trans>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Trans>OurServices OnlineClass Desc</Trans>
          </p>

          <div 
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="d-flex align-items-center">
              <Link to="/contact" className="default-btn">
                <Trans>Get Started</Trans>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - VIDEO */}
      <div className="col-lg-6 col-md-12">
        <div 
          className="banner-image"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="600"
          
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              
              
            }}
          >
            <source src={OnlineClassVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </div>
  </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* loading <div className="shape1">
          <img src={Shape1} alt="Shape" />
        </div> */}
        <div className="shape2">
          <img src={Shape2} alt="Shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="Shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="Shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="Shape" />
        </div>
        <div className="shape6">
          <img src={Shape6} alt="Shape" />
        </div>
        <div className="shape7">
          <img src={Shape7} alt="Shape" />
        </div>
        <div className="shape8">
          <img src={Shape8} alt="Shape" />
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="IzYNg9mnrOM"
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default MainBanner
