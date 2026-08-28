import React, { useState, useEffect } from 'react';
import defaultPokemonImg from '../../assets/placeholder-pokemon.png';
import unknownPokemonImg from '../../assets/unknown-pokemon.png';
import styles from './PokemonCard.module.css';

export default function PokemonCard({pokemon}) {

  const [pokemonName, setPokemonName] = useState();
  const [pokemonType, setPokemonType] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();
  
  useEffect(() => {

    // Default pokemon card
    if (pokemon === undefined || pokemon.previous === null) {
      setPokemonName('pokémon');
      setPokemonType('pokemon type');
      setPokemonSprite(defaultPokemonImg);
    }
    else if (pokemon === 'unknown') {
      setPokemonName('unknown');
      setPokemonType('unknown type');
      setPokemonSprite(unknownPokemonImg);
    }
    else {
      setPokemonName(pokemon?.name);
      setPokemonType(pokemon?.types?.[0]?.type?.name);
      setPokemonSprite(pokemon?.sprites?.front_default);
    }
  }, [pokemon]);
  

  return(
    <div className={styles.card}>
      <h2 id={styles['card-title']}>{pokemonName}</h2>
      <img id={styles['card-image']} alt="Pokémon Image" src={pokemonSprite} />
      <p id={styles['card-text']}>{pokemonType}</p>
    </div>
  );
}