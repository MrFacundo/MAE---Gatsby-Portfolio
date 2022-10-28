import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

import "./style.scss";
import gallery_items from "../../data";

function GalleryItemMobile({
  img_src_mobile,
  excerpt_mobile,
  subtitle,
  title,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  const { t } = useTranslation();

  return (
    <div
      className={cn("gallery-item-wrapper-mobile", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div className="gallery-item-mobile">
        <div className="gallery-item-heading-mobile">
          <h1 className="gallery-info-title-mobile">{t(title)}</h1>
          <h2 className="gallery-info-subtitle-mobile">{t(subtitle)}</h2>
        </div>
        <div className="gallery__image-text-wrapper">
          <img src={img_src_mobile} alt="{t(title)}" className="gallery-item-image-mobile"/>
          <p className="gallery-info-excerpt-mobile">{t(excerpt_mobile)}</p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryMobile() {
  const ref = useRef(null);

  return (
    <section
      data-scroll-section
      className="section-wrapper gallery-wrap-mobile"
    >
      <div className="gallery-mobile" ref={ref}>
        {gallery_items.map((item) => (
          <GalleryItemMobile key={item.img_src} {...item} />
        ))}
      </div>
    </section>
  );
}
