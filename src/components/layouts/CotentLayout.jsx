import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../templates/Header"

const ContentLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default ContentLayout