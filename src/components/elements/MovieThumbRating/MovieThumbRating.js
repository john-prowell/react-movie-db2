import React from 'react';
import './MovieThumbRating.css';

const MovieThumbRating = props => {
  const rating = Math.round(props.rating);
  let color = '';
  if (rating * 10 <= 40) color = 'movie-rating-bar-low';
  if (rating * 10 >= 41 && rating * 10 <= 69) color = 'movie-rating-bar-medium';
  if (rating * 10 >= 70 && rating * 10 <= 100) color = 'movie-rating-bar-high';

  return <div className={color}>{`${rating} / 10`}</div>;
};

export default MovieThumbRating;
