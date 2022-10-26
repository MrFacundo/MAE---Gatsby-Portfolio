import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "gatsby-plugin-react-i18next";

import ScrollAnimation from "../ScrollAnimation";
import ScrollAnimationMobile from "../ScrollAnimationMobile";
import LangSwitcher from "../LanguageSwitcher";

import logo from "../../images/logo2primary.png";
import "./style.scss";

export default function Hero() {
  const { t } = useTranslation();

  const heroText = useRef();
  const tl = useRef();
  const scrollAnimation = useRef();
  const scrollAnimationMobile = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".top", { opacity: 1, duration: 2 })
        .to(".line", { opacity: 1, duration: 2 }, 0.75)
        .to(".hero__logo", { opacity: 1, duration: 2 }, 1.5);

      if (isMobile) {
        tl.current.to(
          scrollAnimationMobile.current,
          { opacity: 1, duration: 1 },
          2.5
        );
      } else {
        tl.current.to(
          scrollAnimation.current,
          { opacity: 1, duration: 1 },
          2.5
        );
      }
    }, heroText);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="hero" className="hero-container" data-scroll-section>
        {isMobile && <LangSwitcher />}
        <div className="overlay absolute"></div>
        <div ref={heroText} className="hero__text" id="hero-text">
          <h2 className="top">{t("hero_title_top")}</h2>
          <div>
            <h2
              className="line one"
              data-scroll
              data-scroll-speed={isMobile ? -0.5 : -2}
              data-scroll-direction="horizontal"
            >
              {t("hero_title_scroll_1")}
            </h2>
            <h2
              className="line two"
              data-scroll
              data-scroll-speed={isMobile ? 0.5 : 1}
              data-scroll-direction="horizontal"
            >
              {t("hero_title_scroll_2")}
            </h2>
            <h2
              className="line three"
              data-scroll
              data-scroll-speed="-0.5"
              data-scroll-direction="horizontal"
            >
              {t("hero_title_scroll_3")}
            </h2>
            <img className="hero__logo" src={logo} alt="" />
          </div>
        </div>
        <MobileView>
          <ScrollAnimationMobile ref={scrollAnimationMobile} />
        </MobileView>
        <BrowserView>
          <ScrollAnimation
            scrollTo="#intro"
            theme="light"
            position="right"
            ref={scrollAnimation}
          />
        </BrowserView>
      </section>
    </>
  );
}
