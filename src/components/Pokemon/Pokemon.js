import { useState } from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemon';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setPokemonName(event.currentTarget.elements.pokemonName.value);
    event.currentTarget.reset();
  };

  let content = null;

  if (isFetching) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error.data}</p>;
  }

  if (!error && !isFetching && data) {
    content = (
      <img
        src={data.sprites.other['official-artwork'].front_default}
        alt={data.name}
      />
    );
  }

  return (
    <>
      {content}
      <form onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Pokemon;
