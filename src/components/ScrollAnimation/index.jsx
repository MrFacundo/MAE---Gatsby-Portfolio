import { useEffect, useState } from "react";
import React from "react";
import "./style.scss";

const ScrollAnimation = () => {


  return (
    <div id="mouse-scroll">
      <div id="mouse"></div>
      <div className="scroll-bars">
        <div className="scroll-bar"></div>
        <div className="scroll-bar"></div>
        <div className="scroll-bar"></div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
