import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function Intro() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.to(".intro__line", {
        duration: 3,
        opacity: 1,
        stagger: 0.5,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  return (
    <section id="intro" className="intro__section" data-scroll-section>
      <p ref={ref} className="intro__text">
        <span className="intro__line">Hazte consciente,</span>
        <br />
        <span className="intro__line">vive, </span>
        <span className="intro__line">trasciende. </span>
        <span className="intro__line">Conquista tus metas.</span>
      </p>
    </section>
  );
}
