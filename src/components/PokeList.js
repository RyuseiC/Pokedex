import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';
import { pokeClasses } from '../PokeClasses';

const PokeList = ({ handleOnClick, filterByPokemon, sortPokemon }) => {
  const cells = pokeClasses.sort((a, b) => sortPokemon(a, b)).filter(filterByPokemon).map(pokeClass => {
    return <PokeCell key={pokeClass.id} pokeClass={pokeClass} handleOnClick={handleOnClick} />;
  });

  return <section className="poke-list">{cells}</section>;
};

export default PokeList;
