import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

import logo from "../../images/logo2primary.png";
import "./style.scss";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section" data-scroll-section>
      <div className="left-column">
        <div className="contact__title">
          <h1>{t("contact_title")}</h1>
        </div>
        <div className="row">
          <span className="tooltip">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/danai.eguiguren/"
              aria-label="Instagram"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
          <span className="tooltip">
            <FontAwesomeIcon icon={faFacebook} />
            <span>{t("contact_tooltip")}</span>
          </span>
          <span className="tooltip">
            <FontAwesomeIcon icon={faYoutube} />
            <span>{t("contact_tooltip")}</span>
          </span>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact__contacts">
          <div className="contacts__email">
            <span className="email-title">Email: </span>
            <p className="email-content">info@mariadanaieguiguren.com</p>
          </div>
          <div className="contacts__whatsapp">
            {isMobile && (
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/00351913547520"
              >
                 <FontAwesomeIcon icon={faWhatsapp} /> <span>WhatsApp </span>
              </a>
            )}
          </div>

          <div className="contacts__phone">
            <span className="phone-title">{t("contact_phone")}</span>
            <p className="phone-content">+351 913 547 520</p>
          </div>
          <div className="contacts__address">
            <span className="address-title">{t("contact_address")}</span>
            <p className="address-content">Paço de Arcos, Lisboa</p>
          </div>
        </div>
        {/* <div className="form">Contact form</div>
        <div className="links">links</div> */}
      </div>
      <div className="contact__logo">
        <img className="contact__logo-img" src={logo} alt="" />
        <p className="contact__logo-text">{t("contact_logo_text")}</p>
      </div>
    </section>
  );
}
