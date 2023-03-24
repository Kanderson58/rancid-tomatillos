import "./Header.css"
import tomatillo from "./tomatillo.png"
import SearchBar from "./SearchBar/SearchBar"

const Header = ({value, onChange}) => {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      <img className="tomatillo" src={tomatillo} alt="tomatillo" />
      <SearchBar value={value} onChange={onChange} />
    </header>
  )
}

export default Header;