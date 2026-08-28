
export async function getPokemon(name) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Couldn't find that Pokemon: ${response.statusText}`);
      }
      return response.json();
    });
}