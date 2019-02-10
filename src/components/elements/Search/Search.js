import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const SearchTerm = React.createContext('');

class Search extends React.Component {
  state = {
    value: ''
  };

  timout = null;

  search = e => {
    this.setState({
      value: e.target.value
    });
    clearTimeout(this.timeout);
    this.timout = setTimeout(() => {
      this.props.searchMovies(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="search">
        <div className="search-content">
          <FontAwesomeIcon icon={faSearch} size="2x" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Enter movie title..."
            onChange={this.search}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default Search;
