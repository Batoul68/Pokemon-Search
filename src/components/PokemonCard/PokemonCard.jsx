import defaultPokemonImg from '../../assets/placeholder-pokemon.png';
import unknownPokemonImg from '../../assets/unknown-pokemon.png';
import styles from './PokemonCard.module.css';

export default function PokemonCard({pokemon}) {

  let displayPokemon;
  
  // Default pokemon card
  if (pokemon === undefined || pokemon.previous === null) {
    displayPokemon = {
      name: 'pokémon',
      type: 'pokemon type',
      sprite: defaultPokemonImg
    }
  }
  else if (pokemon === 'unknown') {
    displayPokemon = {
      name: 'unknown',
      type: 'unknown type',
      sprite: unknownPokemonImg
    }
  }
  else {
    displayPokemon = {
      name: pokemon?.name,
      type: pokemon?.types?.[0]?.type?.name,
      sprite: pokemon?.sprites?.front_default
    }
  }

  return(
    <div className={styles.card}>
      <h2 id={styles['card-title']}>{displayPokemon.name}</h2>
      <img id={styles['card-image']} alt="Pokémon Image" src={displayPokemon.sprite} />
      <p id={styles['card-text']}>{displayPokemon.type}</p>
    </div>
  );
}