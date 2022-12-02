import React from "react";
import Loadable from "react-loadable";
import LoadingScreen from "../components/LoadingScreen";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Helmet } from "gatsby-plugin-react-i18next";

const loader = () => <LoadingScreen />;

const HomeLazy = Loadable({
  loader: () => import("../home/Home"),
  loading: loader,
});

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={t("head_page_description")} />
        <title>{t("head_page_title")}</title>
      </Helmet>
      <HomeLazy />
    </>
  );
};
export default Index;

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
