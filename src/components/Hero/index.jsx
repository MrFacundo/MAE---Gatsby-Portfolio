import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./style.scss";

export default function Hero() {
  const app = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".top", { opacity: 1, duration: 1.5 });
      gsap.to(".line",{ opacity: 1, duration: 1.5, delay: 0.7  });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="hero-container" data-scroll-section>
        <div className="overlay absolute"></div>
        <div ref={app} className="hero-text" id="hero-text">
          <h2 className="top">Maria Danai Eguiguren</h2>
          <div>
            <h2
              className="line one"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="horizontal"
            >
              Método de 
            </h2>
            <h2
              className="line two"
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="horizontal"
            >
              Sanación 
            </h2>
            <h2
              className="line three"
              data-scroll
              data-scroll-speed="-0.5"
              data-scroll-direction="horizontal"
            >
               Asistida
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
