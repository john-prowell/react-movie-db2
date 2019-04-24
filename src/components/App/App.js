import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Footer from '../elements/Footer/Footer';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import LandingPage from '../elements/LandingPage/LandingPage';
import NotFound from '../elements/NotFound/NotFound';
import { API_URL } from '../../config/config';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    movies: [],
    loading: false,
    total: null,
    current: 1,
    pageSize: 20,
    searchTerm: '',
    heroImage: null
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    // Popular Movies
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    console.log('mounted');
    this.fetchMovies(endpoint);
  }

  // Pagination
  onChange = page => {
    let endpoint;
    this.state.searchTerm
      ? (endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
          this.state.searchTerm
        }&page=${page}`)
      : (endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    this.setState({
      loading: true,
      current: page
    });

    this.fetchMovies(endpoint);
  };

  // Search
  searchMovies = searchTerm => {
    this.setState({
      movies: [],
      loading: true,
      searchTerm,
      current: 1
    });

    let endpoint;
    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchMovies(endpoint);
  };

  fetchMovies = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          heroImage: this.state.heroImage || result.results[0],
          movies: result.results,
          loading: false,
          total: result.total_pages
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header searchMovies={this.searchMovies} />
          <Switch>
            <Route
              exact
              path="/"
              component={props =>
                this.state.heroImage && (
                  <LandingPage heroImage={this.state.heroImage} />
                )
              }
            />
            <Route
              exact
              path="/search"
              component={props => (
                <Home
                  movies={this.state.movies}
                  loading={this.state.loading}
                  total={this.state.total}
                  current={this.state.current}
                  pageSize={20}
                  pagination={this.onChange}
                />
              )}
            />
            <Route exact path="/movie/:movieId" component={Movie} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
