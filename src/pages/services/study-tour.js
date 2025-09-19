import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/App/Layout"
import SEO from "../../components/App/SEO"
import Navbar from "../../components/App/Navbar"
import Footer from "../../components/App/Footer"
import BackgroundSection from "../../components/Common/BackgroundSection"
import { useLocation } from "@reach/router"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import bgimage from "../../assets/images/study-tour/studytourbg.webp"
import tianjin1 from "../../assets/images/study-tour/tianjintour1.jpg"
import tianjin2 from "../../assets/images/study-tour/tianjintour2.jpg"
import tianjin3 from "../../assets/images/study-tour/tianjintour3.jpg"
import tianjin4 from "../../assets/images/study-tour/tianjintour4.jpg"
import tianjin5 from "../../assets/images/study-tour/tianjintour5.jpg"
import tianjin6 from "../../assets/images/study-tour/tianjintour6.jpg"
import tianjin7 from "../../assets/images/study-tour/tianjintour7.jpg"
import tianjin8 from "../../assets/images/study-tour/tianjintour8.jpg"
import tianjin9 from "../../assets/images/study-tour/tianjintour9.jpg"
import tianjin10 from "../../assets/images/study-tour/tianjintour10.jpg"
import tianjin11 from "../../assets/images/study-tour/tianjintour11.jpg"
import tianjin12 from "../../assets/images/study-tour/tianjintour12.jpg"
import tianjin13 from "../../assets/images/study-tour/tianjintour13.jpg"
import tianjin14 from "../../assets/images/study-tour/tianjintour14.jpg"
import tianjin15 from "../../assets/images/study-tour/tianjintour15.jpg"
import poster1 from "../../assets/images/study-tour/studytour_poster1.png"
import poster2 from "../../assets/images/study-tour/koiWinterPoster2025.png"
import itinerary from "../../assets/images/study-tour/tianjin-itinerary.png"

const studyTours = [
  {
    id: 1,
    title: "Tianjin 2024",
    img: poster1,
    description: "Amazing study tour in Beijing 2024 with cultural and educational experiences.",
    gallery: [
      tianjin1, tianjin2, tianjin3, tianjin10, tianjin5,
      tianjin14, tianjin7, tianjin8, tianjin9, tianjin4,
      tianjin11, tianjin12, tianjin13, tianjin6, tianjin15
    ],
  },
  {
    id: 2,
    title: "Tianjin 2025",
    img: poster2,
    description: "Amazing study tour in Tianjin 2025 with cultural and educational experiences.",
    gallery: [itinerary]
  }
]

const StudyTour = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const [selectedTour, setSelectedTour] = useState(null)

  const title = `${t("Services")} - ${t("OurServices StudyTour CTA")}`

  useEffect(() => {
    if (location.state?.selectedTourId) {
      const tour = studyTours.find(t => t.id === location.state.selectedTourId)
      if (tour) setSelectedTour(tour)
    }
  }, [location.state])

  return (
    <Layout>
      <SEO title={title} />
      <Navbar />

      <BackgroundSection image={bgimage} height="500px">
        <h1 className="display-4 fw-bold">
          <Trans>OurServices StudyTour CTA</Trans>
        </h1>
      </BackgroundSection>

      <div className="container py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="700">
              <span className="sub-title">
                <Trans>OurServices StudyTour CTA</Trans>
              </span>
              <h3><Trans>OurServices StudyTour Page Title</Trans></h3>
              <p><Trans>OurServices StudyTour Page Desc 1</Trans></p>
              <p><Trans>OurServices StudyTour Page Desc 2</Trans></p>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="700">
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay, Navigation]}
                className="studyTour-swiper"
              >
                {studyTours.map((tour) => (
                  <SwiperSlide key={tour.id}>
                    <div
                      className="about-img cursor-pointer"
                      onClick={() => setSelectedTour(tour)}
                    >
                      <img src={tour.img} alt={tour.title} />
                    </div>
                    <h4 className="text-center mt-2">{tour.title}</h4>
                    <div className="text-center mt-2">
                      <button
                        className="click-me-btn"
                        onClick={() => setSelectedTour(tour)}
                      >
                        Click Me
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

{/* Modal */}
{selectedTour && (
  <div className="modal-backdrop">
    {selectedTour.id === 2 ? (
      // 🔹 Fullscreen modal for poster 2
      <div className="modal-fullscreen">
        <button
          className="close-btn close-btn-light"
          onClick={() => setSelectedTour(null)}
        >
          ✕
        </button>

        {/* <div className="poster-description">
          <h2>{selectedTour.title}</h2>
          <p>{selectedTour.description}</p>
        </div> */}

        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="poster-swiper"
        >
          {selectedTour.gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="fullscreen-slide">
                <img src={img} alt={`${selectedTour.title}-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ) : (
      // 🔹 Default modal for poster 1
      <div className="modal-content">
        <button
          className="close-btn close-btn-dark"
          onClick={() => setSelectedTour(null)}
        >
          ✕
        </button>
        <h2>{selectedTour.title}</h2>
        <p>{selectedTour.description}</p>
        <div className="gallery">
          {selectedTour.gallery.map((img, index) => (
            <img key={index} src={img} alt="" className="gallery-img" />
          ))}
        </div>
      </div>
    )}
  </div>
)}



      <Footer />

      {/* CSS */}
      <style jsx>{`
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: none;
            font-size: 1.8rem;
            cursor: pointer;
            z-index: 2000;
            color: #000
          }

          .close-btn-dark {
            color: #000; /* black for light modal */
          }

          .close-btn-light {
            color: #fff; /* white for fullscreen modal */
          }

        .studyTour-swiper {
          position: relative;
          padding-bottom: 40px;
        }
        .swiper-pagination {
          bottom: 0px !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #000;
        }
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        .modal-fullscreen {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .poster-swiper {
          width: 100%;
          height: 100%;
        }
        .fullscreen-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .fullscreen-slide img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .gallery {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .gallery-img {
          width: 30%;
          border-radius: 8px;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .click-me-btn {
          background: #ff4757;
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          padding: 8px 18px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
          animation: pulse 1.5s infinite;
        }
        .click-me-btn:hover {
          background: #e84118;
          transform: scale(1.05);
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
        }
        .poster-description {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          text-align: center;
          z-index: 1500;
          max-width: 80%;
        }
        .poster-description h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .poster-description p {
          font-size: 1.2rem;
          line-height: 1.4;
        }

      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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

export default StudyTour
