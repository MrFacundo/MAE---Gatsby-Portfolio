import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import "./style.scss";
import gallery_items from "../../data"


function GalleryItemMobile({
  img_src,
  img_src_mobile,
  excerpt_mobile,
  subtitle,
  title,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  return (
    <div
      className={cn("gallery-item-wrapper-mobile", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div className="gallery-item-mobile">
        <div className="gallery-item-heading-mobile">
          <h1 className="gallery-info-title-mobile">{title}</h1>
          <h2 className="gallery-info-subtitle-mobile">{subtitle}</h2>
        </div>
        <div
          className="gallery-item-image-mobile"
          style={{
            backgroundImage:
              img_src_mobile
                ? `url(${img_src_mobile})`
                : `url(${img_src})`,
          }}
        ></div>
        <p className="gallery-info-excerpt-mobile">
          {excerpt_mobile}
        </p>
      </div>
    </div>
  );
}

export default function GalleryMobile() {
  const ref = useRef(null);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap-mobile">
      <div className="gallery-mobile" ref={ref}>
        {gallery_items.map((item) => (
          <GalleryItemMobile key={item.img_src} {...item} />
        ))}
      </div>
    </section>
  );
}