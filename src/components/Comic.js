import React from "react";
import nextIcon from "../styles/img/next.svg";
export const Comic = ({ comic, onClickNext }) => {
  return (
    <div className="comic">
      <div className="comic__header">
        <h1 className="comic__title">{comic.title}</h1>
        <img
          src={nextIcon}
          className="comic__next-icon"
          onClick={onClickNext}
        />
      </div>

      <img src={comic.img} className="comic__image" />
      <p>{comic.year}</p>
    </div>
  );
};
