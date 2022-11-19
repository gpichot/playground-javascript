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
  // - The card should be a div with the class "pokemon-card"
  // - and the pokemon name as text content
  // - add the card to the body

  console.log("--- Question 2 ---");
  // 2. Display the pokemon list:
  // - Create a div with the class "pokemon-list"
  // - Create a card for each pokemon in the array and add it to the list

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
}
