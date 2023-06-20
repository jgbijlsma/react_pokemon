import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function PokemonList() {
  console.log("Het component wordt uitgevoerd");
  const [data, setData] = useState<PokemonRes>();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log("Het component wordt geladen");
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((pokemonData) => setData(pokemonData));
  }, [offset]);

  return (
    <div>
      <button onClick={() => setOffset(offset - 20)}>Prev</button>
      <button onClick={() => setOffset(offset + 20)}>Next</button>

      {data?.results.map((pokemon, i) => {
        return <Pokemon key={i} url={pokemon.url} />;
      })}

      <button onClick={() => setOffset(offset - 20)}>Prev</button>
      <button onClick={() => setOffset(offset + 20)}>Next</button>
    </div>
  );
}

type PokemonRes = {
  results: [
    {
      url: string;
    }
  ];
};
