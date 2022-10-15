import React from "react";

// import { FaInstagram, FaFacebook, FaLinkedin, FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCoins, faDice } from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon icon={faBus} />
            </span>
            <span className="tooltip">
              <FontAwesomeIcon icon={faCoins} />
              <span>Muy pronto!</span>
            </span>
            <span className="tooltip">
              <FontAwesomeIcon icon={faDice} />
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
    </section>
  );
}
