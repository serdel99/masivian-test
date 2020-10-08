import React from "react";
import icon from "../styles/img/ico.svg";
export const Header = () => {
  return (
    <header className="header">
      <img src={icon} className="header__icon" alt="Header icon" />
      <h1 className="header__title">RAND COMIC</h1>
    </header>
  );
};
