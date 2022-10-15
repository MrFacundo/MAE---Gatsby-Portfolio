import React from "react";

// import { FaInstagram, FaFacebook, FaLinkedin, FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo2primary.png";

import "./style.scss";

export default function Contact() {
  return (
    <section className="contact-section" data-scroll-section>
      <div className="left-column">
        <div className="section-title">
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
        <div className="contact">
          <div className="email">
            <span className="email-title">Email: </span>
            <p className="email-content">info@mariadanaieguiguren.com</p>
          </div>
          <div className="phone">
            <span className="phone-title">Phone: </span>
            <p className="phone-content">+351 913 547 520</p>
          </div>
          <div className="address">
            <span className="address-title">Address: </span>
            <p className="address-content">
              Amager Strandvej 112G 5. tv 2300 København S CVR: 34106185
            </p>
          </div>
        </div>
        {/* <div className="form">Contact form</div>
        <div className="links">links</div> */}
      </div>
      <img className="contact__logo" src={logo} alt="" />
    </section>
  );
}
