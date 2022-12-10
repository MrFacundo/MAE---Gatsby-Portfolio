import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isMobile } from "react-device-detect";

import "./style.scss";

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="testimonials-section" data-scroll-section>
			<div className="testimonials-container">
				<FontAwesomeIcon icon={faQuoteLeft} />
				<p
					className="testimonial-one"
					data-scroll
					data-scroll-speed={isMobile ? 0.6 : 1}
				>
					{t("testimonial_1")}
				</p>
				<div className="testimonials-column">
					{!isMobile && (
						<div className="testimonials-row">
							<p
								className="testimonial-two"
								data-scroll
								data-scroll-direction="horizontal"
								data-scroll-speed="-0.6"
							>
								{t("testimonial_2")}
							</p>
						</div>
					)}
					<div className="testimonials-row">
						<p
							className="testimonial-three"
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed={isMobile ? 0 : -0.4}
						>
							{t("testimonial_3")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
