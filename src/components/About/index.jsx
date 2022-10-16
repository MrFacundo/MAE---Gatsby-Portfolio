import React from "react";
import "./style.scss";
import { useMediaQuery } from "react-responsive";

import img1 from "../../images/IMG_9806.jpg";

const Text = {
  title: "Sobre mí",
  paragraph1: `Mi nombre es Maria Danai Eguiguren. Nací en Argentina, en el barrio porteño de Recoleta.`,
  paragraph2: `Mi vida, como la vida de millones de personas no fue una vida fácil a nivel emocional. Tuve que desaprender y re-aprender muchas cosas nuevas, deshacerme de creencias que me limitaban y no me dejaban ver con claridad y convertirlas en creencias potenciadoras que me ayuden a vivir una vida mas feliz y en paz.`,
};

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section id="fixed-target" className="about-section" data-scroll-section>
      <h1
        className="about__title"
        data-scroll
        data-scroll-speed="-0.8"
        data-scroll-direction="horizontal"
      >
        {Text.title}
      </h1>
      <div
        className="about__text"
        data-scroll
        data-scroll-speed="-1.5"
        data-scroll-target="#fixed-target"
      >
        <p> {Text.paragraph1}</p>
        <br />
        <p> {Text.paragraph2}</p>
        <br />
        <p> {Text.paragraph3}</p>
      </div>
      <div className="about__image">
        <img
          data-scroll
          data-scroll-speed={isMobile ? 0.2 : -1.5}
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
