import React from "react";
import Logo from "./logo1.png";

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      {children}
      <img className="logoHeader" src={Logo} />
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
