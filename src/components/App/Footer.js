import React from "react"
import { Link } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import WhiteLogo from "../../assets/images/logo-white.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-footer-widget">
                <Link to="/" className="logo">
                  <img src={WhiteLogo} alt="logo" />
                </Link>
                <p><Trans>About Desc</Trans></p>

                <ul className="social-link">
                  <li>
                    <a
                      href="https://www.instagram.com/koi_mandarin"
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

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-footer-widget pl-5">
                <h3><Trans>Explore</Trans></h3>

                <ul className="footer-links-list">
                  <li>
                    <Link to="/"><Trans>Home</Trans></Link>
                  </li>
                  <li>
                    <Link to="/about-us"><Trans>About Us</Trans></Link>
                  </li>
                  <li>
                    <Link to="/teachers"><Trans>Teachers</Trans></Link>
                  </li>
                  <li>
                    <Link to="/services"><Trans>Services</Trans></Link>
                  </li>
                  <li>
                    <Link to="/contact"><Trans>Contact</Trans></Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-footer-widget">
                <h3><Trans>Address</Trans></h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    Rukan Ekslusif Bukit Golf Mediterania Blok G no 39, RT.7/RW.2, Kamal Muara, Jakarta Utara, Daerah Khusus Ibukota Jakarta
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+6282210886629">(+62) 822 - 1088 - 6629</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:admin@koi-mandarin.com">admin@koi-mandarin.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} <strong><Trans>KOI Mandarin Education</Trans></strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape16">
          <img src={Shape16} alt="Shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
