import './Footer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({chooseMovie, activeSearch, singleMovie}) => {
  return (
    <footer>
      <Link to='/' >
      {(!activeSearch || !singleMovie) && <button className='home-button' onClick={() => {chooseMovie(null)}}>⬅ Go Back To Home</button>}
      {activeSearch && singleMovie && <button className='home-button' onClick={() => {chooseMovie(null)}}>⬅ Go Back To Search</button>}
      </Link>
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  chooseMovie: PropTypes.func.isRequired,
  activeSearch: PropTypes.bool.isRequired,
  singleMovie: PropTypes.bool.isRequired
}