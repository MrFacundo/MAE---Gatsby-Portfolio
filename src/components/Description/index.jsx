import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function Description() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.3,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("description-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Short description of the site. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Totam repudiandae accusantium fugit obcaecati ut
      </p>
    </section>
  );
}
