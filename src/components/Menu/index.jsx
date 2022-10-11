import React, { forwardRef } from "react";
import "./style.scss";


const Menu = forwardRef(({ state }, ref) => {
  return (
    <div ref={ref} className="menu">
      <li>
        <span className="item">
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
});

export default Menu;
