import React from "react";
import "./styles/PokeSprite.css";

const PokeSprite = ({ name, appearance }) => {
  const spriteName = name
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(":", "");

  const spriteUrl = `https://projectpokemon.org/images/${appearance}-sprite/${spriteName}.gif`;
  return (
    <div className="pokemon-sprite">
      <div className="sprite">
        <img
          id="pokemon-sprite"
          src={spriteUrl}
          alt={`${name}.gif`}
        />
      </div>
    </div>
  );
};

export default PokeSprite;
