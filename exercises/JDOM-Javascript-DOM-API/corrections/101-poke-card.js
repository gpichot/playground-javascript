"use strict";

console.log("Exercises Pokemon Cards");

fetch("https://pokeapi.fly.dev/poke-cards/pokemons/?limit=100")
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

  console.log("--- Question 1 ---");
  // 1. Create a card for the first pokemon in the array:
  const pokemon = pokemons[1];
  // - The card should be a div with the class "pokemon-card"
  // - and the pokemon name as text content
  // - add the card to the body
  function addPokemonCard(pokemon, container) {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemon-card";

    const image = document.createElement("img");
    image.setAttribute("src", pokemon.image);
    pokemonCard.append(image);

    const types = document.createElement("p");
    types.append(pokemon.types.join(", "));
    pokemonCard.append(types);

    const name = document.createElement("strong");
    name.append(pokemon.name);
    pokemonCard.append(name);

    pokemonCard.addEventListener("mouseenter", () => {
      console.log(`Pokemon ${pokemon.name} hovered`);
    });

    container.append(pokemonCard);
  }
  addPokemonCard(pokemon, document.body);

  console.log("--- Question 2 ---");
  // 2. Display the pokemon list:
  // - Create a div with the class "pokemon-list"
  // - Create a card for each pokemon in the array and add it to the list
  const pokemonList = document.createElement("div");
  pokemonList.classList.add("pokemon-list");
  document.body.append(pokemonList);

  pokemonList.addEventListener("click", (e) => {
    console.log(e);
    alert("List clicked");
  });

  pokemons.forEach((pokemon) => addPokemonCard(pokemon, pokemonList));

  console.log("--- Question 3 ---");
  // 3. Improve the card:
  // - Add the pokemon image
  // - Add the pokemon types
  // - Move the name to a strong element
  // - Add a listener on mouse enter to display the pokemon id in the console

  console.log("--- Question 4 ---");
  // 4. Add a prompt to ask the user for his pokemon trainer name
  // - If the user enter a name, show a message at the top of the page "Hello <trainerName>"
  // - Save this name in the local storage, so that the next time the user open
  //   the page, the name is already filled and the prompt is not shown
  // - Bonus: add a button to change the trainer name

  console.log("--- Bonus 1 ---");
  // B1. Use the IntersectionObserver API to the display the pokemon name in
  // the console when the card is visible
  //
  // - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  //
  // - Change the code to log it once only

  console.log("--- Bonus 2 ---");
  // B2. This not related at all with the previous questions. But it should
  // take you a bit more time to do it.
  // Create a function that computes the Fibonacci sequence using a naive exponential
  // algorithm using the following signature:
  // fibonacci(0) = 0
  // fibonacci(1) = 1
  // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  // - Use the function to compute the fibonacci sequence for 42
  // - Display the result in the console
  // - Move this to a web worker
}
