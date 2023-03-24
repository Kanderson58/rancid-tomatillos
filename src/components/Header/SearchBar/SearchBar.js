import './SearchBar.css'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='searchBar'>
      <label htmlFor='search-bar'>Search Movies:</label>
      <input 
        id='search-bar'
        type='text'
        placeholder='Search..'
        value={value}
        onChange={onChange}
      />
      <button className='search-btn' onClick={onChange}><span className="material-symbols-outlined">search</span></button>
    </div>
  )
} 

export default SearchBar;