import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";
import { isMobile } from "react-device-detect";
import { useTranslation } from "gatsby-plugin-react-i18next";

import ScrollAnimation from "../ScrollAnimation";

import "./style.scss";

export default function Intro() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const scrollAnimation = useRef();

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

      ! isMobile && gsap.to(scrollAnimation.current, { opacity: 1, duration: 1, delay: 3 });

    }
  }, [reveal]);

  return (
    <section id="intro" className="intro__section" data-scroll-section>
      <p ref={ref} className="intro__text">
        <span className="intro__line">{t("intro_line_1")}</span>
        <br />
        <span className="intro__line">{t("intro_line_2")}</span>
        <span className="intro__line">{t("intro_line_3")}</span>
        <span className="intro__line">{t("intro_line_4")}</span>
      </p>
      {!isMobile && <ScrollAnimation scrollTo="#gallery" position="left" theme='dark' ref={scrollAnimation} />}
    </section>
  );
}
