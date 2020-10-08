import React from "react";

export const Raiting = ({ onClick }) => {
  return (
    <>
      <p className="raiting__title">Score:</p>
      <div className="rating">
        <input type="radio" name="rating" id="rating-5" onClick={onClick} />
        <label htmlFor="rating-5"></label>
        <input type="radio" name="rating" id="rating-4" onClick={onClick} />
        <label htmlFor="rating-4"></label>
        <input type="radio" name="rating" id="rating-3" onClick={onClick} />
        <label htmlFor="rating-3"></label>
        <input type="radio" name="rating" id="rating-2" onClick={onClick} />
        <label htmlFor="rating-2"></label>
        <input type="radio" name="rating" id="rating-1" onClick={onClick} />
        <label htmlFor="rating-1"></label>
      </div>
    </>
  );
};
