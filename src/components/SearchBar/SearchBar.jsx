import styles from './SearchBar.module.css';
import { useState } from 'react';
import { getPokemon } from '../../services/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

export default function SearchBar() {

  const [pokemon, setPokemon] = useState();
  const [input, setInput] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await getPokemon(input);
      setPokemon(data);
    }
    catch (error) {
      console.error(error);
      setPokemon('unknown');
    }
    setInput('');
  }

  return(
    <>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <label>
          <h2 id={styles['search-label']}>Find a Pokémon!</h2>
        </label>
        <input 
          id={styles['search-box']}
          type="text" 
          placeholder="Enter Pokémon name"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button id={styles['search-button']}type="submit">Search</button>
      </form>
      <PokemonCard pokemon={pokemon}/>
    </>
  );
}