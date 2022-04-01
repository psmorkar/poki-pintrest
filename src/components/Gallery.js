import React, { useContext } from "react";
import PokeRow from "./PokeRow";
import { PokemonContext } from "../context/PokemonContext";

import "./styles/Gallery.css";

const Gallery = () => {
  const { addDisLike, removeFavorite, favoritePokemons } =
    useContext(PokemonContext);
  return (
    <div className="app-container">
      {console.log("Hello Gallery:[" + favoritePokemons + "]")}
      <div className="pokemon-container">
        <div className="all-container">
          <PokeRow
            pokeList={favoritePokemons}
            isFavorite={true}
            buttonLabel="remove"
            dislike={removeFavorite}
            onClick1={addDisLike}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
