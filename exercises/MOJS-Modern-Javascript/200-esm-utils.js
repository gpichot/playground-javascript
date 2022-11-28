"use strict";

function computeSumCharacteristics(pokemon) {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon;
  const sum = hp + attack + defense + specialAttack + specialDefense + speed;
  const average = sum / 6;
  return { sum, average };
}
