import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import './styles/App.css';
import DetailView from './DetailView';
import PokeSearch from './PokeSearch';
import PokeSort from './PokeSort';
import pokemonList from '../../node_modules/pokemon-base-stats/node_modules/pokemon/data/en.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      pokeSearch: '',
      pokeSort: 'Sort by Ascending ID',
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onPokeSearchChange = this.onPokeSearchChange.bind(this);
    this.pokemonFilter = this.pokemonFilter.bind(this);
    this.onPokeSortChange = this.onPokeSortChange.bind(this);
    this.pokemonSort = this.pokemonSort.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });

        console.log(pokemon);
      })
      .catch(err => console.log(err));
  }

  onPokeSearchChange(value) {
    this.setState({ pokeSearch: value });
  }

  onPokeSortChange(event) {
    this.setState({ pokeSort: event });
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
      return (pokemon1.name > pokemon2.name) ? 1 : ((pokemon2.name > pokemon1.name) ? -1 : 0);
      
    }

    if (pokeSort === 'Sort Z-A') {
      return (pokemon2.name > pokemon1.name) ? 1 : ((pokemon1.name > pokemon2.name) ? -1 : 0);
    }
  }

  pokemonFilter({ id }) {
    const { pokeSearch } = this.state;
    const pokemon = pokemonList[id - 1];

    const matchesName = pokemon.toLowerCase().includes(pokeSearch.toLowerCase());
    const matchesId = id.toString() === pokeSearch;

    return matchesName || matchesId;
  }

  render() {
    return (
      <div className="App">
        <header>Pokédex</header>
        <PokeSearch value={this.state.pokeSearch} onChange={this.onPokeSearchChange} />
        <PokeSort value={this.state.pokeSort} onChange={this.onPokeSortChange} />
        <br></br>
        <PokeList
          sortPokemon={this.pokemonSort}
          filterByPokemon={this.pokemonFilter}
          handleOnClick={this.handleOnClick}
        />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
