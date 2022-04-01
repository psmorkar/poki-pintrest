import React from "react";
import Header from "./Header";
import "./styles/App.css";
import { PokemonProvider } from "../context/PokemonContext";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <PokemonProvider>
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </PokemonProvider>
  );
};

export default App;
