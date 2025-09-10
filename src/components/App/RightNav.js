import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const RightNav = ({ scrollStepInPx, delayInMs }) => {
  const timeoutRef = React.useRef(null)

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current)
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx)
  }

  const scrollToTop = (e) => {
    e.preventDefault()
    timeoutRef.current = setInterval(onScrollStep, delayInMs)
  }

  const { t } = useTranslation()

  return (
    <>
      <div className="right-nav">
        <a href="https://wa.me/6282210886629"
          className="icon" target="_blank" rel="noreferrer"
          title={t('Send a message')}
        ><i className="bx bxl-whatsapp"></i></a>
        <a href="https://wa.me/6282210886629?text=Hello%2C%20I%E2%80%99d%20like%20to%20join%21"
          className="icon" target="_blank" rel="noreferrer"
          title={t('Schedule a class')}
        ><i className="bx bx-calendar"></i></a>
        <a href="https://www.instagram.com/koi_mandarin"
          className="icon" target="_blank" rel="noreferrer"
          title={t('Visit Instagram Profile')}
        ><i className="bx bxl-instagram"></i></a>
        <a href="#" onClick={scrollToTop}
          className="icon"
          title={t('Back to top')}
        ><i className="bx bx-arrow-to-top"></i></a>
      </div>
    </>
  )
}

export default RightNav
