import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import './styles/App.css';
import PokeInfo from './PokeInfo';
import PokeSearch from './PokeSearch';
import PokeSort from './PokeSort';
import Axios from 'axios';
import { pokeClasses } from '../PokeClasses';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      pokemonForms: [],
      pokemonSpecies: {},
      pokeSearch: '',
      pokeSort: 'Sort by Ascending ID',
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onPokeSearchChange = this.onPokeSearchChange.bind(this);
    this.pokemonFilter = this.pokemonFilter.bind(this);
    this.onPokeSortChange = this.onPokeSortChange.bind(this);
    this.pokemonSort = this.pokemonSort.bind(this);
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });

        // console.log(data);
        // console.log(pokemon);
      })
      .catch(err => console.log(err));

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then(data => {
        const varieties = data.varieties;
        const pokemonDataPromises = varieties.map(({ pokemon: { url } }) => {
          return Axios.get(url);
        });

        Promise.all(pokemonDataPromises).then(pokemonResponses => {
          const pokemonForms = pokemonResponses.map(resp => new Pokemon(resp.data));
          // console.log(pokemonForms);
          this.setState({ pokemonForms });
        });

        this.setState({ pokemonSpecies: data });
      })
      .catch(err => console.log(err));
  }

  onPokeSearchChange(value) {
    this.setState({ pokeSearch: value });
  }

  onPokeSortChange(value) {
    this.setState({ pokeSort: value });
  }

  pokemonSort(pokemon1, pokemon2) {
    const { pokeSort } = this.state;
    if (pokeSort === 'Sort by Ascending ID') {
      return pokemon1.id - pokemon2.id;
    }

    if (pokeSort === 'Sort by Descending ID') {
      return pokemon2.id - pokemon1.id;
    }

    if (pokeSort === 'Sort A-Z') {
      return pokemon1.name > pokemon2.name ? 1 : pokemon2.name > pokemon1.name ? -1 : 0;
    }

    if (pokeSort === 'Sort Z-A') {
      return pokemon2.name > pokemon1.name ? 1 : pokemon1.name > pokemon2.name ? -1 : 0;
    }
  }

  pokemonFilter({ id }) {
    const { pokeSearch } = this.state;
    const pokemon = pokeClasses[id - 1];
    const matchesName = pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase());
    const matchesId = id.toString() === pokeSearch;

    return matchesName || matchesId;
  }

  updatePokemon(formeIndex) {
    const newPokemonURL = this.state.pokemonSpecies.varieties[formeIndex].pokemon.url;
    console.log('newPokemonURL :', newPokemonURL);
    fetch(newPokemonURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newPokemon = new Pokemon(data);
        console.log(newPokemon);
        this.setState({ pokemon: newPokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(JSON.stringify());
    return (
      <div className="App">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/RyuseiC/Pokedex">
          About
        </a>
        <header>Pokédex</header>
        <PokeSearch onChange={this.onPokeSearchChange} />
        <PokeSort onChange={this.onPokeSortChange} />
        <br></br>
        <div className="poke-container">
          <PokeList
            sortPokemon={this.pokemonSort}
            filterByPokemon={this.pokemonFilter}
            handleOnClick={this.handleOnClick}
          />
          <PokeInfo
            pokemon={this.state.pokemon}
            pokemonForms={this.state.pokemonForms}
            pokemonSpecies={this.state.pokemonSpecies}
            updatePokemon={this.updatePokemon}
          />
        </div>
      </div>
    );
  }
}

export default App;
