import './Header.css'
import tomatillo from './tomatillo.png'
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className='full-header'>
      <header>
        <div className='header'>
          <h1>Rancid Tomatillos</h1>
          <img className='tomatillo' src={tomatillo} alt='tomatillo' />
        </div>
        <h2 className='trademark'>Definitely Not Rotten Tomatoes ™️</h2>
      </header>
      <div className='bottom-border'></div>  
    </div>
  )
}

export default Header;

Header.propTypes = {
  onSearch: PropTypes.func
}