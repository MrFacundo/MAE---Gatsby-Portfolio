import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
// import { useTranslation } from "gatsby-plugin-react-i18next";

import "./style.scss";

const NotFound = () => {
	// const { t } = useTranslation();

	return (
		<div className="error_container error_container--active">
			<div className="error__message">
				<h1>Oops</h1>
				<p>You just hit a route that doesn&#39;t exist...</p>
			</div>
			<Link to="/" className="error__link">
				Go to homepage
			</Link>
			<div class="error__aura_1"></div>
			<div class="error__aura_2"></div>
		</div>
	);
};

export default NotFound;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
