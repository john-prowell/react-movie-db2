import React, { Component } from 'react';
import MovieThumbs from '../elements/MovieThumbs/MovieThumbs';
import Spinner from '../elements/Spinner/Spinner';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './Home.css';

class Home extends Component {
  render() {
    const {
      movies,
      loading,
      total,
      current,
      pageSize,
      pagination
    } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          {/* {this.state.search ? (
                <h1>Search Results:</h1>
              ) : (
                <h1>Popular Movies</h1>
              )} */}
          {loading && <Spinner />}

          {movies.length === 0 ? null : <MovieThumbs movies={movies} />}
          <div className="pagination">
            <Pagination
              onChange={pagination}
              current={current}
              total={total}
              pageSize={pageSize}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
