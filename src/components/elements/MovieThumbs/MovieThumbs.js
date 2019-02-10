import React from 'react';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieThumbs.css';

class MovieThumbs extends React.Component {
  // componentDidUpdate() {
  //   this.node.scrollIntoView();
  // }

  render() {
    const movies = this.props.movies;

    return (
      <div ref={node => (this.node = node)} id="movie-thumbs">
        {movies.map(movie => {
          return <MovieThumb key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieThumbs;
