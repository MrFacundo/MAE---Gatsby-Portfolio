import React from "react";
import { Link } from "gatsby"

import "./style.scss";

const NotFound = () => {

  return (
    <div className="cont_principal cont_error_active">
      <div className="cont_error">
        <h1>Oops</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
      <Link to="/" className="link">
        Go to Homepage
      </Link>
      <div class="cont_aura_1"></div>
      <div class="cont_aura_2"></div>
    </div>
  );
};

export default NotFound;
