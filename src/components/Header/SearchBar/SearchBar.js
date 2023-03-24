import './SearchBar.css'
import PropTypes from 'prop-types'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='searchBar'>
      <label htmlFor='search-bar'>Search Movies:</label>
      <input 
        id='search-bar'
        type='text'
        id='search-bar'
        placeholder='Search..'
        value={value}
        onChange={onChange}
      />
      <button className='search-btn' onClick={onChange}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
} 

export default SearchBar;


SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};