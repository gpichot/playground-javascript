"use strict";

const bulbasaur = {
  id: 1,
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  base: {
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
  },
};

const ivysaur = {
  id: 2,
  name: "Ivysaur",
  type: ["Grass", "Poison"],
  base: {
    hp: 60,
    attack: 62,
    defense: 63,
    specialAttack: 80,
    specialDefense: 80,
    speed: 60,
  },
};

const venusaur = {
  id: 3,
  name: "Venusaur",
  type: ["Grass", "Poison"],
  base: {
    hp: 80,
    attack: 82,
    defense: 83,
    specialAttack: 100,
    specialDefense: 100,
    speed: 80,
  },
};

const charmander = {
  id: 4,
  name: "Charmander",
  type: ["Fire"],
  base: {
    hp: 39,
    attack: 52,
    defense: 43,
    specialAttack: 60,
    specialDefense: 50,
    speed: 65,
  },
};
// Export par default
const Pokemons = [bulbasaur, ivysaur, venusaur, charmander];
export default Pokemons;
