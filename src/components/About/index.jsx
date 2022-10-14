import React from "react";
import "./style.scss";

import img1 from "../../images/IMG_9806.jpg";

const Text = {
  title: "Sobre mí",
  paragraph1: `Mi nombre es Maria Danai Eguiguren y me gustaría contarles un poco acerca de mi para los que no me conocen, puedan hacerlo. Nací en Argentina, en el barrio porteño de Recoleta donde me crié y pasé mi infancia y gran parte de mi vida.`,
  paragraph2: `Mi vida, como la vida de millones de personas no fue una vida fácil a nivel emocional. Tuve que desaprender y re-aprender muchas cosas nuevas, deshacerme de creencias que me limitaban y no me dejaban ver con claridad y convertirlas en creencias potenciadoras que me ayuden a vivir una vida mas feliz y en paz.`,
  paragraph3: `Todo este camino fue un camino maravilloso por el que yo transcurrí y caminé durante años hasta poder llegar hoy a donde estoy, y así sigo aprendiendo siempre y cada día mas, dando gracias por las vivencias que tuve, gracias por el aprendizaje.`,

};

const About = () => {
  return (
    <div id="fixed-target" className="about" data-scroll-section>
      <h1
        className="title"
        data-scroll
        data-scroll-speed="-0.8"
        data-scroll-direction="horizontal"
      >
        {Text.title}
      </h1>
      <div
        className="left"
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
      <div className="right">
        <img
          data-scroll
          data-scroll-speed="-1.5"
          data-scroll-target="#fixed-target"
          src={img1}
          alt="About Us"
          className="small-img-2"
          
        />
      </div>
    </div>
  );
};

export default About;
