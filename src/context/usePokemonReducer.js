import { useReducer } from "react";
import {
  CAPTURE,
  RELEASE,
  ADD_POKEMON,
  DELETE_POKEMON,
  ADD_POKEMONS,
  DISLIKE_POKEMONS,
} from "./actions";

const getfavoritePokemons = (favoritePokemons, releasedPokemon) =>
  favoritePokemons.filter((pokemon) => pokemon !== releasedPokemon);

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  favoritePokemons: getfavoritePokemons(
    state.favoritePokemons,
    releasedPokemon
  ),
});

const getPokemonsList = (pokemons, favoritePokemon) =>
  pokemons.filter((pokemon) => pokemon !== favoritePokemon);

const filterPokemonsList = (pokemons, removePokemon) =>
  pokemons.filter((pokemon) => pokemon !== removePokemon);

const addFavoritePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  favoritePokemons: [...state.favoritePokemons, pokemon],
  disLike: state.disLike,
});

const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  favoritePokemons: state.favoritePokemons
});

const addPokemons = (pokemons, state) => ({
  pokemons: [...pokemons],
  favoritePokemons: state.favoritePokemons,
  disLike: state.disLike,
});

const removePokemon = (pokemon, state) => ({
  pokemons: state.pokemons,
  favoritePokemons: state.favoritePokemons,
  disLike: state.disLike,
});

const addDisLikePokemon = (pokemon, state) => ({
  pokemons: filterPokemonsList(state.pokemons, pokemon),
  favoritePokemons: [...state.favoritePokemons],
  disLike: [...state.disLike, pokemon],
});


const pokemonReducer = (state, action) => {
  console.log("Inside Dispatch Action :" + action.type);
  switch (action.type) {
    case CAPTURE:
      {
      console.log("Hello Inside CAPTURE :" + JSON.stringify(action.pokemon.name));
      return addFavoritePokemon(action.pokemon, state);
      }
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case DELETE_POKEMON:
      return removePokemon(action.pokemon, state);
    case DISLIKE_POKEMONS:
       {
        console.log("Hello Inside DISLIKE_POKEMONS :" + JSON.stringify(action.pokemon.name));
        return addDisLikePokemon(action.pokemon, state);
      }
    case ADD_POKEMONS:
      {
        console.log("Hello Inside ADD_POKEMONS ");
        return addPokemons(action.pokemons, state);
      }
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    favoritePokemons: [],
    disLike: [],
  });
