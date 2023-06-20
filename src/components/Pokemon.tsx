import { useEffect, useState } from "react";

export default function Pokemon({ url }: { url: string }) {
  const [data, setData] = useState<Pokemon>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((pokemonData) => setData(pokemonData));
  }, [url]);

  return (
    <div>
      <h2>{data?.name}</h2>
      <img src={data?.sprites.front_default} alt={`${data?.name} sprite`} />
    </div>
  );
}

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};
