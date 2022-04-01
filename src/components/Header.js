import React from "react";
import "./styles/Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Home from "./Home";

const Header = () => (
  <div className="container">
    <Router>
      <h1>Personal Pokedex!</h1>
      <nav>
        <ul>
          <Link to="/Gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/Home">
            <li>Pokemons</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </Router>
  </div>
);

export default Header;
