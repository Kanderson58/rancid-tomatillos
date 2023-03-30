import './SearchBar.css'
import PropTypes from 'prop-types'
import { Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  onChange = (event) => {
    this.setState({ search: event.target.value});
  }
  
  clearInput = (event) => {
    event.preventDefault();
    this.setState({search: ''});
    this.props.clearSearch();
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
          value={this.state.search}
        />
        {this.state.search && !this.props.selectedMovie && <button className='clear-btn' onClick={(event) => {this.clearInput(event)}}>Clear Search</button>}
      </div>
    )
  } 
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};