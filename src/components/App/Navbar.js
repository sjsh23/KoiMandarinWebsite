import React, { useState } from "react"
import { Link } from "gatsby"
import { Link as TransLink, Trans, useI18next } from "gatsby-plugin-react-i18next"

import Logo from "../../assets/images/logo.png"
import whiteLogo from "../../assets/images/logo-white.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)
  const { language, languages, originalPath } = useI18next()

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false")
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="logo" className="main-logo" />
                <img src={whiteLogo} alt="logo" className="white-logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      <Trans>Home</Trans>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      <Trans>About Us</Trans> <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          <Trans>About Us</Trans>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/teachers"
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          <Trans>Teachers</Trans>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="/services"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      <Trans>Services</Trans>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      <Trans>Services</Trans> <i className="bx bx-chevron-down"></i>
                    </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/services/mandarin-course"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            <Trans>Mandarin Course</Trans>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/services/online-course"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            <Trans>Online Class</Trans>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/services/study-abroad"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            <Trans>Study Abroad</Trans>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/services/study-tour"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            <Trans>Study Tour</Trans>
                          </Link>
                        </li>
                        
                      </ul>
                    </li>


                  <li className="nav-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={toggleNavbar}
                      className="nav-link"
                    >
                      <Trans>Contact</Trans>
                    </Link>
                  </li>

                  <li className="nav-item">
                      <Link
                        to="/register"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        <Trans>Register</Trans>
                      </Link>
                    </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      <Trans>{language.toUpperCase()}</Trans>
                    </Link>
                    
                    

                    <ul className="dropdown-menu">
                    {languages.map((lng) => (
                      <li key={lng} className="nav-item">
                        <TransLink
                          to={originalPath}
                          language={lng}
                          activeClassName="active"
                          onClick={toggleNavbar}
                          className="nav-link"
                        >
                          <Trans>{lng.toUpperCase()}</Trans>
                        </TransLink>
                      </li>
                    ))}
                    </ul>
                    
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
