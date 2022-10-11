import React from "react";
import "./style.scss";

import img1 from "../../images/IMG_9806.jpg";

const Text = {
  title: "Sobre mim",
  paragraph1: `O meu nome é Maria Danai Eguiguren e vou-vos contar um pouco mais sobre mim, para quem não me conhece.
  Nasci na Argentina no bairro portenõ de Recoleta onde fui criada, passei a minha infância e grande parte da minha vida.`,
  paragraph2: `Deus, e também com muito interesse em conhecer mais pelo mundo holístico, a mente e com uma grande 
  intuição e sabia que teria que fazer algo nesse sentido. Por outro lado também gostava de ouvir as pessoas que se aproximavam de mim com os seus 
  problemas e me pediam ajuda e com muito amor lhes brindava palavras directas do meu coração para as ajudar.`,
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
