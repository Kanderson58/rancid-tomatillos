import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({chooseMovie, activeSearch, singleMovie}) => {
  return (
    <footer>
      {(!activeSearch || !singleMovie) && <button className='home-button' onClick={() => {chooseMovie(null)}}>⬅ Go Back To Home</button>}
      {activeSearch && singleMovie && <button className='home-button' onClick={() => {chooseMovie(null)}}>⬅ Go Back To Search</button>}
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  chooseMovie: PropTypes.func.isRequired,
  activeSearch: PropTypes.bool.isRequired,
  singleMovie: PropTypes.bool.isRequired
}