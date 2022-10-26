import React, { useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";

import "./style.scss";

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const { languages, originalPath, i18n } = useI18next();
  return (
    <div className="lang-switcher">
       <button
        onClick={handleOpen}
        >
        {!open &&<span className="arrow-up">⏶</span>}
        <span className="current-lng"> {i18n.resolvedLanguage}</span>
        {!open &&<span className="arrow-down">⏷</span>}
      </button>
      <ul className={cn("languages-list", { "languages-list--open": open })}>
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
