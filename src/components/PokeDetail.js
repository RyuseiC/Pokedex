import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const PokeDetail = ({ pokemon, pokemonSpecies }) => {
  const {
    id,
    name,
    height,
    weight,
    type,
    type2,
    abilities,
    hp,
    attack,
    defense,
    sp_atk,
    sp_def,
    speed,
  } = pokemon;

  console.log('pokemonSpecies :', pokemonSpecies);
  var description = '';
  const descriptions = pokemonSpecies.flavor_text_entries;

  for (let i = 0; i < descriptions.length; i++) {
    if (descriptions[i].language.name === 'en') {
      console.log('flavor_text_entry :', descriptions[i].flavor_text);
      description += descriptions[i].flavor_text;
      break;
    }
  }

  const stats = {
    type: 'HorizontalBar',
    labels: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
    datasets: [
      {
        title: 'Base Stats',
        data: [hp, attack, defense, sp_atk, sp_def, speed],
        backgroundColor: [
          'rgb(169, 218, 144)',
          'rgb(253, 91, 93)',
          'rgb(244, 172, 124)',
          'rgb(158, 184, 243)',
          'rgb(249, 223, 127)',
          'rgb(248, 147, 178)',
        ],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Base Stats:',
      fontColor: 'white',
      fontSize: 18,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: 'white',
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
          },
        },
      ],
    },
  };

  const typeColor = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  const typeStyle = {
    display: 'inline-block',
    width: '100px',
    textAlign: 'center',
    borderRadius: '50px',
    margin: '5px',
  };

  const convertID = () => {
    if (id > 10000) {
      var splitBySlash = pokemon.species.url.split('/');
      return splitBySlash[splitBySlash.length - 2];
    }
    return id;
  };

  const convertName = () => {
    if (name.includes('mega-x')) {
      return `mega ${pokemon.species.name} x`;
    } else if (name.includes('mega-y')) {
      return `mega ${pokemon.species.name} y`;
    } else if (name.includes('mega')) {
      return `mega ${pokemon.species.name}`;
    } else if (name.includes('primal')) {
      return `primal ${pokemon.species.name}`;
    } else if (name.includes('totem') && !name.includes('disguised') && !name.includes('busted')) {
      return `totem ${pokemon.species.name}`;
    } else if (name.includes('alola')) {
      return `alolan ${pokemon.species.name}`;
    } else if (name.includes('nidoran-f')) {
      return 'nidoran♀';
    } else if (name.includes('nidoran-m')) {
      return 'nidoran♂';
    } else if (name === 'mr-mime') {
      return 'mr. mime';
    } else if (name === 'mime-jr') {
      return 'mime jr.';
    } else if (name === 'porygon2') {
      return 'porygon 2';
    } else if (name === 'kyurem-black') {
      return `black ${pokemon.species.name}`;
    } else if (name === 'kyurem-white') {
      return `white ${pokemon.species.name}`;
    } else if (name === 'zygarde') {
      return 'zygarde (50% forme)';
    } else if (name === 'zygarde-10') {
      return 'zygarde (10% forme)';
    } else if (name === 'type-null') {
      return 'type: null';
    } else if (name.includes('tapu')) {
      return name.replace('-', ' ');
    } else if (name === 'necrozma-dusk') {
      return `dusk mane ${pokemon.species.name}`;
    } else if (name === 'necrozma-dawn') {
      return `dawn wings ${pokemon.species.name}`;
    } else if (name.includes('ultra')) {
      return `ultra ${pokemon.species.name}`;
    } else if (
      name.includes('-') &&
      name !== 'ho-oh' &&
      name !== 'porygon-z' &&
      name !== 'jangmo-o' &&
      name !== 'hakamo-o' &&
      name !== 'kommo-o'
    ) {
      var forme = name.split(pokemon.species.name).pop();
      return name.replace(forme, ` (${forme.substring(1)} forme)`);
    }
    return name;
  };

  const convertHeight = () => {
    var meters = (height * 0.1).toFixed(2);
    var feet = (meters * 3.28084).toFixed(2);
    return `${meters}m / ${feet} ft`;
  };

  const convertWeight = () => {
    var kilograms = (weight * 0.1).toFixed(2);
    var pounds = (kilograms * 2.205).toFixed(2);
    return `${kilograms} kg / ${pounds} lbs`;
  };

  var abilityList = [];
  for (let i = 0; i < abilities.length; i++) {
    abilityList[i] = abilities[i].ability.name;
    console.log('abilities[i].name :', abilities[i].ability.name);
  }

  return (
    <div className="data-wrapper">
      <h1 className="data-id">No. {convertID()}</h1>
      <h2 className="data-name">Name: {convertName()}</h2>
      <p className="data-height">Height: {convertHeight()}</p>
      <p className="data-weight">Weight: {convertWeight()}</p>
      <p className="data-description">Description: {description}</p>
      <div className="data-type">
        Type:
        <p
          className="type"
          style={Object.assign({}, typeStyle, { backgroundColor: typeColor[type] })}
        >
          {type}
        </p>
        <p
          className="type2"
          style={Object.assign({}, typeStyle, { backgroundColor: typeColor[type2] })}
        >
          {type2}
        </p>
      </div>
      <p className="data-abilities">Abilities: {abilityList.join(", ")}</p>
      <div className="data-stats">
        <HorizontalBar data={stats} options={options} height={150} />
      </div>
    </div>
  );
};

export default PokeDetail;
