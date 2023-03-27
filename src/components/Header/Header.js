import './Header.css'
import tomatillo from './tomatillo.png'
import SearchBar from './SearchBar/SearchBar'
import PropTypes from 'prop-types';

const Header = ({onSearch, clearSearch}) => {
  return (
    <header>
      <div className='header'>
        <h1>Rancid Tomatillos</h1>
        <img className='tomatillo' src={tomatillo} alt='tomatillo' />
      </div>
      <SearchBar onSearch={onSearch} clearSearch={clearSearch}/>
    </header>
  )
}

export default Header;

Header.propTypes = {
  onSearch: PropTypes.func
}