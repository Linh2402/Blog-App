import React from "react";
import Logo from "../img/logo.png";

export const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with <span className="heart">♥</span> and <b>React.js</b>.
      </span>
    </footer>
  );
};
