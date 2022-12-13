import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

import "./style.scss";

export default function GalleryItem({
	img_src,
	excerpt,
	subtitle,
	title,
	updateActiveItem,
	index,
  landscape
}) {
	const ref = useRef(null);
	const onScreen = useOnScreen(ref, 0.5);

	const { t } = useTranslation();

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
			<div className={cn("gallery-item", { "gallery-item--landscape": landscape })}>
				<div className="gallery-item__info">
					<div className="gallery-item__info__heading">
						<h1 className="gallery-item__info__title">{t(title)}</h1>
						<h2 className="gallery-item__info__subtitle">
							{t(subtitle)}
						</h2>
					</div>
					<p className="gallery-item__info__excerpt">{t(excerpt)}</p>
				</div>
				<div
					className="gallery-item__image"
					style={{ backgroundImage: `url(${img_src})` }}
				></div>
			</div>
			<div></div>
		</div>
	);
}
