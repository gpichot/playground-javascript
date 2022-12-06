"use strict";

console.log("Promises");

const randomInt = (n = 1000) => Math.floor(Math.random() * n);
// 1. Create a function that returns a promise that resolves with a random
// integer.
const randomPromise = () => Promise.resolve(randomInt());

// 2. Create a function that returns a promise that rejects with the value 42.
const rejectPromise = () => Promise.reject(42);

// 3. Create a function that returns a promise that resolves with a random
// integer after 3 seconds.
const randIntPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(randomInt()), 3000);
  });

randIntPromise().then((n) => console.log("randIntPromise", n));

// 4. Use the previous function to create a function that returns a promise
// that return the sum of three random integers.
const sumPromise = async () => {
  const n1Promise = randIntPromise();
  const n2Promise = randIntPromise();
  const n3Promise = randIntPromise();
  const [n1, n2, n3] = await Promise.all([n1Promise, n2Promise, n3Promise]);

  return n1 + n2 + n3;
};

sumPromise().then(console.log);

// 5. Using fetch and the endpoint https://pokeapi.fly.dev/promises/pokemons/1, get the name of the pokemon.

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.fly.dev/promises/pokemons/${id}`);
  return await res.json();
}

fetchPokemon(1).then((pokemon) => console.log(pokemon.name));

console.log("Async/Await");

// 6. Use the async/await pattern to get the name of the pokemon.

async function getPokemonName(id) {
  const pokemon = await fetchPokemon(id);
  return pokemon.name;
}

getPokemonName(1).then(console.log);

// 7. Fetch all the pokemon with ids 1 to 7 and print their names using the
//   async/await pattern.

getPokemons([1, 2, 3, 4, 5, 6, 7]).then((pokemons) => {
  const names = pokemons.map((pokemon) => pokemon.name);
  console.log(names);
});

console.log("Rewrite promises to use async/await");

// 8. Rewrite the following function to use async/await.

function getPokemons(ids) {
  try {
    const promises = ids.map(async (id) => {
      const response = await fetch(
        `https://pokeapi.fly.dev/promises/pokemons/${id}`
      );
      return response.json();
    });
    return Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
}

// 9. Make sure that the function above catch errors properly.
