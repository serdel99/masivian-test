import React from "react";

export const Raiting = ({ onClick }) => {
  return (
    <>
      <p>Score:</p>
      <div class="rating">
        <input type="radio" name="rating" id="rating-5" onClick={onClick} />
        <label for="rating-5"></label>
        <input type="radio" name="rating" id="rating-4" onClick={onClick} />
        <label for="rating-4"></label>
        <input type="radio" name="rating" id="rating-3" onClick={onClick} />
        <label for="rating-3"></label>
        <input type="radio" name="rating" id="rating-2" onClick={onClick} />
        <label for="rating-2"></label>
        <input type="radio" name="rating" id="rating-1" onClick={onClick} />
        <label for="rating-1"></label>
      </div>
    </>
  );
};
