import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GalleryItem from "../GalleryItem";
import gallery_items from "../../data"

import "./style.scss";



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

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div
        className="gallery"
        style={{ height: (0.9 * windowSize.innerHeight)  }}
        ref={ref}
      >
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

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
