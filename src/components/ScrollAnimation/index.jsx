import React from "react";
import "./style.scss";

const ScrollAnimation = React.forwardRef((props, scrollAnimation) => (
  <a
    ref={scrollAnimation}
    className="scroll-animation"
    href="#intro"
    data-scroll-to
  >
    <div className="scroll-down">
      <div className="scroll-down-text"></div>
      <svg className="circle" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse
            className="background"
            ry="45"
            rx="45"
            cy="62.5"
            cx="62.5"
            strokeWidth="1"
          />
          <ellipse
            className="foreground"
            ry="45"
            rx="45"
            cy="62.5"
            cx="62.5"
            strokeWidth="2"
          />
        </g>
      </svg>
      <div className="scroll-down-bar"></div>
    </div>
  </a>
));

export default ScrollAnimation;
