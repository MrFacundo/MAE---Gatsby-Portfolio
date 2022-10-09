import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./style.scss";

export default function Loader() {
  const loader = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#container", { scale: 1, duration: 1, duration: 1 });
      gsap.to("#overlay", { opacity: 1, delay: 1, duration: 1 });
    }, loader);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={loader}>
      <div id="overlay" className="overlay absolute"></div>
      <div id="container" className="loader-container absolute">
      </div>
    </div>
  );
}
