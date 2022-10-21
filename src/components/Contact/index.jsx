import React from "react";

// import { FaInstagram, FaFacebook, FaLinkedin, FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo2primary.png";

import "./style.scss";

export default function Contact() {
  return (
    <section className="contact-section" data-scroll-section>
      <div className="left-column">
        <div className="contact__title">
          <h1>Contactos</h1>
        </div>
        <div className="row">
          <span className="tooltip">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/danai.eguiguren/"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
          <span className="tooltip">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Muy pronto!</span>
          </span>
          <span className="tooltip">
            <FontAwesomeIcon icon={faYoutube} />
            <span>Muy pronto!</span>
          </span>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact__contacts">
          <div className="contacts__email">
            <span className="email-title">Email: </span>
            <p className="email-content">info@mariadanaieguiguren.com</p>
          </div>
          <div className="contacts__phone">
            <span className="phone-title">Teléfono </span>
            <p className="phone-content">+351 913 547 520</p>
          </div>
          <div className="contacts__address">
            <span className="address-title">Dirección: </span>
            <p className="address-content">Paço de Arcos, Lisboa</p>
          </div>
        </div>
        {/* <div className="form">Contact form</div>
        <div className="links">links</div> */}
      </div>
      <div className="contact__logo">
        <img className="contact__logo-img" src={logo} alt="" />
        <p className="contact__logo-text">Sanación Asistida</p>
      </div>
    </section>
  );
}
