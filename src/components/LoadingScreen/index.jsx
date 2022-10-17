import React from "react";
import "./style.scss";
import logo from "../../images/logo2primary.png";


const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="contact__logo">
        <img className="contact__logo-img" src={logo} alt="" />
        <p className="contact__logo-text">Sanación Asistida</p>
      </div>
      <p className="loading-screen__text">Cargando...</p>
    </div>
  );
};

export default LoadingScreen;
