import React from "react"
import PropTypes from "prop-types"
import Aos from "aos"
import "aos/dist/aos.css";

const BackgroundSection = ({ image, height, children, style }) => {
  React.useEffect(() => {
    Aos .init({ duration: 1000, once: true }); // fade duration: 1s
  }, []);
    return (
    <div
      className="d-flex justify-content-center align-items-center text-white text-center flex-column"
      data-aos="fade-up" data-aos-delay="300"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: height || "400px",
        // Adjust if your navbar height is different
      }}
    >
      <div className="container" data-aos="zoom-in">
        {children}
      </div>
    </div>
  )
}

BackgroundSection.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.string,
  children: PropTypes.node,
}

export default BackgroundSection
