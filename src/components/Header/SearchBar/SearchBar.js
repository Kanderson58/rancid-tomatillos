import './SearchBar.css'
import PropTypes from 'prop-types'
import { Component} from 'react';
import Footer from '../../MovieDetails/Footer/Footer';

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
        {this.state.search && <button className='clear-btn' onClick={(event) => {this.clearInput(event)}}>Clear Search</button>}
      </div>
    )
  } 
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  chooseMovie: PropTypes.func.isRequired
};