import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isMobile } from "react-device-detect";



import "./style.scss";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section" data-scroll-section>
      <div className="testimonials-container">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <h6 className="testimonial-one" data-scroll data-scroll-speed={isMobile ? 0.6 : 1}>{t("testimonial_1")}
          
        </h6>
        <div className="testimonials-column">
          <div className="testimonials-row">
            <h6 className="testimonial-two" data-scroll>{t("testimonial_2")}
              
            </h6>
          </div>
          <div className="testimonials-row">
            <h6 className="testimonial-three" data-scroll>{t("testimonial_3")}
           
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
