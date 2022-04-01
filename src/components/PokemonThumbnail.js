import './styles/PokeCell.css';
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';


const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight
}) => {
  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {type}</small>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
