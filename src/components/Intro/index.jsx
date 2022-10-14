import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

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

      gsap.to(".intro-line", {
        duration: 2,
        opacity: 1,
        stagger: 0.7,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  return (
    <section
      className="intro-section"
      data-scroll-section
    >
      <p ref={ref} className="intro-text">
        <span className="intro-line">Hazte consciente,</span>
        <span className="intro-line">vive, </span>
        <span className="intro-line">trasciende. </span>
        <span className="intro-line">Conquista tus metas.</span>
      </p>
    </section>
  );
}
