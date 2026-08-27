import styles from './SearchBar.module.css';
import React, { useState } from 'react';
import { getPokemon } from '../../services/pokemon.js';
import PokemonCard from '../PokemonCard/PokemonCard.jsx';

export default function SearchBar() {

  const [pokemon, setPokemon] = useState({});
  const [input, setInput] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await getPokemon(input)
        .then(data => {
          setPokemon(data);
          console.log(data);
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  return(
    <>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <label>
          <h2 id={styles['search-label']}>Find a Pokemon!</h2>
        </label>
        <input 
          id={styles['search-box']}
          type="text" 
          placeholder="Enter Pokemon name"
          onChange={e => setInput(e.target.value)}
        />
        <button id={styles['search-button']}type="submit">Search</button>
      </form>
      <PokemonCard />
    </>
  );
}