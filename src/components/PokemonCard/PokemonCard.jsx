import pokemonImg from '../../assets/card-placeholder.jpg';
import styles from './PokemonCard.module.css';

export default function PokemonCard() {
  return(
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Pokemon</h2>
      <img className={styles.cardImg} alt="Pokemon Image" src={pokemonImg}/>
      <p className={styles.cardText}>Pokemon Type</p>
    </div>
  );
}