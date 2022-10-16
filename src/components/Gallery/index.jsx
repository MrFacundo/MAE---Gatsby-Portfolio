import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";

import image1 from "../../images/atletas.jpg";
import image2 from "../../images/general.jpg";
import image3 from "../../images/limpiezas.jpg";
import image4 from "../../images/registros.jpg";
import image5 from "../../images/metodo.jpg";

import "./style.scss";

const gallery_items = [
  {
    title: "Método de Sanación Asistida",
    subtitle: "",
    excerpt:
      "Creado a partir de diferentes técnicas que he ido aprendiendo a lo largo de mi trayectoria, este método consiste en trabajar en el inconsciente para sanar creencias limitantes (como por ejemplo el no sentirse merecedor, no sentirse valioso, creer que uno no puede), así como resolver conflictos con el dinero, de relaciones laborales, personales, de pareja. También trata dolores físicos, traumas, adicciones, estados de depresión, ansiedad, entre otros. Buscamos convertir las creencias instauradas en creencias potenciadoras que nos ayuden a vivir una vida feliz y en paz.",
    excerpt_mobile:
      "Creado a partir de diferentes técnicas que he ido aprendiendo a lo largo de mi trayectoria, este método consiste en trabajar desde inconsciente para sanar creencias limitantes y convertirlas en creencias potenciadoras que nos ayuden a vivir una vida feliz y en paz.",

    img_src: image5,
  },
  {
    title: "Sanación",
    subtitle: "para Atletas de Alto Rendimiento",
    excerpt:
      "Todos los atletas tienen una meta u objetivo. A través de este método, mi labor consiste en trabajar la concentración, focalizar en la templanza, instruir la mente para obtener mayor tranquilidad en los momentos más críticos.",
    excerpt_mobile:
      "A través del Método de Sanación Asistida buscamos trabajar la concentración, focalizarnos en la templanza e instruir la mente para obtener mayor tranquilidad en los momentos más críticos",
    img_src: image1,
  },
  {
    title: "Sanación Asistida",
    subtitle: "General",
    excerpt:
      "Tratamos de encontrar el conflicto para sanarlo en el inconsciente, aplicando la canalización, don que descubrí hace algunos años y cada vez fue creciendo más y más. Muchas veces nos cuesta hablar o expresarnos y este método nos permite ver más allá e ir a la raíz del conflicto para poder sanar. En el caso de las dolencias físicas, el procedimiento es el mismo: luego de encontrar la raíz que ocasiona el dolor o la sintomatología, sbuscamos sanarla.",
    excerpt_mobile:
      "Mi foco es la raíz del conflicto para sanarlo en el inconsciente, aplicando la canalización, don que descubrí hace algunos años. Cuando encontramos la raíz que ocasiona el dolor o sintomatología, se sana.",
    img_src: image2,
  },
  {
    title: "Limpezas Energéticas",
    subtitle: "y Péndulo Hebreo",
    excerpt:
      " ¿Como darnos cuenta si necesitamos una limpieza energética? Muchas veces en la vida empezamos a sentir que las cosas se estancan, que no fluyen como nos gustarían, que nos vinculamos con gente que no es positiva y atraemos situaciones o personas que no nos agradan. Esto puede significar la necesidad de una limpieza energética, que realizada desde el amor y la experiencia, nos haga volver a sentirnos nosotros mismos, bien, y que logre hacer que todo fluya nuevamente.",
    excerpt_mobile:
      "Muchas veces nos ocurre que empezamos a sentir que las cosas se estancan, que no fluyen como nos gustarían. Es aquí cuando necesitamos una limpieza energética para volver a sentirnos nosotros mismos.",
    img_src: image3,
  },
  {
    title: "Registros",
    subtitle: "Akáshicos",
    excerpt:
      "Los Registros Akáshicos son una memoria universal de la existencia. Representan un espacio multidimensional dónde se “guardan” todas las experiencias del alma, que incluyen todos los conocimientos y experiencias de las vidas pasadas, la vida presente y las potencialidades futuras. A través de una lectura de Registros Akáshicos podemos comprender la realidad de una manera mucho más profunda y sanadora.",
    excerpt_mobile:
      "Los Registros Akáshicos son una memoria universal de la existencia. Representan un espacio dónde se “guardan” todas las experiencias y conocimientos del alma, de las vidas pasadas, la presente y las potencialidades futuras. A través de los registros akáshicos lectura podemos comprender la realidad de una manera profunda y sanadora.",
    img_src: image4,
  },
];
function GalleryItem({
  img_src,
  excerpt,
  excerpt_mobile,
  subtitle,
  title,
  updateActiveItem,
  index,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveItem(index);
    }
  }, [onScreen, index, updateActiveItem]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <div className="gallery-item-heading">
            <h1 className="gallery-info-title">{title}</h1>
            <h2 className="gallery-info-subtitle">{subtitle}</h2>
          </div>
          <p className="gallery-info-excerpt">
            {isMobile ? excerpt_mobile : excerpt}
          </p>
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

export default function Gallery() {
  const [activeItem, setActiveImage] = useState(1);

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

  const handleUpdateActiveItem = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeItem}</span>
          <span className="divider" />
          <span>{gallery_items.length}</span>
        </div>
        {gallery_items.map((item, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...item}
            updateActiveItem={handleUpdateActiveItem}
          />
        ))}
      </div>
    </section>
  );
}
