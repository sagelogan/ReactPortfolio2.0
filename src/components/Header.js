import React from "react"
import Typer from "react-typed";
const Header = () => {
    return (
      <div className="header-wrapper">
          <div className="main-info">
            <h1>Logan Sage</h1>
            <Typer className="typed-text" strings={["Web Design","Web Development","Video Production","Video Editing", "Event Production"]} typeSpeed={40} backSpeed={60} loop/>
            <a href="#" className="btn-main-offer">contact me</a>
          </div>
      </div>
    )
}

export default Header
