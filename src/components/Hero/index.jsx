import React, { useEffect, useRef, useState } from "react";

import "./style.scss";

export default function Hero() {
  return (
    <section className="hero-container" data-scroll-section>
      <ul className="hero-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <div className="hero-text" id="hero-text">
        <h2
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
        >
          Lorem ipsum dolor
        </h2>
        <h2
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
        >
          amet consectetur adipisicing.
        </h2>
      </div>
    </section>
  );
}
