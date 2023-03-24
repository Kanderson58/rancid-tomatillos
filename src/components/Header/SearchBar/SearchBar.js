import './SearchBar.css'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='searchBar'>
      <label for='search-bar'>Search Movies:</label>
      <input 
        type='text'
        placeholder='Search..'
        value={value}
        onChange={onChange}
      />
      <button onClick={onChange}>SEARCH</button>
    </div>
  )
} 

export default SearchBar;