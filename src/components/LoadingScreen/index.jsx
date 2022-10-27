import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import logo from "../../images/logo2primary.png";
import "./style.scss";

const LoadingScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="loading-screen">
      <h2 className="loading-screen__top-title">{t("hero_title_top")}</h2>
      <div className="contact__logo">
        <img className="contact__logo-img" src={logo} alt="" />
        <p className="contact__logo-text">{t("loading_title")}</p>
      </div>
      <div className="loading-screen__text-container">
        <span className="loading-screen__text">{t("loading_loading")}</span>
        <div className="stage">
          <div className="dot-typing"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
