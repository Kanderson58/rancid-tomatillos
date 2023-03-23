import "./Footer.css"

const Footer = ({chooseMovie}) => {
  return (
    <footer>
      <button className="home-button" onClick={() => {chooseMovie(null)}}>⬅ Go Back To Home</button>
    </footer>
  )
}

export default Footer;