import React from "react";
import "./styles/PokeSprite.css";

const PokeSprite = ({ name, appearance, cry }) => {
  name = name.replace(/\s/g, "").toLowerCase();
  
  const spriteUrl = `https://projectpokemon.org/images/${appearance}-sprite/${name}.gif`;
  return (
    <div className="pokemon-sprite">
      <div className="sprite">
        <img
          id="pokemon-sprite"
          src={spriteUrl}
          alt={`${name}.gif`}
          onClick={() => cry(name)}
        />
      </div>
    </div>
  );
};

export default PokeSprite;
