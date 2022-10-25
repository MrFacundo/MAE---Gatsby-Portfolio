import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
 
import "./style.scss";

const LangSwitcher = () => {
    const { languages, originalPath, i18n } = useI18next();
    return (
      <div className="lang-switcher">
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
            <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};
 
export default LangSwitcher;