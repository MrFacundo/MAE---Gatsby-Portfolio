import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./style.scss";

export default function Hero() {
  const app = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".line-one", { x: 0, opacity: 1, duration: 1 });
      gsap.to(".line-two", { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-container" data-scroll-section>
      <ul className="hero-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <div ref={app} className="hero-text" id="hero-text">
        <h2
          className="line-one"
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
        >
          Lorem ipsum dolor
        </h2>
        <h2
          className="line-two"
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
