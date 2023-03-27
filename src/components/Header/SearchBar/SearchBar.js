import './SearchBar.css'
import PropTypes from 'prop-types'
import { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  onChange = (event) => {
    this.setState({ search: event.target.value})
  }

  render() {
    return (
      <div className='searchBar'>
        <label htmlFor='search-bar'>Search Movies:</label>
        <input 
          id='search-bar'
          type='text'
          placeholder='Search...'
          onChange={(event) => this.onChange(event)}
          onKeyUp={() => this.props.onSearch(this.state.search)}
        />
        {this.state.search && <button className='search-btn' onClick={() => console.log("clear")}>Clear Search</button>}
      </div>
    )
  } 
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};