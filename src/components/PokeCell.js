import React from 'react';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundImage } = pokeClass;
  const style = { backgroundImage: `url(${backgroundImage})` };

  return <button style={style} className="poke-cell" onClick={() => handleOnClick(id)}></button>;
};

export default PokeCell;
