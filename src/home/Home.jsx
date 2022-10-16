import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import { useScrollPositions } from "../hooks/useScrollPositions";
import "../styles/home.scss";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {

  // const { scrollX, scrollY } = useScrollPositions();
  // console.log(scrollY);

  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          {/* <Navbar /> */}
          <ScrollAnimation />
          <Hero />
          {/* <img src={logo} alt="Logo" /> */}

          {/* <Featured /> */}
          <Intro />
          <Gallery />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
