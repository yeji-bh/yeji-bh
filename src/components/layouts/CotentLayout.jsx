import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../templates/Header"
import Footer from "../templates/Footer"

const ContentLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ContentLayout