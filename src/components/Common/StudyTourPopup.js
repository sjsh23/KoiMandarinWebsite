import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import poster1 from "../../assets/images/study-tour/koiWinterPoster2025.png"

const StudyTourPopup = () => {
  const [visible, setVisible] = useState(false)

  // Show popup 3s after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  const handleClick = () => {
    // Redirect to StudyTour page and pass state
    navigate("/services/study-tour", {
      state: { selectedTourId: 2 }, // <-- match tour.id in your StudyTour page
    })
  }

  return (
    <div className="popup-backdrop">
      <div className="popup-content">
        <button className="close-btn" onClick={() => setVisible(false)}>✕</button>
        <img
          src={poster1}
          alt="Study Tour Poster"
          onClick={handleClick}
          className="popup-img"
        />
      </div>

      <style jsx>{`
        .popup-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }
        .popup-content {
          position: relative;
          background: #fff;
          padding: 1rem;
          border-radius: 12px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          cursor: pointer;
        }
        .popup-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          border: none;
          background: none;
          font-size: 1.2rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default StudyTourPopup
