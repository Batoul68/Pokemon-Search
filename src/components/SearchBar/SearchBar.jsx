import styles from './SearchBar.module.css';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

export default function SearchBar() {
  return(
    <>
      <form className={styles.searchContainer}>
        <label>
          <h2>Who's that Pokemon?</h2>
        </label>
        <input 
          type="text" 
          placeholder="Enter Pokemon name"
        />
        <button type="submit">Search</button>
      </form>
      <PokemonCard />
    </>
  );
}