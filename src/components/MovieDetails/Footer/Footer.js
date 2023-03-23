import "./Footer.css";
import PropTypes from 'prop-types';

const Footer = ({chooseMovie}) => {
  return (
    <footer>
      <button onClick={() => {chooseMovie(null)}}>⬅ Go Back To Home</button>
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  chooseMovie: PropTypes.func.isRequired
}