import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import image1 from '../../images/atletas.jpg'
import image2 from '../../images/general.jpg'
import image3 from '../../images/limpiezas.jpg'
import image4 from '../../images/registros.jpg'
import image5 from '../../images/metodo.jpg'

import "./style.scss";

const images = [
  {
    title: "Método de Sanación Asistida",
    subtitle: "",
    excerpt: "Creado a partir de diferentes técnicas que he ido aprendiendo a lo largo de mi trayectoria, este método consiste en trabajar en el inconsciente para sanar creencias limitantes (como por ejemplo el no sentirse merecedor, no sentirse valioso, creer que uno no puede), así como resolver conflictos con el dinero, de relaciones laborales, personales, de pareja. También trata dolores físicos, traumas, adicciones, estados de depresión, ansiedad, entre otros. Buscamos convertir las creencias instauradas en creencias potenciadoras que nos ayuden a vivir una vida feliz y en paz.",
    img_src: image5,
  },
  {
    title: "Sanación Asistida",
    subtitle: "en Atletas de Alto Rendimiento",
    excerpt: "Todos los atletas tienen una meta u objetivo. A través de este método, mi labor consiste en trabajar la concentración, focalizar en la templanza, instruir la mente para obtener mayor tranquilidad en los momentos más críticos.",
    img_src: image1,
  },
  {
    title: "Sanación Asistida",
    subtitle: "General",
    excerpt: "Tratamos de encontrar el conflicto para sanarlo en el inconsciente, aplicando la canalización, don que descubrí hace algunos años y cada vez fue creciendo más y más. Muchas veces nos cuesta hablar o expresarnos y este método nos permite ver más allá e ir a la raíz del conflicto para poder sanar. En el caso de las dolencias físicas, el procedimiento es el mismo: luego de encontrar la raíz que ocasiona el dolor o la sintomatología, sbuscamos sanarla.",
    img_src: image2,
  },
  {
    title: "Limpezas Energéticas",
    subtitle: "y Péndulo Hebreo",
    excerpt: " ¿Como darnos cuenta si necesitamos una limpieza energética? Muchas veces en la vida empezamos a sentir que las cosas se estancan, que no fluyen como nos gustarían, que nos vinculamos con gente que no es positiva y atraemos situaciones o personas que no nos agradan. Esto puede significar la necesidad de una limpieza energética, que realizada desde el amor y la experiencia, nos haga volver a sentirnos nosotros mismos, bien, y que logre hacer que todo fluya nuevamente.",
    img_src: image3,
  },
  {
    title: "Registros",
    subtitle: "Akáshicos",
    excerpt: "Los Registros Akáshicos son una memoria universal de la existencia, y representan un espacio multidimensional dónde se “guardan” todas las experiencias del alma, que incluyen todos los conocimientos y  experiencias de las vidas pasadas, la vida presente y las potencialidades futuras. A través de una lectura de Registros Akáshicos podemos comprender la realidad de una manera mucho más profunda y sanadora.",
    img_src: image4,
  },
];
function GalleryItem({
  img_src,
  excerpt,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-excerpt">{excerpt}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${img_src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ img_src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
