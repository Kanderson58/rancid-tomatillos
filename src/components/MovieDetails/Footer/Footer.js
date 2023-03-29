import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to='/' >
        <button className='home-button' >⬅ Go Back</button>
      </Link>
    </footer>
  )
}

export default Footer;