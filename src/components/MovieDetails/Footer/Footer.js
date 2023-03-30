import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({chooseMovie}) => {
  return (
    <footer>
      <Link to='/' >
        <button className='home-button' onClick={() => chooseMovie(null)} >⬅ Go Back</button>
      </Link>
    </footer>
  )
}

export default Footer;