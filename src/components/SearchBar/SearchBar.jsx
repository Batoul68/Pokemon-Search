import styles from './SearchBar.module.css';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

export default function SearchBar() {
  return(
    <>
      <form className={styles.searchContainer}>
        <label>
          <h2 id={styles['search-label']}>Find a Pokemon!</h2>
        </label>
        <input 
          id={styles['search-box']}
          type="text" 
          placeholder="Enter Pokemon name"
        />
        <button id={styles['search-button']}type="submit">Search</button>
      </form>
    </>
  );
}