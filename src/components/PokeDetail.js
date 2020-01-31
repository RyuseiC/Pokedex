import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const PokeDetail = ({pokemon}) => {
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
  
  return (
    <div className="data-wrapper">
      <h1 className="data-id">No. {id}</h1>
      <h2 className="data-name">Name: {name}</h2>
      <p className="data-height">Height: {Math.round(height * 0.1)}m</p>
      <p className="data-weight">Weight: {Math.round(weight * 0.1)} kg</p>
      {/* <p className="data-description">Description: {description}</p> */}
      <div className="data-type">
        Type:
        <p className="type" style={Object.assign({}, typeStyle, { backgroundColor: typeColor[type] })}>
          {type}
        </p>
        <p className="type2" style={Object.assign({}, typeStyle, { backgroundColor: typeColor[type2] })}>
          {type2}
        </p>
      </div>
      <div className="data-stats">
        <HorizontalBar data={stats} options={options} height={150} />
      </div>
    </div>
  );
};

export default PokeDetail;
