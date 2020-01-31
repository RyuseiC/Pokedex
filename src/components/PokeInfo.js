import React from 'react';
import './styles/PokeInfo.css';
import { HorizontalBar } from 'react-chartjs-2';
import PokeVarieties from './PokeVarieties';
import Pokemon from '../Pokemon';
import PokeDetail from './PokeDetail';
import Tabs from './Tabs'

// const sprite = require('pokemon-base-stats/node_modules/pokemon');

const PokeInfo = ({ pokemon, updatePokemon, pokemonForms, pokemonSpecies }) => {
  const {
    id,
    name,
    height,
    weight,
    type,
    type2,
    hp,
    attack,
    defense,
    sp_atk,
    sp_def,
    speed,
    formes,
  } = pokemon;

  if (!id) {
    return (
      <section className="pokemon-info">
        {/* <div className="tab">
            <button className="tablinks">
              Original
            </button>
            <button className="tablinks">
              Shiny
            </button>
          </div> */}
        <div className="sprite"></div>
        <div className="data-wrapper"></div>
      </section>
    );
  }

  // const originalSprite = `https://projectpokemon.org/images/normal-sprite/${sprite
  //   .getName(id)
  //   .toLowerCase()
  //   .replace(/\s/g, '')
  //   .replace(':', '')}.gif`;

  const appearances = [{ appearance: 'normal' }, { appearance: 'shiny' }];

  // const description = pokemonSpecies.flavor_text_entries[1].flavor_text;
  // console.log(description);

  const tabItems = (pokemonForms || []).map((pokemon) => {
    return { label: pokemon.name, tabContent: <PokeDetail pokemon={pokemon} />};
  });

  return (
    <section className="pokemon-info" key={pokemon}>
      <div className="forme-tabs">
        <Tabs tabItems={tabItems} />
      </div>
      {/* <PokeVarieties
        className="pokemon-varieties"
        id={id}
        name={name.split('-')[0]}
        hp={hp}
        // originalSprite={originalSprite}
        formes={formes}
        innerTabs={appearances}
        updatePokemon={updatePokemon}
      />
      <PokeDetail pokemon={pokemon} /> */}
    </section>
  );
};

export default PokeInfo;
