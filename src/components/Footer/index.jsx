import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import gsap from "gsap";
import cn from "classnames";

import "./style.scss";

export default function Footer() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      gsap.fromTo(
        "#made-by-text",
        { y: 30 },
        {
          duration: 1,
          y: 0,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>
      <div className="footer__container">
        <p className="footer__copyright">© 2022 Maria Danai Eguiguren</p>
        <p
          className={cn("footer__made-by", { "is-reveal": reveal })}
          id="made-by-text"
          ref={ref}
        >
          Made with 🤍 by <a href="https://mrfacundo.github.io/portfolio/"  target="_blank" rel="noopener noreferrer">MrFacundo</a>
        </p>
      </div>
    </section>
  );
}
