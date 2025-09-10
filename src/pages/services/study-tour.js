import React, { useState } from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../../components/App/Layout"
import SEO from "../../components/App/SEO"
import Navbar from "../../components/App/Navbar"
import Footer from "../../components/App/Footer"
import BackgroundSection from "../../components/Common/BackgroundSection"

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

const studyTours = [
  {
    id: 1,
    title: "Tianjin 2024",
    img: poster1,
    description: "Amazing study tour in Beijing 2024 with cultural and educational experiences.",
    gallery: [tianjin1, tianjin2, tianjin3, tianjin10, tianjin5, tianjin14, tianjin7, tianjin8, tianjin9, tianjin4, tianjin11, tianjin12, tianjin13, tianjin6, tianjin15], // more photos
  },
  // {
  //   id: 2,
  //   title: "Shanghai Experience",
  //   img: Stars2,
  //   description: "Explore Shanghai’s modern and traditional blend with this study tour.",
  //   gallery: [Stars2, Stars4, Stars5],
  // },
  // {
  //   id: 3,
  //   title: "Tokyo 2025",
  //   img: Stars3,
  //   description: "Immerse in Japan’s education system and culture.",
  //   gallery: [Stars3, Stars1, Stars4],
  // },
]

const StudyTour = () => {
  const { t } = useTranslation()
  const [selectedTour, setSelectedTour] = useState(null)

  const title = `${t("Services")} - ${t("OurServices StudyTour CTA")}`

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
          <div className="modal-content">
            <button
              className="close-btn"
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
        </div>
      )}

      <Footer />

      {/* Minimal CSS */}
      <style jsx>{`
      .studyTour-swiper {
          position: relative;
          padding-bottom: 40px; /* give room for dots */
        }
        .swiper-pagination {
          bottom: 0px !important; /* keep dots below image */
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #000; /* arrows color */
        }
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
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
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          background: none;
          font-size: 1.5rem;
          cursor: pointer;
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
