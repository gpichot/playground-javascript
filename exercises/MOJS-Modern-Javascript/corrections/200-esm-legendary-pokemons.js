"use strict";

// Legendary pokemons
const articuno = {
  id: 144,
  name: "Articuno",
  type: ["Ice", "Flying"],
  base: {
    hp: 90,
    attack: 85,
    defense: 100,
    specialAttack: 95,
    specialDefense: 125,
    speed: 85,
  },
};
const zapdos = {
  id: 145,
  name: "Zapdos",
  type: ["Electric", "Flying"],
  base: {
    hp: 90,
    attack: 90,
    defense: 85,
    specialAttack: 125,
    specialDefense: 90,
    speed: 100,
  },
};

const moltres = {
  id: 146,
  name: "Moltres",
  type: ["Fire", "Flying"],
  base: {
    hp: 90,
    attack: 100,
    defense: 90,
    specialAttack: 125,
    specialDefense: 85,
    speed: 90,
  },
};
const meotwo = {
  id: 150,
  name: "Mewtwo",
  type: ["Psychic"],
  base: {
    hp: 106,
    attack: 110,
    defense: 90,
    specialAttack: 154,
    specialDefense: 90,
    speed: 130,
  },
};

// Export par default
const LegendaryPokemons = [articuno, zapdos, moltres, meotwo];

export default LegendaryPokemons;
