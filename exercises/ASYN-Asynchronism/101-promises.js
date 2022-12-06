"use strict";

console.log("Promises");

// 1. Create a function that returns a promise that resolves with a random
// integer.

// 2. Create a function that returns a promise that rejects with the value 42.

// 3. Create a function that returns a promise that resolves with a random
// integer after 3 seconds.

// 4. Use the previous function to create a function that returns a promise
// that return the sum of three random integers.

// 5. Using fetch and the endpoint https://pokeapi.fly.dev/promises/pokemons/1, get the name of the pokemon.

console.log("Async/Await");

// 6. Use the async/await pattern to get the name of the pokemon.

// 7. Fetch all the pokemon with ids 1 to 7 and print their names using the
//   async/await pattern.

console.log("Rewrite promises to use async/await");

// 8. Rewrite the following function to use async/await.

function getPokemons(ids) {
  return Promise.all(
    ids.map((id) =>
      fetch(`https://pokeapi.fly.dev/promises/pokemons/${id}`).then((res) =>
        res.json()
      )
    )
  );
}

// 9. Make sure that the function above catch errors properly.
