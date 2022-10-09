import React, { useRef, useEffect } from "react";
import "./style.scss";

import { gsap } from "gsap";

const Menu = ({ state }) => {
  return (
    <div className="menu">
      <li>
        <span className="item" to="/opportunities">
          Services
        </span>
      </li>
      <li>
        <span to="/solutions">About</span>
      </li>
      <li>
        <span to="/contact-us">Contact</span>
      </li>
    </div>
  );
};

export default Menu;
