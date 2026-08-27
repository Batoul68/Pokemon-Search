import pokemonImg from '../../assets/placeholder-pokemon.png';
import styles from './PokemonCard.module.css';

export default function PokemonCard({pokemon}) {
  return(
    <div className={styles.card}>
      <h2 id={styles['card-title']}>Pokemon</h2>
      <img id={styles['card-image']} alt="Pokemon Image" src={pokemonImg}/>
      <p id={styles['card-text']}>Pokemon Type</p>
    </div>
  );
}