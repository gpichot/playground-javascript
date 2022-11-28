"use strict";

const allPokemons = Pokemons.concat(LegendaryPokemons);

for (let i = 0; i < allPokemons.length; i++) {
  const pokemon = allPokemons[i];
  const { sum, average } = computeSumCharacteristics(pokemon.base);

  const types = `%c${pokemon.type.join(", %c")}`;
  const typesColors = [...pokemon.type].map(
    (type) => `color: ${PokemonTypeToColor[type]};`
  );

  console.log("");
  console.log(`${pokemon.name}:`);
  console.log(`Types: ${types}`, ...typesColors);
  console.log(`Sum of ${sum} and an average of ${average}`);
}
