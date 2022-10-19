import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.scss";
import cn from "classnames";

export default function Loader({show}) {
  const loader = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#container", { opacity: 1, duration: 0.5 });
      gsap.to("#container", { scale: 1, duration: 1 });
      gsap.to("#overlay", { opacity: 1, delay: 1, duration: 2 });
    }, loader);

    return () => ctx.revert();
  }, []);
  console.log(show)
  return (
    <div
      className={cn("container", { "hidden": !show })}
      ref={loader}
    >
      <div id="container" className="loader-container absolute">
        <div id="overlay" className="overlay absolute"></div>
        <div className="overlay-overlay absolute">
          <div className="up"></div>
          <div className="down"> </div>
        </div>
      </div>
    </div>
  );
}
