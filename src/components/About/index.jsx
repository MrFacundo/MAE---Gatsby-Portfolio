import React from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "gatsby-plugin-react-i18next";

import img1 from "../../images/IMG_9806.jpg";
import "./style.scss";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { t } = useTranslation();

  return (
    <section id="fixed-target" className="about-section" data-scroll-section>
      <h1
        className="about__title"
        data-scroll
        data-scroll-speed="-0.3"
        data-scroll-direction="horizontal"
      >
        {t("about_title")}
      </h1>
      <div
        className="about__text"
        data-scroll
        // data-scroll-speed="-1"
        data-scroll-target="#fixed-target"
      >
        <p>{t("about_paragraph_1")}</p>
        <br />
        <p>{t("about_paragraph_2")}</p>
      </div>
      <div className="about__image">
        <img
          data-scroll
          data-scroll-speed={isMobile ? 0.1 : -1.5}
          data-scroll-target="#fixed-target"
          src={img1}
          alt="About Us"
          className="about_image-1"
        />
      </div>
    </section>
  );
};

export default About;
