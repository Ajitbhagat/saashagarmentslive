import React from "react";
import "./Logo.css";

import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div id="logo">
      <ul > 
      <li><Link  to={'./'}>Saasha Garments</Link></li>
     </ul>


    </div>
  );
};

export default Logo;
