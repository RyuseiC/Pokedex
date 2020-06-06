import React from 'react';
import './styles/PokeInfo.css';
import PokeSprite from './PokeSprite';
import PokeDetail from './PokeDetail';
import Tabs from './Tabs';

const PokeInfo = ({ pokemon, pokemonForms = [], pokemonSpecies, cry }) => {
  var isOpen;
 isOpen = pokemon.id ?
    true : false
  if (!isOpen) {
    return null;
  }

  const openClose = () => {
    isOpen = isOpen ? false : true;
    console.log('isOpen :', isOpen);
    
  }

  const appearances = ['Normal', 'Shiny'];

  const tabItems = pokemonForms
    .filter(
      form =>
        !form.name.includes('battle-bond') &&
        !form.name.includes('ash') &&
        !form.name.includes('50') &&
        !form.name.includes('own-tempo')
    )
    .map(pokemon => {
      const pokemonName = pokemon.name
        .replace('totem-alola', 'totem')
        .replace('nidoran-', 'nidoran_')
        .replace('mr-mime', 'mr.mime')
        .replace('deoxys-normal', 'deoxys')
        .replace('wormadam-plant', 'wormadam')
        .replace('mime-jr', 'mime_jr')
        .replace('giratina-altered', 'giratina')
        .replace('shaymin-land', 'shaymin')
        .replace('basculin-red-striped', 'basculin')
        .replace('basculin-blue-striped', 'basculin-blue')
        .replace('darmanitan-standard', 'darmanitan')
        .replace('-incarnate', '')
        .replace('keldeo-ordinary', 'keldeo')
        .replace('meloetta-aria', 'meloetta')
        .replace('meowstic-male', 'meowstic')
        .replace('meowstic-female', 'meowstic-f')
        .replace('aegislash-shield', 'aegislash')
        .replace('pumpkaboo-average', 'pumpkaboo')
        .replace('gourgeist-average', 'gourgeist')
        .replace('oricorio-baile', 'oricorio')
        .replace('oricorio-pom-pom', 'oricorio-pompom')
        .replace('lycanroc-midday', 'lycanroc')
        .replace("type-null", "typenull")
        .replace("minior-red-meteor", "minior")
        .replace("-meteor", "")
        .replace("mimikyu-disguised", "mimikyu")
        .replace("totem-disguised", "totem")
        .replace("tapu-", "tapu")
        .replace("necrozma-dusk", "necrozma-dusk-mane")
        .replace("necrozma-dawn", "necrozma-dawn-wings")
        .replace('mega-x', 'megax')
        .replace('mega-y', 'megay');

      const formName =
        pokemon.name === pokemon.species.name || (pokemon.name === pokemonForms[0].name && !pokemon.name.includes("totem") && !pokemon.name.includes("original"))
          ? 'default'
          : pokemon.name
              .replace(pokemon.species.name + '-', '')
              .replace('-', ' ')
              .replace('totem alola', 'totem')
              .replace('10', '10%')
              .replace("meteor", "")
              .replace(":", "");

      const varietyContents = appearances.map(appearance => {
        const PokeSpriteContent = (
          <PokeSprite name={pokemonName} appearance={appearance.toLowerCase()} cry={cry} />
        );
        return { label: appearance, tabContent: PokeSpriteContent };
      });

      const PokemonThing = (
        <div>
          <Tabs tabItems={varietyContents} />
          <PokeDetail pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </div>
      );
      return { label: formName, tabContent: PokemonThing };
    });

    console.log('isOpen :', isOpen);

  return (
    <section className="pokemon-info" key={pokemon} style={Object.assign({}, { display: ( isOpen ? 'inline-block' : 'none' ) }) }>
      <div className="variety-tabs">
        <Tabs tabItems={tabItems} />
      </div>
      <br></br>
      <button className="close" onClick={() => openClose()}>X</button>
    </section>
  );
};

export default PokeInfo;
