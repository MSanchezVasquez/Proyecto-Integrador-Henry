import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </div>
  );
};

export default NavBar;
