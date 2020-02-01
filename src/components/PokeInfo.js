import React from "react";
import "./styles/PokeInfo.css";
import PokeSprite from "./PokeSprite";
import PokeDetail from "./PokeDetail";
import Tabs from "./Tabs";

const PokeInfo = ({ pokemon, updatePokemon, pokemonForms = [], pokemonSpecies }) => {
  if (!pokemon.id) {
    return (
      <section className="pokemon-info">
        <div className="sprite"></div>
        <div className="data-wrapper"></div>
      </section>
    );
  }

  const appearances = ["Normal", "Shiny"];

  const tabItems = pokemonForms.map(pokemon => {
    const pokemonName = pokemon.name
      .replace("mega-x", "megax")
      .replace("mega-y", "megay");

    const varietyContents = appearances.map(appearance => {
      const PokeSpriteContent = (
        <PokeSprite name={pokemonName} appearance={appearance.toLowerCase()} />
      );
      return {label: appearance, tabContent: PokeSpriteContent};
    });

    const PokemonThing = (
      <div>
        <Tabs tabItems={varietyContents} />
        <PokeDetail pokemon={pokemon} />
      </div>
    );
    return { label: pokemon.name, tabContent: PokemonThing };
  });

  return (
    <section className="pokemon-info" key={pokemon}>
      <div className="forme-tabs">
        <Tabs tabItems={tabItems} />
      </div>
    </section>
  );
};

export default PokeInfo;
