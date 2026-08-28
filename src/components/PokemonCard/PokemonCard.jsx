import React, { useState, useEffect } from 'react';
import defaultPokemonImg from '../../assets/placeholder-pokemon.png';
import unknownPokemonImg from '../../assets/unknown-pokemon.png';
import styles from './PokemonCard.module.css';

export default function PokemonCard({pokemon}) {

  // Default pokemon card
  const [pokemonName, setPokemonName] = useState('pokémon');
  const [pokemonType, setPokemonType] = useState('pokémon type');
  const [pokemonSprite, setPokemonSprite] = useState(defaultPokemonImg);

  /*
if (pokemon === 'unknown') {
      setPokemonName('unknown');
      setPokemonType('unknown type');
      setPokemonSprite(unknownPokemonImg);
    }
    else {
      setPokemonName(pokemon?.name);
      setPokemonType(pokemon?.types?.[0]?.type?.name);
      setPokemonSprite(pokemon?.sprites?.front_default);
    } 
  */
  return(
    <div className={styles.card}>
      <h2 id={styles['card-title']}>{pokemonName}</h2>
      <img id={styles['card-image']} alt="Pokémon Image" src={pokemonSprite} />
      <p id={styles['card-text']}>{pokemonType}</p>
    </div>
  );
}