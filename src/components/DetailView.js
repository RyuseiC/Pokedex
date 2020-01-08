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

const DetailView = ({ pokemon }) => {
  const {
    id,
    name,
    type,
    type2,
    hp,
    attack,
    defense,
    sp_atk,
    sp_def,
    speed,
  } = pokemon;

  const stats = {
    type: 'HorizontalBar',
    labels: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
    datasets: [
      {
        title: 'Base Stats',
        data: [hp, attack, defense, sp_atk, sp_def, speed],
        backgroundColor: ["rgb(169, 218, 144)","rgb(253, 91, 93)","rgb(244, 172, 124)","rgb(158, 184, 243)","rgb(249, 223, 127)","rgb(248, 147, 178)"]
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
      fontSize: 18
    },
    scales: {
          xAxes: [{
              ticks: {
                  fontColor: "white",
                  beginAtZero: true,
              }
          }],
          yAxes: [{
            ticks: {
                fontColor: "white",
            }
          }]
      }
  }

  console.log(stats);

  if (!id) {
    return (
      <section className="detail-view">
        <div className="sprite"></div>
        <div className="data-wrapper">
          <h1 className="data-name">ID:</h1>
          <h2 className="data-name">Name:</h2>
          <p className="data-type">Type:</p>
        </div>
      </section>
    );
  }

  const imageURL =
    id <= 721
      ? `http://pokestadium.com/sprites/xy/${sprite.getName(id).toLowerCase().replace('.', '-').replace(' ', '')}.gif`
      : `https://www.serebii.net/sunmoon/pokemon/${id}.png`;

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
    backgroundColor: color[type],
    borderRadius: '50px',
    marginLeft: '10px',
    marginRight: '10px',
  };

  const style2 = {
    display: 'inline-block',
    width: '100px',
    textAlign: 'center',
    backgroundColor: color[type2],
    borderRadius: '50px',
  };

  return (
    <section className="detail-view">
      <div className="sprite">
        <img className="pokemon-sprite" src={imageURL} />
      </div>
      <div className="data-wrapper">
        <h1 className="data-name">ID: {id}</h1>
        <h2 className="data-name">Name: {name}</h2>
        <div className="data-type">
          Type:
          <p className="type" style={style}>
            {type}
          </p>
          <p className="type2" style={style2}>
            {type2}
          </p>
        </div>
        <div className="data-stats">
          <HorizontalBar data={stats} options={options} height={150} />
        </div>
      </div>
    </section>
  );
};

export default DetailView;
