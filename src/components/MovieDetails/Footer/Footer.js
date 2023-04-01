import './Footer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Footer = ({chooseMovie}) => {
  return (
    <footer>
      <Link to='/' >
        <button className='home-button' onClick={() => chooseMovie(null)} >⬅ Go Back Home</button>
      </Link>
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  chooseMovie: PropTypes.func.isRequired
};