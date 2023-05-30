import React from "react"
import Header from "../templates/Header"

const ContentLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default ContentLayout