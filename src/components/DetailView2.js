import React from 'react';
import './styles/DetailView.css';
import { HorizontalBar } from 'react-chartjs-2';

const sprite = require('pokemon-base-stats/node_modules/pokemon');

// class Hello extends Component {

//   render() {
//     this.props <== object
//     this.props.value === 1 // true;
//     this.props.hello === "hello"; // true
//   }
// }

// <Hello hello={"hello"} value={1} pokemon={this.state.pokemon}/>

// const Hello = (props) => {
//   props.value === 1 // true
//   props.pokemon === pokemon // true
//   props.hello === "hello" // true

//   const {
//     value,
//     pokemon,
//     hello
//   } = props;
// }

// <DetailView pokemon={this.state.pokemon} hello={1} />

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

class DetailView2 extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      appearance: 'original',
      forme: '',
    };
  }

  DetailView2 = ({ pokemon }) => {
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

    this.state.pokemon = pokemon;

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

    if (!id) {
      return (
        <section className="detail-view">
          <div className="sprite"></div>
          <div className="data-wrapper"></div>
        </section>
      );
    }

    const originalSprite = `https://projectpokemon.org/images/normal-sprite/${sprite
      .getName(id)
      .toLowerCase()}.gif`;

    const shinySprite = forme => {
      console.log('forme :', this.state);
      if (forme.state === 'base') {
        return `https://projectpokemon.org/images/shiny-sprite/${sprite
          .getName(id)
          .toLowerCase()}.gif`;
      } else {
      }
    };

    const color = {
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

    const style = {
      display: 'inline-block',
      width: '100px',
      textAlign: 'center',
      borderRadius: '50px',
      margin: '5px',
    };

    const appearanceTab = appearance => {
      this.setState({ appearance: appearance });

      var pokemonSprite = document.getElementsByClassName('pokemon-sprite')[0];

      if (appearance === 'original') {
        pokemonSprite.setAttribute('src', originalSprite);
      } else {
        pokemonSprite.setAttribute('src', shinySprite(this.state.forme));
      }
    };

    const updatePokemon = forme => {};

    const formeTab = forme => {
      this.setState({ forme: forme });
      this.setState({ appearance: 'original' });
      
      var pokemonSprite = document.getElementsByClassName('pokemon-sprite')[0];

      if (formes.indexOf(forme.forme) === 0) {
        pokemonSprite.setAttribute('src', originalSprite);
      } else {
        forme = forme.forme.toString().toLowerCase();
        const formeURL = `https://projectpokemon.org/images/normal-sprite/${sprite
          .getName(id)
          .toLowerCase()}-${forme}.gif`;
        pokemonSprite.setAttribute('src', formeURL);
      }
    };
    
    return (
      <section className="detail-view">
        <div className="forme-tabs">
          {formes.map(forme => (
            <input className="forme" type="radio" id={forme} defaultChecked onClick={() => formeTab({ forme })}>
              {forme}
            </input>
          ))}
        </div>
        <div className="appearance-tabs">
          <input
            className="appearance"
            type="radio"
            value="original"
            onClick={() => appearanceTab('original')}
          >
            Original
          </input>
          <input
            className="appearance"
            type="radio"
            value="shiny"
            selected={false}
            onClick={() => appearanceTab('shiny')}
          >
            Shiny
          </input>
        </div>
        <div className="sprite">
          <img className="pokemon-sprite" src={originalSprite} />
        </div>
        <div className="data-wrapper">
          <h1 className="data-id">ID: {id}</h1>
          <h2 className="data-name">Name: {name}</h2>
          <p className="data-height">Height: {Math.round(height * 0.1)}m</p>
          <p className="data-weight">Weight: {Math.round(weight * 0.1)} kg</p>
          <div className="data-type">
            Type:
            <p className="type" style={Object.assign({}, style, { backgroundColor: color[type] })}>
              {type}
            </p>
            <p
              className="type2"
              style={Object.assign({}, style, { backgroundColor: color[type2] })}
            >
              {type2}
            </p>
          </div>
          <div className="data-stats">
            <HorizontalBar data={stats} options={options} height={150} key={Math.random()} />
          </div>
        </div>
      </section>
    );
  };
}

export default DetailView2;
