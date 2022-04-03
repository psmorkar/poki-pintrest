import React, { createContext, useState } from "react";
import { usePokemonReducer } from "./usePokemonReducer";
import {
  CAPTURE,
  RELEASE,
  ADD_POKEMON,
  DELETE_POKEMON,
  ADD_POKEMONS,
  DISLIKE_POKEMONS,
} from "./actions";

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, favoritePokemons, disLike } = state;
  const [pokeLink, setPokeLink] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=3"
  );

  const addDisLike = (pokemon) => dispatch({ type: DISLIKE_POKEMONS, pokemon });
  const addFavorite = (pokemon) => dispatch({ type: CAPTURE, pokemon });
  const removeFavorite = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const removePokemon = (pokemon) => dispatch({ type: DELETE_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });


  const providerValue = {
    pokeLink,
    disLike,
    setPokeLink,
    pokemons,
    favoritePokemons,
    addFavorite,
    removeFavorite,
    addPokemon,
    removePokemon,
    addDisLike,
    addPokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
