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

  console.log("--- Question 0 ---");
  // 0. Check the structure in the browser

  console.log("--- Question 1 ---");
  // 1. Display the first pokemon, and its name

  console.log("--- Question 2 ---");
  // 2. Display all the pokemon names using .forEach

  console.log("--- Question 3 ---");
  // 3. Create a new array with all the pokemon names using .map

  console.log("--- Question 4 ---");
  // 4. Create a function that returns the types of a pokemon join by a comma
  //   and use it to create a new array with only the pokemon types

  console.log("--- Question 5 ---");
  // 4. Create a function that check if a pokemon is of type "fire"
  //  and use it to create a new array with only the pokemons of type "fire"

  console.log("--- Question 6 ---");
  // 5. Find the pokemon with the name "pikachu" using .find

  console.log("--- Bonus 1 ---");
  // B1. Find the pokemon with highest speed stat using .reduce

  console.log("--- Bonus 2 ---");
  // B2. Group the pokemons by their types
}
