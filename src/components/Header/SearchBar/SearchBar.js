import './SearchBar.css'
import PropTypes from 'prop-types'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='searchBar'>
      <label htmlFor='search-bar'>Search Movies:</label>
      <input 
        type='text'
        id='search-bar'
        placeholder='Search..'
        value={value}
        onChange={onChange}
      />
      <button onClick={onChange}>SEARCH</button>
    </div>
  )
} 

export default SearchBar;


SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};