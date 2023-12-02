/* eslint-disable react/prop-types */
import SearchBar from "../Searchbar";
import { Link } from "react-router-dom";
import "./Nav";
import styled from "styled-components";

const NavBar = ({ onSearch }) => {
  return (
    <div className="navbar-container">
      <SearchBar onSearch={onSearch} />

      <Link to="/about">
        <button className="nav-button">About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/favorites">
        <button className="nav-button">Favorites</button>
      </Link>
    </div>
  );
};

export default NavBar;
