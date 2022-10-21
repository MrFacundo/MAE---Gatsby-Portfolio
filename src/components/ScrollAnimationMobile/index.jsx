import React from "react";
import "./style.scss";

const ScrollAnimationMobile = React.forwardRef((props, scrollAnimationMobile) => (
  <div ref={scrollAnimationMobile} className="scroll-animation">
    <div className="scroll-down">
      <div className="scroll-down-text"></div>
      <div className="scroll-down-bar"></div>
    </div>
  </div>
));

export default ScrollAnimationMobile;
