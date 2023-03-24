import "./Header.css"
import tomatillo from "./tomatillo.png"
import SearchBar from "./SearchBar/SearchBar"

const Header = ({value, onChange}) => {
  return (
    <header>
      <div className="header">
        <h1>Rancid Tomatillos</h1>
        <img className="tomatillo" src={tomatillo} alt="tomatillo" />
      </div>
      <SearchBar value={value} onChange={onChange} />
    </header>
  )
}

export default Header;