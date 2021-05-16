import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Multi Wallpaper</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/computer">
            <li>Computer</li>
          </Link>
          <Link to="/car">
            <li>Car</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
