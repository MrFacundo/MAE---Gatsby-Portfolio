import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { useMediaQuery } from "react-responsive";
import "./style.scss";


export default function GalleryItem({
    img_src,
    img_src_mobile,
    excerpt,
    excerpt_mobile,
    subtitle,
    title,
    updateActiveItem,
    index,
  }) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const ref = useRef(null);
    // console.log(useWindowSize)
    const onScreen = useOnScreen(ref, 0.5);
  
    useEffect(() => {
      if (onScreen) {
        updateActiveItem(index);
      }
    }, [onScreen, index, updateActiveItem]);
  
    return (
      <div
        className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
        ref={ref}
      >
        <div></div>
        <div className={"gallery-item"}>
          <div className="gallery-item-info">
            <div className="gallery-item-heading">
              <h1 className="gallery-info-title">{title}</h1>
              <h2 className="gallery-info-subtitle">{subtitle}</h2>
            </div>
            <p className="gallery-info-excerpt">
              {isMobile ? excerpt_mobile : excerpt}
            </p>
          </div>
          <div
            className="gallery-item-image"
            style={{ backgroundImage: isMobile && img_src_mobile ? `url(${img_src_mobile})` : `url(${img_src})`}}
          ></div>
        </div>
        <div></div>
      </div>
    );
  }