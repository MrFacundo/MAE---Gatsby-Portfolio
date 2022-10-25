import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
// import { useTranslation } from "gatsby-plugin-react-i18next";

import "./style.scss";

const NotFound = () => {
  // const { t } = useTranslation();

  return (
    <div className="cont_principal cont_error_active">
      <div className="cont_error">
        <h1>Oops</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
      <Link to="/" className="link">
        Go to homepage
      </Link>
      <div class="cont_aura_1"></div>
      <div class="cont_aura_2"></div>
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
