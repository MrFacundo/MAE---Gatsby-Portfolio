import React, { useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";

import "./style.scss";
import triangle_up from "../../images/black-triangle-up_30x30.png";

const LangSwitcher = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const { languages, originalPath, i18n } = useI18next();
	return (
		<div className="lang-switcher">
			<button onClick={handleOpen}>
				{!open && <img className="arrow-up" src={triangle_up} alt="" />}
				<span className="current-lng"> {i18n.resolvedLanguage}</span>
				{!open && (
					<img className="arrow-down" src={triangle_up} alt="" />
				)}
			</button>
			<ul
				className={cn("languages-list", {
					"languages-list--open": open,
				})}
			>
				{languages
					.filter((lng) => lng !== i18n.resolvedLanguage)
					.map((lng) => (
						<li key={lng}>
							<Link to={originalPath} language={lng}>
								{lng}
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default LangSwitcher;
