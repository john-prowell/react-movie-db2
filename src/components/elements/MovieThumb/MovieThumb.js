import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { IMAGE_BASE_URL, IMAGE_BACKDROP_SIZE } from '../../../config/config';
import './MovieThumb.css';

const MovieThumb = props => {
  const releaseYear = props.movie.release_date.split('').slice(0, 4);
  const stars = props.movie.vote_average / 2;
  return (
    <div className="movie-thumb">
      {props.movie.backdrop_path ? (
        <Link to={`/movie/${props.movie.id}`}>
          <img
            className="movie-image-poster"
            src={`${IMAGE_BASE_URL}${IMAGE_BACKDROP_SIZE}${
              props.movie.backdrop_path
            }`}
            alt={`${props.movie.title}`}
          />
        </Link>
      ) : (
        <img
          className="movie-image-poster"
          src="images/no-image-available.svg"
          alt="None"
        />
      )}
      <div className="movie-thumb-base">
        <div className="movie-info">
          <div className="rating">
            <ReactStars
              count={5}
              size={24}
              color2={'#ffd700'}
              value={stars}
              edit={false}
            />
          </div>
          <div className="movie-title">
            <h3>
              {props.movie.title} <span className="year"> - {releaseYear}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieThumb;
