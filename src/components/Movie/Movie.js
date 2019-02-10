import React from 'react';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import Spinner from '../elements/Spinner/Spinner';
import { API_URL } from '../../config/config';

const API_KEY = process.env.REACT_APP_API_KEY;

class Movie extends React.Component {
  state = {
    movie: null,
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    const movieId = this.props.match.params.movieId;
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;

    this.fetchMovie(endpoint);
  }

  fetchMovie = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movie: result,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Spinner />}
        {this.state.movie && <MovieInfo movie={this.state.movie} />}
      </React.Fragment>
    );
  }
}

export default Movie;
