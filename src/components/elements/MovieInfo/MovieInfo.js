import React from 'react';
import './MovieInfo.css';
import {
  IMAGE_BASE_URL,
  IMAGE_BACKDROP_SIZE,
  IMAGE_POSTER_SIZE
} from '../../../config/config';

const MovieInfo = props => {
  return (
    <section id="movie-info">
      <div
        className="movie-hero-image"
        style={{
          backgroundColor: `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%, rgba(0,0,0,0)
                    41%, rgba(0,0,0,0.65)
                    100%)`,
          backgroundImage: `url(${IMAGE_BASE_URL}${IMAGE_BACKDROP_SIZE}${
            props.movie.backdrop_path
          })`
        }}
      >
        <div className="rmdb-heroimage-content">
          <div className="rmdb-heroimage-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
