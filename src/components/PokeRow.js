import React from "react";
import PokemonThumbnail from "./PokemonThumbnail";
import "./styles/PokeRow.css";

const PokeRow = ({ pokeList, onClick, dislike, buttonLabel, isFavorite }) => {
  return pokeList.map((pokemon, index) => (
    <div>
      <PokemonThumbnail
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        key={index}
        height={pokemon.height}
        weight={pokemon.weight}
      />
      <button id="test1" className="pokeinfo" onClick={() => onClick(pokemon)}>
        {buttonLabel}
      </button>
      {!isFavorite && (
        <button
          id="test2"
          onClick={() => dislike(pokemon)}
          className="pokeinfo"
        >
          Unlike
        </button>
      )}
    </div>
  ));
};

export default PokeRow;
