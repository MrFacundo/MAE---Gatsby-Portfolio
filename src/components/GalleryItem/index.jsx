import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import "./style.scss";


export default function GalleryItem({
    img_src,
    excerpt,
    subtitle,
    title,
    updateActiveItem,
    index,
  }) {
    const ref = useRef(null);
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
              {excerpt}
            </p>
          </div>
          <div
            className="gallery-item-image"
            style={{ backgroundImage: `url(${img_src})`}}
          ></div>
        </div>
        <div></div>
      </div>
    );
  }