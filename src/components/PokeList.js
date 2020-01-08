import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';
import { pokeClasses } from '../PokeClasses';

// const pokemonList = ['bulbasaur', 'someotherpokemon'];

// function pokemonFilter({ id }) {
//   const searchInput = 'bulb';
//   const pokemon = pokemonList[id - 1];

//   const matchesName = pokemon.toLowerCase().includes(searchInput.toLowerCase());
//   const matchesId = id.toString() === searchInput;

//   return matchesName || matchesId;
// }

// const values = [
//   {
//     id: '1',
//     backgroundImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
//   },
//   {
//     id: '2',
//     backgroundImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
//   },
// ];

// const pokemons = values.filter(pokemonFilter);

// console.log(pokemons);

const PokeList = ({ handleOnClick, filterByPokemon, sortPokemon }) => {
  const cells = pokeClasses.sort((a, b) => sortPokemon(a, b)).filter(filterByPokemon).map(pokeClass => {
    return <PokeCell key={pokeClass.id} pokeClass={pokeClass} handleOnClick={handleOnClick} />;
  });

  return <section className="poke-list">{cells}</section>;
};

export default PokeList;
