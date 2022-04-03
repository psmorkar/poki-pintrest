import React, { useEffect, useContext } from "react";
import "./styles/App.css";
import PokeRow from "./PokeRow";
import { PokemonContext } from "../context/PokemonContext";

const Home = () => {
  const { addFavorite, addDisLike, disLike, pokemons, addPokemon, pokeLink, setPokeLink} = useContext(PokemonContext);
  const getAllPokemons = async () => {
    console.log("loadPoke:" + pokeLink);
    const res = await fetch(pokeLink);
    const data = await res.json();
    setPokeLink(data.next);
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        addPokemon(data);
      });
    }
    createPokemonObject(data.results);
    await console.log(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">{<PokeRow pokeList={pokemons} buttonLabel="like" dislike={addDisLike} isFavorite={false}
          onClick={addFavorite}/>}</div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            More Pokemons
          </button>
        </div>
      </div>
  );
};

export default Home;
