import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import logo from "../images/IMG_9808.jpg"
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Description from "../components/Description";
import Gallery from "../components/Gallery";
import About from "../components/About";



import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";

const Home = () => {
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

  const [timer, setTimer] = React.useState(2);

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
          <Navbar />
          <Hero />
          {/* <img src={logo} alt="Logo" /> */}

          {/* <Featured /> */}
          <Description />
          <Gallery />
          <About />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
