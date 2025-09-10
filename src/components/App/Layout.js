import React from "react"
import AOS from "aos"
import RightNav from "./RightNav"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
      {children}

      <RightNav />
    </>
  )
}

export default Layout
