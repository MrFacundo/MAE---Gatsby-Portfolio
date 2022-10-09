import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

import Menu from "../Menu";

export default function Navbar() {
  // State of our Menu
  const [state, setState] = useState({
    clicked: false,
  });
  // Toggle menu
  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
      console.log("1")
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
      console.log("2")

    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      console.log("3")
    }
  };

  return (
    <div className="navbar-container" data-scroll-section>
      <div className="navbar">
          <span onClick={handleMenu}>
            Menu
          {state.clicked && <Menu state={state} />}
          </span>
          
      </div>
    </div>
  );
}
