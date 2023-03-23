import "./Header.css"
import tomatillo from "./tomatillo.png"

const Header = () => {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      <img className="tomatillo" src={tomatillo} alt="tomatillo" />
    </header>
  )
}

export default Header;