"use strict";

console.log("Exercises 201");

fetch("https://pokeapi.fly.dev/201/pokemons/?limit=100")
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    return result?.results || [];
  })
  .then(onReceivePokemons)
  .catch(function (e) {
    console.error(e);
  });

function onReceivePokemons(pokemons) {
  console.log("Pokemons array", pokemons);
  window.pokemons = pokemons;

  console.log("--- Question 0 ---");
  // 0. Check the structure in the browser

  console.log("--- Question 1 ---");
  // 1. Display the first pokemon, and its name
  console.log(pokemons[0].name, pokemons[0]);

  console.log("--- Question 2 ---");
  // 2. Display all the pokemon names using .forEach
  pokemons.forEach((pokemon) => console.log(pokemon.name));

  console.log("--- Question 3 ---");
  // 3. Create a new array with all the pokemon names using .map
  const pokemonNames = pokemons.map((pokemon) => pokemon.name);
  console.log(pokemonNames);

  console.log("--- Question 4 ---");
  // 4. Create a function that returns the types of a pokemon join by a comma
  //   and use it to create a new array with only the pokemon types
  function getPokemonTypes(pokemon) {
    return pokemon.types.join(",");
  }
  const pokemonTypes = pokemons.map(getPokemonTypes);
  console.log(pokemonTypes);

  console.log("--- Question 5 ---");
  // 5. Create a function that check if a pokemon is of type "fire"
  //  and use it to create a new array with only the pokemons of type "fire"
  function isPokemonOfTypeFire(pokemon) {
    return pokemon.types.includes("fire");
  }
  const firePokemons = pokemons.filter(isPokemonOfTypeFire);

  console.log(firePokemons);

  console.log("--- Question 6 ---");
  // 6. Find the pokemon with the name "pikachu" using .find
  const pikachu = pokemons.find((pokemon) => pokemon.name === "pikachu");
  console.log(pikachu);

  console.log("--- Bonus 1 ---");
  // B1. Find the pokemon with highest speed stat using .reduce

  const fastestPokemon = pokemons.reduce((currentFastestPokemon, pokemon) => {
    if (pokemon.stats.speed > currentFastestPokemon.stats.speed) return pokemon;
    return currentFastestPokemon;
  });
  console.log(fastestPokemon);

  console.log("--- Bonus 2 ---");
  // B2. Group the pokemons by their types
  const groupedPokemons = pokemons.reduce((groups, pokemon) => {
    for (const type of pokemon.types) {
      if (!groups[type]) groups[type] = [];
      groups[type].push(pokemon);
    }
    return groups;
  }, {});
  console.log(groupedPokemons);
}
