import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"

import BooksImg1 from "../../assets/images/books/1.jpg"
import BooksImg2 from "../../assets/images/books/2.jpg"
import BooksImg3 from "../../assets/images/books/3.jpg"
import BooksImg4 from "../../assets/images/books/4.jpg"
import BooksImg5 from "../../assets/images/books/5.jpg"
import BooksImg6 from "../../assets/images/books/6.jpg"
import BooksImg7 from "../../assets/images/books/7.jpg"
import BooksImg8 from "../../assets/images/books/8.jpg"
import BooksImg9 from "../../assets/images/books/9.jpg"
import CMEBooks from "../../assets/images/books/cme-book.jpg"

const BooksToSale = () => {
  return (
    <>
      <div className="portfolio-area ptb-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"><Trans>Books CTA</Trans></span>
            <h2><Trans>Books CTA Long</Trans></h2>
            <p>
              <Trans>Discover a comprehensive selection of our course books, ranging from beginner to advanced levels, to enhance your language skills with engaging exercises and cultural insights.</Trans>
            </p>
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
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
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
            {/* <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg1} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg2} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg3} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg4} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg5} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg6} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg7} alt="Books" />
                </div>
              </div>
            </SwiperSlide> */}

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg8} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={BooksImg9} alt="Books" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-portfolio-item">
                <div className="image d-block">
                  <img src={CMEBooks} alt="Books" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default BooksToSale
