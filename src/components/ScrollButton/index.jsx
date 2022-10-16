import React from 'react'
import "./style.scss";

const ScrollButton = () => {
  return (
    <div id="mouse-scroll">
    <div id="mouse"></div>
    <div className="scroll-bars">
      <div className="scroll-bar"></div>
      <div className="scroll-bar"></div>
      <div className="scroll-bar"></div>
    </div>
  </div>
  )
}

export default ScrollButton